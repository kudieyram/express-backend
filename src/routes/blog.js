const router = require('express').Router()

const { addPost, getPosts } = require('../controllers/blogController')

//creating post 
router.post('/api/newblog', addPost)

//retrieving posts
router.get('/api/blogs', getPosts)

module.exports = router