const express = require('express')
const cors = require('cors')

const shop = require('./routes/shops')


const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:3000'}))
server.use(express.static('public'))

server.use('/api/v1/shop', shop)

module.exports = server