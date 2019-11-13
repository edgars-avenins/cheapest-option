const express = require('express')
const router = express.Router()

const rp = require('request-promise')

const CDfn = require('../func').processData

let url = 'https://shop.countdown.co.nz/shop/browse/meat?page=1'
let url1 = 'https://www.ishopnewworld.co.nz/category/fresh-foods-and-bakery/butchery/fresh-beef--lamb'
let url2 = 'https://www.paknsaveonline.co.nz/category/fresh-foods-and-bakery/butchery/fresh-beef--lamb'

router.get('/', (req, res) => {
  res.send('Hello')
})

router.get('/countdown', (req, res) => {
  rp(url).then(html => {
      res.json(CDfn(html))
  })
})


router.get('/newworld', (req, res) => {
  rp(url1).then(html => {
      res.send(html)
  })
})

router.get('/paknsave', (req, res) => {
  rp(url2).then(html => {
      res.send(html)
  })
})

module.exports = router