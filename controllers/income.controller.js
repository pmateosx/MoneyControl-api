const createError = require('http-errors')
const Income = require('../models/Income.model')

module.exports.create = (req, res, next) => {
    const income = { name, amount, user } = req.body
    Income.create(income)
        .then( income => res.status(200).json(income))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Income.findById(req.params.id)
      .then(income => res.status(200).json(income))
      .catch(next)
}

  module.exports.update = (req, res, next) => {
    Income.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(incomeUpdated => {
        res.status(200).json(incomeUpdated)
      })
      .catch(next)
}

module.exports.delete = (req, res, next) => {
    Income.findByIdAndDelete(req.params.id)
      .then(income => res.status(202).json(income))
      .catch(next)
}