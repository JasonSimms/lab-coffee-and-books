const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema ({
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['Boss', 'Developer', 'TA']
    }


})

module.exports = mongoose.model('Book', bookSchema)