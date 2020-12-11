const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author : {
        type : String,
        required : [true , 'Author is required ']
    },
    title: {
        type: String,
        required: true,    
    },
    content : {
        type: String,
        required: true,
    },
    date:{
        type : Date,
        default : Date.now()
    },
    upvotes: {
        type : Number,
        default : 0
    },

    downvotes : {
        type : Number,
        default : 0
    }
},

     {
        timestamps:true,
        writeConcern:{
            w: 'majority',
            j:true,
            wtimeout:1000
        }
    },
);

const Post = mongoose.model('post',postSchema)

module.exports = Post