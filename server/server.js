const express = require('express')
const rp = require('request-promise')
const hbs = require('express-handlebars')

const process = require('./func')

const server = express()
let url = 'https://shop.countdown.co.nz/shop/browse/meat?page=1'
let url1 = 'https://www.ishopnewworld.co.nz/category/fresh-foods-and-bakery/butchery/fresh-beef--lamb'
let url2 = 'https://www.paknsaveonline.co.nz/category/fresh-foods-and-bakery/butchery/fresh-beef--lamb'

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))

server.get('/countdown', (request, response) => {
    rp(url).then(html => {
        console.log(process.processData(html))
        response.send(html)
    })
})


server.get('/newworld', (request, response) => {
    rp(url1).then(html => {
        data = html
        console.log(typeof html)
        response.send(html)
    })
})

server.get('/paknsave', (request, response) => {
    rp(url2).then(html => {
        data = html
        console.log(typeof html)
        response.send(html)
    })
})
module.exports = server