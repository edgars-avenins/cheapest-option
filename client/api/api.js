import request from 'superagent'


const shopApiUrl = '/api/v1/shop/'
//consider passing which shop here
export function getShopData(){
  return request
    .get(shopApiUrl + 'countdown')
    .then(res => res.body)
}