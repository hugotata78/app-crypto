const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')

//modules
const coinRoutes = require('./routes/coins.route')
const userRoutes = require('./routes/user.routes')
const db = require('./db/db')

//configuraciones servidor
app.set('name', 'Server')
app.set('port', process.env.PORT || 4000)

//database
db()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(session({
    secret: 'top secret',
    resave: false,
    saveUninitialized: true
}))

//routes
app.use('/api',coinRoutes)
app.use('/api',userRoutes)

module.exports = app
