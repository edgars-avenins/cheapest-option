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

    // console.log($($('.fs-product-card .fs-price-lockup .fs-price-lockup__dollars', html)[0]).text())
    //[0].children[0].data
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
            originProductId: JSON.parse(
                $('.fs-product-card', html)[0]
                    .attribs['data-track-parameters'])
                        .ecommerce
                        .click
                        .products[0]
                        .id,
            price: JSON.parse(
                $('.fs-product-card__footer-container', html)[i]
                    .attribs['data-options'])
                    .ProductDetails
                    .PricePerItem
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