const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true

    },
    expiration: {
        type: Date,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Ingredient", ingredientSchema)