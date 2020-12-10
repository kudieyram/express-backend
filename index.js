require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const app = express()

const db = process.env.dbURI
const port = process.env.PORT

mongoose.connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, ()=>{
    app.listen(port, ()=> {
        console.info('Application Started');
    })
})

app.use(express.json())

