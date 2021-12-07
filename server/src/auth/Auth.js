const User = require('../models/User')
const jwt = require('jsonwebtoken')

const Auth = async (req, res, next) => {
    try {
        const strToken = req.headers.authorization
        if (!strToken) {
            res.json('Error')
        } else {
            const token = strToken.split('')[1]
            const secret = 'topSecret'
            const key = jwt.verify(token, secret)
            const user = await User.findById(key.user._id)
            if (!user) res.json('User not found')
            next()
        }
    } catch (error) {
        res.json('Error')
    }
}