require('dotenv').config()

const express = require('express')
const ingredientRoutes = require('./routes/ingredients')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')


//creates express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/ingredient/', ingredientRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db and listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

