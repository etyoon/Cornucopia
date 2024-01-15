const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true

    },
    expiration: {
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Ingredient", ingredientSchema)