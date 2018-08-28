const mongoose = require('mongoose')
const Schema = mongoose.Schema
const coffeeSchema = new Schema ({
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['Boss', 'Developer', 'TA']
    }


})

module.exports = mongoose.model('Coffee', coffeeSchema)