const $ = require('cheerio')

function processCD(html) {
    let dataArr = []
    let dataCount = $('div .gridProductStamp', html).length

    console.log($('.product-entry', html))
    //why ????
    for (let i = 0; i < dataCount; i++) {
        let dataGroup = {
            name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
            price: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
            image: $('div .gridProductStamp-product .gridProductStamp-image', html)[i].attribs.src
        }
        dataArr.push(dataGroup)
    }
    //console.log(dataArr)
    return dataArr
}

function processNW(html) {
    let dataArr = []
    let dataCount = $('div .fs-product-card', html).length

   
    for (let i = 0; i < dataCount; i++) {
        let dataGroup = {
            name: $('.fs-product-card .fs-product-card__description', html)[i]
                .children[1]
                .children[0]
                .data,
            category: JSON.parse(
                $('.fs-product-card', html)[i]
                    .attribs['data-track-parameters'])
                        .ecommerce
                        .click
                        .actionField
                        .list,
            price: Number(JSON.parse(
                $('.fs-product-card__footer-container', html)[i]
                    .attribs['data-options'])
                    .ProductDetails
                    .PricePerItem),
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