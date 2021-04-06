import {request} from "./request"

//轮播 与 分类
export function getHomeMultidata(){
  return request({
    url:'/ShoppingJd/getHomePageInfo',
    method:'post'
  })
}

//商品列表
export function getHomeProducts(pageIndex,pageSize){
  return request({
    url:'/ShoppingJd/getHomePageProductInfo?pageIndex='+pageIndex+'&pageSize='+pageSize,
    method:'post'
  })
}
