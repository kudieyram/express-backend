require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// defining the function app
const app = express()

// Defining database function 
const db = process.env.dbURI
const port = process.env.PORT

// Connection to the Database, and app listening on 
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

