const router = require('express').Router();
const Accounts = require('./accounts-model');

const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware');

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
    res.status(200).json(accounts)
  } catch {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
