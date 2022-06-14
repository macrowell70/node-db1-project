const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
    const { name, budget } = req.body;
    if (name === undefined || budget === undefined) { next({
      status: 400,
      message: "name and budget are required"
    }) }
    else if (name.trim().length < 3 || name.trim().length > 100) { next({
      status: 400,
      message: "name of account must be between 3 and 100"
    }) }
    else if (typeof budget !== 'number' || isNaN(budget)) { next({
      status: 400,
      message: "budget of account must be a number"
    }) }
    else if (budget < 0 || budget > 100000000) { next({
      status: 400,
      message: "budget of account is too large or too small"
    }) }
    else {
      req.account = ({ name: name.trim(), budget: budget })
      next()
    }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id)
    if (!account) { next({ status: 404, message: "account not found" }) }
    if (account) {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}
