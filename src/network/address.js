import { request } from "./request";

//获取默认地址
export function getMastAddress() {
  return request({
    url: "/User/getDefaultAddress",
    method: "post"
  });
}
//获取地址
export function getAllAddress() {
  return request({
    url: "/User/getAllUserAddress",
    method: "post"
  });
}
//设置默认地址
export function setMastAddress(addressId) {
  return request({
    url: "/User/setMasterAddress?addressId=" + addressId,
    method: "post"
  });
}

//更新地址
export function updateAddress(addressModel) {
  return request({
    url: "/User/updateUserAddress",
    method: "post",
    data: addressModel
  });
}

//删除地址
export function deleteAddress(addressId) {
  return request({
    url: "/User/deleteUserAddress?addressId=" + addressId,
    method: "post"
  });
}

//添加地址
export function addAddress(addressModel) {
  return request({
    url: "/User/addUserAddress",
    method: "post",
    data: addressModel
  });
}
