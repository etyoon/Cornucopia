const express = require('express')
const {
    createRecipe,
    getOneRecipe,
    getRecipes,
    deleteRecipe,
    updateRecipe
} = require('../controller/recipeController')

const router = express.Router()
const Recipe = require('../models/recipeModels')

//get all recipes
router.get('/', getRecipes)

//get one recipe
router.get('/:id', getOneRecipe)


//create a new recipe
router.post('/', createRecipe)

//delete a recipe
router.delete('/:id',deleteRecipe)

//change a recipe
router.patch('/:id', updateRecipe)



module.exports = router
