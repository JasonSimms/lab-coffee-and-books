const mongoose = require('mongoose')
const Coffee = require('../models/Coffee')

const restaurantData = [
    {
        name: 'Parker Bowles',
        location: {
            lat: 52.502858,
            lng: 13.409726,
        },
    },
    {
        name: 'Pacifico',
        location: {
            lat: 52.503721,
            lng: 13.409978,
        },
    },
    {
        name: 'Spindler',
        location: {
            lat: 52.496286,
            lng: 13.42123,
        },
    },
    {
        name: 'VOLT',
        location: {
            lat: 52.493696,
            lng: 13.429847,
        },
    },
    {
        name: 'Crackers',
        location: {
            lat: 52.516476,
            lng: 13.388752,
        },
    },
    {
        name: 'Rusty',
        location: {
            lat: 52.492732,
            lng: 13.427824,
        },
    },
]

mongoose
    .connect(
        'mongodb://localhost/coffee_books',
        { useMongoClient: true }
    )
    .then(() => {
        return Coffee.findOne({ name: 'Rusty' })
    })
    .then(rusty => {
        if (rusty) return
        return Coffee.create(restaurantData)
    })
    .then(() => {
        process.exit(0)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    })