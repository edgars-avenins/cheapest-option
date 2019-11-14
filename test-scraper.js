const fs = require('fs')
const $ = require('cheerio')

let file = "/home/student/Downloads/Fresh\ Beef\ \&\ Lamb\ \|\ I\ shop\ New\ World.html"
fs.readFile(file, 'utf8', (err,html) => {
  if(err) {
    console.log(err)
  } else {
  
    
    console.log($('fs-pagination__info', html))
    
    
    //console.log(priceArr)
  }
})

