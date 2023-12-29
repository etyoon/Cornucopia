const express = require('express')
const {
    addIngredient,
    updateIngredient,
    findIngredient,
    getIngredients,
    deleteIngredient
} = require('../controller/ingredientsController')

const router = express.Router()
const Ingredient = require('../models/ingredientsModels')

//get all ingredient
router.get('/', getIngredients)

//get one recipe
router.get('/:id', findIngredient)


//create a new recipe
router.post('/', addIngredient)

//delete a recipe
router.delete('/:id',deleteIngredient)

//change a recipe
router.patch('/:id', updateIngredient)



module.exports = router
