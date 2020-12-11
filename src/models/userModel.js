const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        minlength : [6, 'fullname must have a minimum lengnth of 6'],
        maxlength : [20, 'fullname must have a maximum length of 20'],
        unique : true ,
        required : [true,'Please fullname is required'],
        lowercase : true 
    },

    email : {
        type : String,
        unique : true ,
        required : [true,'Please email is required'],
        lowercase : true 
    },


    password : {
        type : String,
        unique : true ,
        required : [true,'Please password is required'], 
    }
});

const User = mongoose.model('user',userSchema)

userSchema.pre('save',async function(next){
    const salt = bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)

    next()
})

module.exports = User