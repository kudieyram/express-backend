const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: [true, 'Title is required']
    },
    author: {
       type: String,
       required: [true, 'Author is required']
    },
    body: {
        type: String,
        required: [true, 'Body is required']
    },
    social: {
       type: [
          {
          _id:0,
          github: {
             type: String,
             required: [true, 'Github is required']
          },
          linkedIn:{
             type: String
          },
          website:{
             type: String
          }
       }
     ],
       required: [true, 'Social media links is required'],
       default: undefined
    }
   },
    {
       timestamps: true,
       writeConcern: {
         w: 'majority',
         j: true,
         wtimeout: 1000
   }
})

const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog