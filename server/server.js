const express = require('express')
const rp = require('request-promise')


const fn = require('./func').processData

const server = express()
let url = 'https://shop.countdown.co.nz/shop/browse/meat?page=1'
let url1 = 'https://www.ishopnewworld.co.nz/category/fresh-foods-and-bakery/butchery/fresh-beef--lamb'
let url2 = 'https://www.paknsaveonline.co.nz/category/fresh-foods-and-bakery/butchery/fresh-beef--lamb'


server.use(express.json())
server.use(express.static('public'))

let dataArr = []

server.get('/', (req, res) => {
    res.json(dataArr)
})

server.get('/countdown', (req, res) => {
    rp(url).then(html => {
        //dataArr = fn(html)
        res.json(fn(html))
    })
})


server.get('/newworld', (req, res) => {
    rp(url1).then(html => {
        res.send(html)
    })
})

server.get('/paknsave', (req, res) => {
    rp(url2).then(html => {
        res.send(html)
    })
})
module.exports = server