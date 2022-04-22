const createError = require('http-errors')
const Goal = require('../models/Goal.model')

module.exports.create = (req, res, next) => {
    const goal = { name, amount, user } = req.body
    Goal.create(goal)
        .then(goal => res.status(200).json(goal))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Goal.findById(req.params.id)
      .then(goal => res.status(200).json(goal))
      .catch(next)
}

  module.exports.update = (req, res, next) => {
    Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(goalUpdated => {
        res.status(200).json(goalUpdated)
      })
      .catch(next)
}

module.exports.delete = (req, res, next) => {
    Goal.findByIdAndDelete(req.params.id)
      .then(goal => res.status(202).json(goal))
      .catch(next)
}