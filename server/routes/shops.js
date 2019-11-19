const express = require('express')
const router = express.Router()

const rp = require('request-promise')

const fn = require('../func')

let cdBrowse = ['bakery', 'deli-chilled-foods', 'fruit-vegetables', 'meat', 'seafood', 'baby-care', 'baking-cooking', 'biscuits-crackers', 'breakfast-foods', 'canned-prepared-foods', 'chocolate-sweets-snacks', 'cleaning-homecare', 'clothing-manchester', 'drinks-hot-cold', 'frozen-foods', 'health-welness', 'home-kitchenware', 'liquor-beer-cider', 'liquor-wine', 'meal-ingredients', 'office-entertainment', 'personal-care', 'pet-care', 'toys-party-needs']
let nextPage = '?page=2'
let counter = 2

let url = 'https://shop.countdown.co.nz/shop/browse/meat?page='
let url1 = 'https://www.ishopnewworld.co.nz/category/fresh-foods-and-bakery/butchery/fresh-pork'
let url2 = 'https://www.paknsaveonline.co.nz/category/fresh-foods-and-bakery/butchery/fresh-pork'

router.get('/', (req, res) => {
  res.send('Hello')
})

router.get('/countdown', (req, res) => {
//how to get it to wait for the data from recursive func

  let page = 0
  res.json(recGetData(page, null))
  


//works
  function recGetData(page, data){
    if(page == 10) {
      console.log(data)
      return data
    }
    rp(url + page).then(html => {
      let data = fn.processCD(html)
      return recGetData(page+1, data)
    })
  }


  // rp(url).then(html => {
  //     res.json(fn.processCD(html))
  // })
})


router.get('/newworld', (req, res) => {
  rp(url1).then(html => {
      res.json(fn.processNW(html))
  })
})

router.get('/paknsave', (req, res) => {
  rp(url2).then(html => {
      res.json(fn.processNW(html))
  })
})

module.exports = router