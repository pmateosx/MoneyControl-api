const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const userController = require('../controllers/user.controller')
const incomeController = require('../controllers/income.controller')

// Home
router.get('/', (req, res, next) => res.status(200).json({ ok: true }))

// Auth
router.post('/login', authMiddleware.isNotAuthenticated ,authController.login)
router.post('/register',authMiddleware.isNotAuthenticated, authController.create)

// User
router.get('/user/me', authMiddleware.isAuthenticated, userController.getCurrentUser)
router.get('/user/:id', authMiddleware.isAuthenticated, userController.getUserById)

// Income
router.post('/income/new', authMiddleware.isAuthenticated, incomeController.create)
router.get('/income/:id', authMiddleware.isAuthenticated, incomeController.detail)
router.patch('/income/:id', authMiddleware.isAuthenticated, incomeController.update)
router.delete('/income/:id', authMiddleware.isAuthenticated, incomeController.delete)


module.exports = router