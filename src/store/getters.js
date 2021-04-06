const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.cartList.length
  },
  tokenValue(state){
    return state.token
  },
  corpidValue(state){
    return state.corpid
  },
  getSumCartNumber(state){
    // console.log('被调用');
    let sumNumber=0;
    for (const key in state.cartList) {
      sumNumber+=state.cartList[key].product_num
    }
    return sumNumber;
  },
  getDefAddress(state){
    return state.defAddress
  }
}

export default getters
