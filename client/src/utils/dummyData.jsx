export default HomeStayData = [
    {
        id: 1,
        vacant: true,
        location: {
            city: 'Mount Abu',
            state: 'Rajasthan',
            address: 'xyz, HomeStay 1',
            longitude: '123',
            latitude: '123'
        },
        capacity: 3,
        rooms: 4,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, labore dicta! Exercitationem maxime repellat inventore quo atque veritatis temporibus! Enim, magnam ab. Consectetur repellat doloribus id. Labore ab explicabo inventore?',
        cost: 599,
        amenities: {
            'home_food': true,
            wifi: true,
            private_room: true,
            attached_washroom: true
        },
        availability: [
            {
            from: '10-5-2022', to: '26-5-2022'
            },
            {
            from: '30-5-2022', to: '8-6-2022'
            } 
        ],
        media: {
            images: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/192058868.jpg?k=391f4ae723b82b5231de06eda204465a91a001e622d0334e3def280411483167&o=&hp=1', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/192058868.jpg?k=391f4ae723b82b5231de06eda204465a91a001e622d0334e3def280411483167&o=&hp=1'],
            video: []
        },
        reviews: {
            user_id: 2,
            rating: 4.3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt?'
        },
        owner_id: 1
    }
]