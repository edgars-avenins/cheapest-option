const $ = require('cheerio')
let cdDataArr = []
let nwDataArr = []


function processCD(html) {
    let dataCount = $('div .gridProductStamp', html).length

    // console.log($('.gridProductStamp-subPrice', html)[6].prev.prev.children[0].data)
    // console.log(($('.gridProductStamp-priceContainer', html)[5].children[3].children[0].data).split('').map(i => {
    //     if(i.charCodeAt() === 32) return
    //     return i
    // }).join(''))
    
    for (let i = 0; i < dataCount; i++) {
        let dataGroup
        if($('.gridProductStamp-priceContainer', html)[i].children.length === 3){
            dataGroup = {
                name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
                newPrice: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
            }
        }else if($('.gridProductStamp-priceContainer', html)[i].children.length === 5){
            dataGroup = {
                name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
                newPrice: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
                pricePer: ($('.gridProductStamp-priceContainer', html)[i].children[3].children[0].data).split('').map(i => {
                    if(i.charCodeAt() === 32) return
                    return i
                }).join(''),
            }
        }else {
            dataGroup = {
                name: $('div .gridProductStamp', html)[i].attribs['data-datalayer-name'],
                newPrice: $('div .gridProductStamp', html)[i].attribs['data-datalayer-price'],
                oldPrice: ($('.gridProductStamp-priceContainer', html)[i].children[3].children[0].data).split('').map(i => {
                    if(i.charCodeAt() === 32) return
                    return i
                }).join(''),
                pricePer: ($('.gridProductStamp-priceContainer', html)[i].children[5].children[0].data).split('').map(i => {
                    if(i.charCodeAt() === 32) return
                    return i
                }).join(''),
            }
        }



        // console.log(dataGroup)
        cdDataArr.push(dataGroup)
    }
    // console.log(cdDataArr)
    return cdDataArr
}

function processNW(html) {
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
        nwDataArr.push(dataGroup)
    }
    // console.log(nwDataArr)
    return nwDataArr
}

module.exports = {
    processCD,
    processNW,
} 