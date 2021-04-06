import axios from "axios";


export function request(config) {
  //获取token
  // let token=this.$store.getters.tokenValue
  // if(token===undefined||token===''){

  // }

  var storage = window.localStorage;
  let token=storage.token

  //1、创建axios的实例
  const instance = axios.create({
    baseURL: "http://localhost:1905/api",
    //timeout: 5000,
    headers:{'token':token}
  });

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
     console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
