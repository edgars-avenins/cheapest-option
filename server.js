const express = require('express')
const rp = require('request-promise')

const server = express()

let url = 'https://shop.countdown.co.nz/shop/browse/meat?page=1'


server.use(express.static('public'))

server.get('/countdown', (request, response) => {
    rp(url).then(html => {
        response.send(html)
    })
})

module.exports = server