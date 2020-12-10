const {Router}= require('express')

const router = Router()

const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController')

//route for creating user an account
router.post('/api/newUser', createUser)

//getting a user
router.get('/api/users', getUsers)

//updating user
router.put('api/userUpdate', updateUser)

//deleting a user
router.delete('/api/deleteUser',deleteUser)

module.exports = 