require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const studentRoute = require("./routes/studentRoute")
app.use(express.json())

// Student route
app.use("/api", studentRoute)

// // routes
// app.get('/', (req, res) => {
//     res.send('Hello NODE API')
// })

const MONGO_CONNECTION = process.env.MONGO_CONNECTION

mongoose
    .connect(MONGO_CONNECTION)
    .then(() => {
        console.log("connected to MongoDB Atlas")
        app.listen(3000,()=> {
            console.log('node API app is running on port 3000')
        })
    })
    .catch((error) => {
        console.log(error);
    })

