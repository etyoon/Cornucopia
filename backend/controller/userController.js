const User = require("../models/userModels")
const mongoose = require('mongoose')

//get all users
const getUsers = async(req, rep) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(User)
}

//get one user
const findUser = async(req, rep) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'not valid userid'})
    }

    const user = await User.findById({id})

    if (!user) {
        return res.status(400).json({error: "No user found"})
    }
    res.status(200).json(user)
}

//create a new user
const createUser = async (req, res) => {
    const {fname, lname, email, password} = req.body

    //add doc to db
    try {
        const user = await User.create({fname, lname, email, password})
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user id'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json({user})
}

//update a recipe

const updateUser = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const user = await User.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json({user})
}

module.exports = {
    findUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
}

