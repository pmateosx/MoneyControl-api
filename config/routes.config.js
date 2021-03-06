const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const userController = require('../controllers/user.controller')
const incomeController = require('../controllers/income.controller')
const expenseController = require('../controllers/expense.controller')
const goalController = require('../controllers/goal.controller')

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

// Expense
router.post('/expense/new', authMiddleware.isAuthenticated, expenseController.create)
router.get('/expense/:id', authMiddleware.isAuthenticated, expenseController.detail)
router.patch('/expense/:id', authMiddleware.isAuthenticated, expenseController.update)
router.delete('/expense/:id', authMiddleware.isAuthenticated, expenseController.delete)

// Goal
router.post('/goal/new', authMiddleware.isAuthenticated, goalController.create)
router.put('/goal/main/:id',authMiddleware.isAuthenticated, goalController.maineo)
router.get('/goal/:id', authMiddleware.isAuthenticated, goalController.detail)
router.patch('/goal/:id', authMiddleware.isAuthenticated, goalController.update)
router.delete('/goal/:id', authMiddleware.isAuthenticated, goalController.delete)


module.exports = router