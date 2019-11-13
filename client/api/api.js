import request from 'superagent'


const shopApiUrl = '/api/v1/shop/'
//consider passing which shop here
export function getShopData(shopName){
  return request
    .get(shopApiUrl + shopName)
    .then(res => {
      console.log(res)
      return res.body
    })
}