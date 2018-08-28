const mongoose = require('mongoose')
const Schema = mongoose.Schema
const coffeeSchema = new Schema ({
    name: String,
    location: {
        lat: Number,
        lng: Number,
    },
    notes: String
})

module.exports = mongoose.model('Coffee', coffeeSchema)