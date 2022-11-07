# Run this script for first time setups

import config
import psycopg2
import psycopg2.extras


class PostgreSQL:
    """PostgreSQL database functions"""

    def __init__(self):
        """Connect to the PostgreSQL database and set its connection objects"""
        self.conn = psycopg2.connect(
            host=config.host,
            database=config.database,
            user=config.user,
            password=config.password
        )
        self.c = self.conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    def set_schema(self):
        """Upload the schema to the PostgreSQL database"""
        with open('utils/schema.sql') as schema:
            self.c.execute(schema.read())
        self.conn.commit()

    def add_data(self):
        """Insert the data to the PostgreSQL database"""
        with open('utils/data.sql') as data:
            self.c.execute(data.read())
        self.conn.commit()

if __name__ == '__main__':
    db = PostgreSQL()
    db.set_schema()
    db.add_data()
