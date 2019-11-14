const fs = require('fs')
const $ = require('cheerio')

let file = "/home/student/Downloads/Fresh\ Beef\ \&\ Lamb\ \|\ I\ shop\ New\ World.html"
fs.readFile(file, 'utf8', (err,html) => {
  if(err) {
    console.log(err)
  } else {
    let priceArr = []
    let dataCount = $('div .fs-product-card', html).length
    
    console.log($('div > .fs-price-lockup__dollars', html)[0].children[0].data)
    for(let i = 0; i < dataCount; i++){
      let dollars = $($('div > .fs-price-lockup__dollars', html)[i]).text()
      let cents = $($('.fs-price-lockup__cents', html)[i]).text()
      let price = dollars + '.' + cents
      priceArr.push(price)
    }
    
    //console.log(priceArr)
  }
})

