const express = require("express")
const {MongoClient} = require("mongodb")
let db

const app = express()

const uri = "mongodb+srv://etyoon06:fridge1234@cornucopia.c28udss.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    const db = client.db('cornucopia');
    const users = db.collection('users');
    const user = await users.find().toArray();
    console.log(user);
}

app.get("/", async(req, res) => {
    const Users = await db.collection('users').find().toArray()
    console.log(Users)
    res.send("Welcome to home page")
})

app.get("/admin", (req, res) => {
    res.send("This is the admin page")
})

run().catch(console.dir)