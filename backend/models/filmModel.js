const mongoose = require('mongoose')

const Schema = mongoose.Schema

const filmsSchema = new Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_sortie: {
        type: String,
        required: true
    },
    Longuer: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Films', filmsSchema)