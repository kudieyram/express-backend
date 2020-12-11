const {Router} = require('express')

const userRouter = Router()

const {createUser,loginUser,updateUser} = require('../controllers/userController')

//Route for signup
userRouter.post('/blog-api/user/signup',createUser);

//Route for login
userRouter.post('blog-api/user/login',loginUser);

//Route for updating user details
userRouter.put('blog-api/user/update',updateUser);



module.exports = userRouter



