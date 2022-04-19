const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')

// Home
router.get('/', (req, res, next) => res.status(200).json({ ok: true }))

// Auth
router.post('/login', authController.login)
router.post('/resgister', authController.create)

// User

module.exports = router