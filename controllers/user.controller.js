const User = require('../models/User.model')
const createError = require('http-errors')
require('../models/Expense.model')
require('../models/Income.model')
require('../models/Goal.model')

module.exports.getCurrentUser = (req, res, next) => {
    User.findById(req.currentUser)
        .populate('income')
        .populate('goal')
        .populate('expense')
        .then((user) => {
            if(!user){
                next(createError(404, 'User not found'))
            } else {
                res.status(200).json(user)
            }
        })
        .catch(next)
}

module.exports.getUserById = (req, res, next) => {
    const { id } = req.params

    User.findById(id)
        .populate('income')
        .populate('goal')
        .populate('expense')
        .then( user => {
            if (!user){
                next(createError(404, 'User not found'))
            } else {
                res.status(200).json(user)
            }
        })
        .catch(next)
}