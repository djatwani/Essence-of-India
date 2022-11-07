import flask
import datetime

from database import PostgreSQL

query = flask.Blueprint('query', __name__)
db = PostgreSQL()
date_format = '%d-%m-%Y'

def get_available_homestays(check_in: datetime.date, check_out: datetime.date) -> dict[int, dict]:
    """Return the homestays that are available in the given time range"""
    homestays = {}

    db.c.execute('SELECT * FROM availability')
    for id, start, end in db.c:
        if check_in >= start and check_out <= end:
            info = homestays.get(id, {'availability': []})
            info['availability'].append({
                'from': datetime.datetime.strftime(start, date_format),
                'to': datetime.datetime.strftime(end, date_format)
            })
            homestays[id] = info
    return homestays

@query.route('/query')
def find_availability():
    temp_homestays = get_available_homestays(
        datetime.datetime.strptime(flask.request.args['check_in'], date_format).date(),
        datetime.datetime.strptime(flask.request.args['check_out'], date_format).date()
    )
    city = flask.request.args['city']
    guests = flask.request.args['guests']
    homestays = {}

    if not temp_homestays:
        return {
            'message': 'No available homestay in the given duration not found!'
        }, 404

    db.c.execute(
        '''
            SELECT
              *
            FROM
              homestay
            WHERE
              id = ANY (%s)
              AND city = %s
              AND capacity >= %s
        ''', (list(temp_homestays.keys()), city, guests)
    )
    for homestay in db.c:
        # Fetch media content of the homestay
        db.c.execute('SELECT src, kind FROM media WHERE id = %s', (homestay[0],))
        media = {'images': [], 'videos': []}
        for src, kind in db.c:
            if kind == 'img':
                media['images'].append(src)
            else:
                media['videos'].append(src)

        # Fetch the reviews of the homestay
        db.c.execute(
            'SELECT user_id, rating, description, date FROM review WHERE homestay_id = %s',
            (homestay[0],)
        )
        reviews = {}
        for id, rating, desc, date in db.c:
            reviews[id] = {
                'rating': rating,
                'description': desc,
                'date': datetime.datetime.strftime(date, date_format),
            }

        # Update the data to the main dictionary
        homestays[homestay[0]] = {
            'location': {
                'city': homestay[1],
                'state': homestay[2],
                'address': homestay[3],
                'lattitude': homestay[4],
                'longitude': homestay[5],
            },
            'capacity': homestay[6],
            'rooms': homestay[7],
            'description': homestay[8],
            'cost': homestay[9],
            'amenities': {
                'home_food': homestay[10],
                'wifi': homestay[11],
                'private_room': homestay[12],
                'attach_washroom': homestay[13]
            },
            'availability': temp_homestays[homestay[0]]['availability'],
            'media': media,
            'reviews': reviews,
            'owner_id': homestay[14]
        }
    return homestays
