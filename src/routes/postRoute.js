const {Router} = require('express')

const blogRouter = Router()

const {createPost,getPost,getPostByAuthor,getPostByParam,updatePost,deletePost} = require('../controllers/postController')

//route for creating post
blogRouter.post('/blog-api/blog/newPost',createPost);

//route for getting all  posts or blogs 
blogRouter.get('/blog-api/blog/newPost',getPost);

//route for getting post by author
blogRouter.get('/blog-api/blog/newPost',getPostByAuthor);

//route for getting post by param
blogRouter.get('/blog-api/blog/:postId',getPostByParam);

//route for updating post
blogRouter.patch('/blog-api/blog/newPost',updatePost);

//route for deleting post
blogRouter.delete('/blog-api/blog/newPost',deletePost)


module.exports = blogRouter

