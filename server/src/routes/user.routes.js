const { Router } = require('express')
const router = Router()
const { creatUsers, login, logout } = require('../controllers/user.controllers')

router.post('/create',creatUsers)
router.post('/login',login)
router.delete('/logout',logout)

module.exports = router