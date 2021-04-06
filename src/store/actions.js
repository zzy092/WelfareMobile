import { addSkuCart, updateCartNumber, deleteSkuCart } from "network/jdCart.js";

const actions = {
  deleteCart(context, payload) {
    return new Promise(resolve => {
      console.log("[Action]-[购物车]-[删除商品]");
      const oldInfo = context.state.cartList.find(
        item => item.skuid === payload.skuModel.skuid
      );
      if (oldInfo) {
        deleteSkuCart(oldInfo).then(res => {
          if (res.success) {
            context.commit({
              type:'deleteCart',
              getmodel:payload.skuModel
            })
            return resolve("已删除");
          } else {
            return resolve("删除失败");
          }
        });
      } else {
        return resolve("000");
      }
    });
  },
  //异步添加购物车商品
  addCart(context, payload) {
    return new Promise(resolve => {
      // 1.查看是否添加过
      const oldInfo = context.state.cartList.find(
        item => item.skuid === payload.skuModel.skuid
      );

      // 2.修改 或  添加
      if (oldInfo) {
        console.log("[Action]-[购物车]-[更新数量]");
        updateCartNumber(payload.skuModel).then(res => {
          if (res.success) {
            context.commit({
              type: "updateCart",
              getmodel: payload.skuModel
            });
            return resolve("购物车已更新");
          } else {
            console.log("购物车更新错误信息 ↓↓↓↓↓↓ ");
            return resolve("更新失败");
          }
        });
      } else {
        console.log("[Action]-[购物车]-[添加商品]");
        addSkuCart(payload.skuModel).then(res => {
          if (res.success) {
            context.commit("addCart", { info: payload.skuModel });
            return resolve("添加成功");
          } else {
            console.log("购物车添加错误信息 ↓↓↓↓↓↓ ");
            // console.log(res);
            return resolve("添加失败");
          }
        });
      }
    });
  }
};

export default actions;
