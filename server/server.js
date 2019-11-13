const express = require('express')
const rp = require('request-promise')

const shop = require('./routes/shops')


const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/shop', shop)

module.exports = server