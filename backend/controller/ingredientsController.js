const Ingredient = require('../models/ingredientsModels')
const mongoose = require('mongoose')

const getIngredients = async (req, res) => {
    const ingredient = await Ingredient.find({}).sort({createdAt: -1})

    res.status(200).json(ingredient)
}

//get single recipe
const findIngredient = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such ingredient'})
    }
    const ingredient = await Ingredient.findById(id)

    if (!ingredient) {
        return res.status(400).json({error: "No such ingredient"})
    }

    res.status(200).json(ingredient)
}

//create a new recipe
const addIngredient = async (req, res) => {
    const {title, quantity, expiration} = req.body

    let emptyfields = []

    if (!title) {
        emptyfields.push('title')
    }

    if (!quantity) {
        emptyfields.push('quantity')
    }

    if (!expiration) {
        emptyfields.push('expiration')
    }

    if(emptyfields.length > 0) {
        return res.status(400).json({error: "please fill in all the fields", emptyfields})
    }

    //add doc to db
    try {
        const ingredient = await Ingredient.create({title, quantity, expiration})
        res.status(200).json(ingredient)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a recipe

const deleteIngredient = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such ingredient'})
    }

    const ingredient = await Ingredient.findOneAndDelete({_id: id})

    if (!ingredient) {
        return res.status(404).json({error:'No such ingredient'})
    }
    res.status(200).json(ingredient)
}

//update a recipe

const updateIngredient = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such ingredient'})
    }

    const ingredient = await Ingredient.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if (!ingredient) {
        return res.status(404).json({error:'No such ingredient'})
    }
    res.status(200).json({ingredient})
}

module.exports = {
    getIngredients,
    findIngredient,
    addIngredient,
    deleteIngredient,
    updateIngredient,
}