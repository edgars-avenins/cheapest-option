const $ = require('cheerio')

function processData(html){
    let dataArr = []
    let dataCount = $('div .gridProductStamp', html).length
    
            for (let i = 0; i < dataCount; i++) {
                let dataPair = {
                    name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
                    price: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
                    image: $('div .gridProductStamp-product .gridProductStamp-image', html)[i].attribs.src
                }
                dataArr.push(dataPair)
            }
            console.log(dataArr)
            return dataArr
}

module.exports = {
    processData,
} 