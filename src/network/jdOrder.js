import { request } from "./request";

//获取订单运费
export function getOrderFreight(skuModel) {
  return request({
    url: "/OrderJd/getOrderFreight",
    method: "post",
    data: skuModel
  });
}

//提交订单
export function submitOrder(skuModel) {
  return request({
    url: "/OrderJd/submitOrder",
    method: "post",
    data: skuModel
  });
}
