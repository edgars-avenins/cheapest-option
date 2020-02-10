const express = require('express')
const router = express.Router()

const rp = require('request-promise')

const fn = require('../func')

let cdBrowse = ['bakery', 'deli-chilled-foods', 'fruit-vegetables', 'meat', 'seafood', 'baby-care', 'baking-cooking', 'biscuits-crackers', 'breakfast-foods', 'canned-prepared-foods', 'chocolate-sweets-snacks', 'cleaning-homecare', 'clothing-manchester', 'drinks-hot-cold', 'frozen-foods', 'health-wellness', 'home-kitchenware', 'liquor-beer-cider', 'liquor-wine', 'meal-ingredients', 'office-entertainment', 'personal-care', 'pet-care', 'toys-party-needs']
let nextPage = '?page='

let url = 'https://shop.countdown.co.nz/shop/browse/'
let url1 = 'https://www.ishopnewworld.co.nz/category/fresh-foods-and-bakery/butchery?pg='
let url2 = 'https://www.paknsaveonline.co.nz/category/fresh-foods-and-bakery/butchery?pg='

router.get('/', (req, res) => {
  res.send('Hello')
})

router.get('/countdown', (req, res) => {
  //used to make it faster
  // rp('https://shop.countdown.co.nz/shop/browse/bakery?page=2').then(html => {
  //       res.json(fn.processCD(html))
  //   })

 

  let page = 1
  // let i = 0

  rp(url + cdBrowse[0] + nextPage + page)
  .then(html => {
    console.log(html)
    res.json(html)})

  // recGetData(page, null)
  //   .then((data) => res.json(data))
  
  // function recGetData(page, data){
  //   return rp(url + cdBrowse[i] + nextPage + page).then(html => {
  //     let data = fn.processCD(html)
  //     console.log(data.length)
  //       if(page > 0) {
  //         if(i < cdBrowse.length-1){
  //           i++
  //           page = 1
  //           console.log('/////////////////////////////////////////////////////////////////////////////////////////////', cdBrowse[i])
  //           return recGetData(page, data)
  //         }
  //         return data
  //       }
  //       return recGetData(page+1, data)
  //     })
  // }
})


router.get('/newworld', (req, res) => {
  let page = 1
  recGetData(page, null)
    .then((data) => res.json(data))
  
  function recGetData(page, data){
    return rp(url1 + page).then(html => {
      let data = fn.processNW(html)
        if(page == 5) {
          return data
        }return recGetData(page+1, data)
      })
  }


  // rp(url1).then(html => {
  //     res.json(fn.processNW(html))
  // })
})

router.get('/paknsave', (req, res) => {
  let page = 1
  recGetData(page, null)
    .then((data) => res.json(data))
  
  function recGetData(page, data){
    return rp(url2 + page).then(html => {
      let data = fn.processNW(html)
        if(page == 5) {
          return data
        }return recGetData(page+1, data)
      })
  }


  // rp(url2).then(html => {
  //     res.json(fn.processNW(html))
  // })
})

module.exports = router