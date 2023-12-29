const express = require('express')
const {
    findUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
} = require('../controller/userController')

const router = express.Router()

//get all users
router.get('/', getUsers)

//get one user
router.get('/:id', findUser)

//create user
router.put('/', createUser)

//delte user
router.delete('/:id', deleteUser)

//update user
router.patch('/:id', updateUser)

module.exports = router