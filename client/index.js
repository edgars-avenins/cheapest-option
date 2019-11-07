// 'use strict';

// const $ = require('cheerio')


// // let url = 'https://shop.countdown.co.nz/shop/browse/meat?page=1'
// let url = '/countdown'

// let dataArr = []

// alert('works')

// then( html => {
//         // console.log($('div .gridProductStamp-product .gridProductStamp-image', html)[5])
//         let dataCount = $('div .gridProductStamp', html).length

//         for (let i = 0; i < dataCount; i++) {
//             let dataPair = {
//                 name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
//                 price: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
//                 image: $('div .gridProductStamp-product .gridProductStamp-image', html)[i].attribs.src
//             }
//             dataArr.push(dataPair)
//         }
//         console.log(dataArr)
//     })
//     .catch( err => {
//         console.log(err)
//     })
