import { request } from "./request";

export function getNowCart() {
  return request({
    url: "/ShoppingJd/getCartAllInfo",
    method: "post"
  });
}

//更新购物车数量
export function updateCartNumber(skuModel) {

  return request({
    url: "/ShoppingJd/updateSkuCart",
    method: "post",
    data: skuModel
  });
}

//添加
export function addSkuCart(skuModel) {
  return request({
    url: "/ShoppingJd/addSkuCart",
    method: "post",
    data: skuModel
  });
}

//删除
export function deleteSkuCart(skuModel) {
  return request({
    url: "/ShoppingJd/deleteSkuCart",
    method: "post",
    data: skuModel
  });
}
