require('dotenv').config()
const express = require('express')
const mongoose = require('express')
const { mongo } = require('mongoose')


const app = express()

const db = process.env.dbURI
const port = process.env.PORT

mongoose.connect(db, { 
    userNewParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, ()=>{
    app.listen(port, ()=> {
        console.info('Application Started');
    })
})

app.use(express.json())

