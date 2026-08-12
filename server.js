const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express();

dotenv.config();

app.use(express.json()) // Its job is to read JSON data sent by the client and convert it into a JavaScript object.

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected successfully!")
    })
    .catch((err)=>{
        console.log("MongoDB connection error" + err)
    })

app.get('/home',(req,res)=>{
    res.send("<h1>Welcome to Todo!</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
