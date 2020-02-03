import request from 'superagent'


const shopApiUrl = '/api/v1/shop/'

export function getShopData(shopName){
  return request
    .get(shopApiUrl + shopName)
    .then(res => res.body)
}
