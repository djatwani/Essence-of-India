import flask

from database import PostgreSQL
from query import query
from booking import booking


app = flask.Flask('essence-api')
app.register_blueprint(query)
app.register_blueprint(booking)
db = PostgreSQL()

@app.route('/')
def main():
    return {
        'message': 'You have hit the main page of this API!'
    }
