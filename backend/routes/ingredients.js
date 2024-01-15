const express = require('express')
const {
    addIngredient,
    updateIngredient,
    findIngredient,
    getIngredients,
    deleteIngredient
} = require('../controller/ingredientsController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require autho for all ingredients routes
router.use(requireAuth)


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
