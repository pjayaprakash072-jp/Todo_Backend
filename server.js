const express = require('express')
const dotenv = require('dotenv')
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000

app.get('/home',(req,res)=>{
    res.send("<h1>Welcome to Todo!</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
