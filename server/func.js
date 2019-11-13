const $ = require('cheerio')

function processCD(html) {
    let dataArr = []
    let dataCount = $('div .gridProductStamp', html).length

    for (let i = 0; i < dataCount; i++) {
        let dataGroup = {
            name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
            price: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
            image: $('div .gridProductStamp-product .gridProductStamp-image', html)[i].attribs.src
        }
        dataArr.push(dataGroup)
    }
    return dataArr
}

function processNW(html) {
    let dataArr = []
    let dataCount = $('div .fs-product-card', html).length

    console.log($('div .fs-product-card__description', html)[0].children[1].children[0].data)

    for(let i = 0; i < dataCount; i++){
        let dataGroup = {
            name: $('div .fs-product-card__description', html)[i].children[1].children[0].data
        }
        dataArr.push(dataGroup)
    }
    console.log(dataArr)
    return dataArr
}

module.exports = {
    processCD,
    processNW,
} 