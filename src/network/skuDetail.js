import {request} from "./request"

export function getSkuDetail(sku){
  return request({
    url:'/ShoppingJd/getAllGoodsDteil?sku='+sku,
    method:'post'
  })
}


