const mutations = {
  //更新公司id
  updateCorpid(state,payload){
    localStorage.setItem('corpid',payload.corpid)
    state.corpid=payload.corpid
  },
  //添加购物车
  addCart(state, payload) {
    state.cartList.push(payload.info)
    sessionStorage.setItem('cartList',JSON.stringify(state.cartList))
  },
  //修改购物车
  updateCart(state,payload){
    const oldInfo = state.cartList.find(item => item.skuid === payload.getmodel.skuid)
    oldInfo.product_num=payload.getmodel.product_num
    oldInfo.stockMsg=payload.getmodel.stockMsg
    oldInfo.checked=payload.getmodel.checked
    sessionStorage.setItem('cartList',JSON.stringify(state.cartList))
  },
  //更新token有关信息
  updateToken(state,payload){
    state.token=payload.token;
    state.corpid=payload.corpid;
    localStorage.setItem('token',payload.token)
    localStorage.setItem('corpid',payload.corpid)
  },
  //删除购物车商品
  deleteCart(state,payload){
    state.cartList= state.cartList.filter(a=>a.skuid!=payload.getmodel.skuid);
    sessionStorage.setItem('cartList',JSON.stringify(state.cartList))
  },
  //设置默认地址
  setDefAddress(state,payload){
    state.defAddress=payload.defAddress;
    sessionStorage.setItem('defAddress',payload.defAddress)
  }
}

export default mutations

