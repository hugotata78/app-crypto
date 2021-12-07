const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    creatUsers: async (req, res) => {
        try {
            const { username, email, password } = req.body
            const user = new User({
                username: username,
                email: email,
                password: bcrypt.hashSync(password, 10)
            })

            await user.save()
            res.json({ status: 'Success', msg: 'User created successfully', data: 'New User' })
        } catch (error) {
            res.json({ status: 'Error', msg: 'The user could not be created', data: null })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email: email })
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        req.session.userId = user._id
                        req.session.username = user.username
                        const token = jwt.sign({ user: user }, 'topSecret', { expiresIn: '1h' })
                        res.json({
                            status: 'Success',
                            msg: 'Session start successful',
                            data: {
                                tk: token,
                                id: req.session.userId,
                                username: req.session.username
                            }
                        })
                    } else {
                        res.json({ status: 'Error', msg: 'Invalid Data!', data: null })
                    }
                })
            }
        } catch (error) {
            res.json({ status: 'Error', msg: 'Login failed' })
        }
    },
    logout: (req,res)=>{
        try {
            if(req.session){
                req.session.destroy((err)=>{
                    if(err){
                        res.json('Unable to log out')
                    }else{
                        res.json('Logout successful')
                    }
                })
            }
        }
        catch (error) {
            res.json('Error logout')
        }
    }
}