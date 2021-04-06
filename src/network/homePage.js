import {request} from "./request"

//人员信息及福利列表
export function getUserMsg(){
  return request({
    url:'/User/getUserInfo',
    method:'post'
  })
}
