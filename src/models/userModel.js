const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Defining the User Schema
const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        minlength : [10, 'fullname must have a minimum lengnth of 10'],
        maxlength : [20, 'fullname must have a maximum length of 20'],
        unique : true,
        required : [true,'Please fullname is required'],
        lowercase : true,
    },

    email : {
        type : String,
        unique : true ,
        required : [true,'Please email is required'],
        lowercase : true, 
    },

    password : {
        type : String,
        unique : true ,
        required : [true,'Please password is required'], 
    }
});

// Defining a single user (on how to save the data)
const User = mongoose.model('user',userSchema)

userSchema.pre('save',async function(next){
    const salt = bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)

    next()
})

module.exports = User