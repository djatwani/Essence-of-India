from datetime import datetime

def convert_to_date(date: str):
    return datetime.strptime(date, '%d-%m-%Y').date()