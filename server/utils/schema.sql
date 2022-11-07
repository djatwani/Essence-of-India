CREATE TABLE IF NOT EXISTS "user" (
    id         int primary key,
    aadhar_id  bigint unique,
    name       varchar(40),
    phone      bigint unique,
    phone_alt  bigint,
    email      text check (email like '%__@__%._%')
);

CREATE TABLE IF NOT EXISTS homestay (
    id                 int primary key,
    city               varchar(30),
    state              varchar(20),
    address            text,
    lattitude          float,
    longitude          float,
    capacity           smallint,
    rooms              smallint,
    description        text,
    cost               int,
    home_food          boolean,
    wifi               boolean,
    private_room       boolean,
    attached_washroom  boolean,
    owner_id           bigint references "user"(aadhar_id)
);

CREATE TABLE IF NOT EXISTS availability (
    id         int references homestay(id),
    check_in   date,
    check_out  date,
    primary key (id, check_in)
);

CREATE TABLE IF NOT EXISTS media (
    id    int references homestay(id),
    src   text,
    kind  char(3) check (kind='img' or kind='vid'),
    primary key (id, src)
);

CREATE TABLE IF NOT EXISTS review (
    user_id      bigint references "user"(id),
    rating       smallint,
    description  text,
    date         date,
    homestay_id  int references homestay(id),
    primary key (user_id, homestay_id)
);

CREATE TABLE IF NOT EXISTS booking (
    user_id      int references "user"(id),
    book_date    date,
    check_in     date,
    check_out    date,
    guests       smallint,
    rooms        smallint,
    total_cost   int,
    homestay_id  int references homestay(id),
    primary key (user_id, homestay_id)
);

CREATE TABLE IF NOT EXISTS admin (
    id    int references "user"(id),
    role  text
);
