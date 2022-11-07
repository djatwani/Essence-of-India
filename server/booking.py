import flask
import datetime

from database import PostgreSQL
from utils.utils import convert_to_date

booking = flask.Blueprint('booking', __name__)
db = PostgreSQL()
date_format = '%d-%m-%Y'

@booking.route('/book', methods=['POST'])
def book_homestay():
    user_id = flask.request.args['user_id']
    book_date = datetime.datetime.now().date()
    check_in = flask.request.args['check_in']
    check_out = flask.request.args['check_out']
    guests = flask.request.args['guests']
    rooms = flask.request.args['rooms']
    total_cost = flask.request.args['total_cost']
    homestay_id = flask.request.args['homestay_id']

    db.c.execute(
        '''INSERT INTO booking VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s
        )
        ''', (user_id, book_date, check_in, check_out, guests, rooms, total_cost, homestay_id)
    )

    check_in = convert_to_date(check_in)
    check_out = convert_to_date(check_out)
    db.c.execute(
        'SELECT check_in, check_out from availability WHERE check_in <= %s AND id = %s',
        (check_in, homestay_id)
    )
    start, end = db.c.fetchone()

    initial = check_in - start
    final = end - check_out

    db.c.execute(
        'DELETE FROM availability WHERE check_in <= %s AND id = %s', (check_in, homestay_id,)
    )
    if initial.days > 0:
        db.c.execute(
            'INSERT INTO availability VALUES (%s, %s, %s)',
            (homestay_id, start, check_in - datetime.timedelta(days=1))
        )
    if final.days > 0:
        db.c.execute(
            'INSERT INTO availability VALUES (%s, %s, %s)',
            (homestay_id, check_out + datetime.timedelta(days=1), end)
        )
        db.conn.commit()

    return {
        'message': f'Homestay #{homestay_id} booked successfully'
    }
