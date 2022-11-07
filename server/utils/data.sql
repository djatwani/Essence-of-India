-- Inserting admins
INSERT INTO "user" VALUES (
    1, NULL, 'Aman Saini', 7082752489, NULL, 'aman_12013026@nitkkr.ac.in'
), (
    2, NULL, 'Rahul Rathore', 9996400755, NULL, 'rahul_12012036@nitkkr.ac.in'
), (
    3, NULL, 'Utsav Soni', 9616083286, NULL, 'utsav_12013078@nitkkr.ac.in'
), (
    4, NULL, 'Deepansh Jatwani', 9953902272, NULL, 'deepansh_12012067@nitkkr.ac.in'
), (
    5, NULL, 'Shambhavi Singh', 6203958886, NULL, 'shambhavi_12012114@nitkkr.ac.in'
), (
    6, NULL, 'Priyanshu Tripathi', 8527981983, NULL, 'priyanshu_12022005@nitkkr.ac.in'
);

-- Inserting default users
INSERT INTO "user" VALUES (
    7, NULL, 'Abhishek Ushara', 9468745677, NULL, 'abhishek_12012050@nitkkr.ac.in'
), (
    8, NULL, 'Bhavya Gulati', 8278217096, NULL, 'bhavya_12013115@nitkkr.ac.in'
);

-- Inserting homestay owners
INSERT INTO "user" VALUES (
    9, 123456789876, 'Aniket Bhatia', 9818621746, NULL, 'aniket_12012056@nitkkr.ac.in'
), (
    10, 123456789765, 'Saket Raman', 9113787770, NULL, 'saket_12012097@nitkkr.ac.in'
);

-- Inserting homestays
INSERT INTO homestay VALUES (
    1, 'Mount Abu', 'Rajasthan', 'xyz street', 12.34, 32.14, 3, 4,
    '''Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, labore dicta! Exercitationem maxime repellat inventore quo atque veritatis temporibus!
    Enim, magnam ab. Consectetur repellat doloribus id. Labore ab explicabo inventore?
    ''', 599, true, true, true, true, 123456789876
), (
    2, 'Ludhiana', 'Punjab', 'pqr street', 56.24, 18.98, 5, 3,
    '''Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, labore dicta! Exercitationem maxime repellat inventore quo atque veritatis temporibus!
    Enim, magnam ab. Consectetur repellat doloribus id. Labore ab explicabo inventore?
    ''', 800, true, true, true, true, 123456789876
), (
    3, 'Chennai', 'Tamil Nadu', 'abc street', 78.24, 37.58, 4, 1,
    '''Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, labore dicta! Exercitationem maxime repellat inventore quo atque veritatis temporibus!
    Enim, magnam ab. Consectetur repellat doloribus id. Labore ab explicabo inventore?
    ''', 1500, false, true, true, true, 123456789876
), (
    4, 'Mumbai', 'Maharashtra', 'mno street', 29.58, 15.94, 2, 1,
    '''Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, labore dicta! Exercitationem maxime repellat inventore quo atque veritatis temporibus!
    Enim, magnam ab. Consectetur repellat doloribus id. Labore ab explicabo inventore?
    ''', 1200, false, true, true, false, 123456789765
);

-- Add homestay availability
INSERT INTO availability VALUES
    (1, '10-05-2022', '26-05-2022'),
    (1, '30-05-2022', '08-06-2022'),
    (2, '12-07-2022', '24-08-2022'),
    (2, '26-03-2022', '15-09-2022'),
    (3, '10-04-2022', '24-09-2022'),
    (3, '14-04-2022', '17-10-2022'),
    (4, '23-01-2023', '24-04-2023'),
    (4, '02-05-2022', '04-05-2022')
;

INSERT INTO media VALUES (
    1, 'https://github.com/1', 'img'
), (
    1, 'https://github.com/2', 'img'
), (
    2, 'https://github.com/3', 'img'
), (
    2, 'https://github.com/4', 'img'
), (
    3, 'https://github.com/5', 'img'
), (
    3, 'https://github.com/6', 'img'
), (
    4, 'https://github.com/7', 'img'
), (
    4, 'https://github.com/8', 'img'
);

INSERT INTO review VALUES
    (7, 8, 'Loved the stay!', '02-03-2022', 1),
    (8, 7, 'Wholesome family, enjoyed the trip', '24-06-2021', 1),
    (7, 9, 'Nice', '12-10-2021', 2),
    (7, 6, 'Made my trip worth the money. Better than an expensive hotel!!', '20-02-2022', 3)
;