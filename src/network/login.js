import { request } from "./request";
import CBC from "common/CBC";

//账号登录
export function accountLogin(userModel) {
  var jsonStr = JSON.stringify(userModel);
  console.log(CBC.encrypt);
  var strParam = CBC.encrypt(jsonStr);
  console.log(strParam);
  var obj = {};
  obj.login = strParam;
  obj.device = 1; //手机
  return request({
    url: "/Login/accountLogin",
    method: "post",
    data: obj
  });
}


