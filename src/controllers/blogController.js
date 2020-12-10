const Blog = require('../models/blog')

const BlogController = {}

BlogController.addPost = async ( req, res) => {
    try {
        let blog = new Blog(req.body)
        let result = await blog.save()
        res.status(200).send({message: 'Blog created', result})
    } catch (error) {
        console.log(error)
    }
}

BlogController.getPosts = async (req, res) => {
    try {
        let blog = await Blog.find({})
        blog ? res.status(200).send({message: 'Blog available', blog}) : res.status(400).send({message: 'Blog unavailable'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = BlogController