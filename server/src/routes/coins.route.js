const { Router } = require('express')
const router = Router()
const coinsController = require('../controllers/coins.controllers')

//routes
router.get('/coins', coinsController.getListCoins)
router.get('/coins/:id',coinsController.getCoin)

module.exports = router 