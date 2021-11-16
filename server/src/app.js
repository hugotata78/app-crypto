const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const coinRoutes = require('./routes/coins.route')

//configuraciones servidor
app.set('name', 'Server')
app.set('port', process.env.PORT || 4000)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api',coinRoutes)

module.exports = app
