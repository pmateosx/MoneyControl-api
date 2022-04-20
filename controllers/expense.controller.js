const createError = require('http-errors')
const Expense = require('../models/Income.model')

module.exports.create = (req, res, next) => {
    const expense = { name, amount, user } = req.body
    Expense.create(expense)
        .then( expense => res.status(200).json(expense))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Expense.findById(req.params.id)
      .then(expense => res.status(200).json(expense))
      .catch(next)
}

  module.exports.update = (req, res, next) => {
    Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(expenseUpdated => {
        res.status(200).json(expenseUpdated)
      })
      .catch(next)
}

module.exports.delete = (req, res, next) => {
    Expense.findByIdAndDelete(req.params.id)
      .then(expense => res.status(202).json(expense))
      .catch(next)
}