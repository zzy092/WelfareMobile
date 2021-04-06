import { addSkuCart, updateCartNumber, deleteSkuCart } from "network/jdCart.js";
import { submitOrder } from "network/jdOrder";
import { getNowCart } from "network/jdCart";

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
              type: "deleteCart",
              getmodel: payload.skuModel
            });
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
  },
  //提交订单
  submitOrder(context, payload) {
    return new Promise(resolve => {
      submitOrder(payload.queryModel).then(res => {
        if (res.success) {
          let deleteSkus = payload.queryModel.skus;

          //删除刚刚在购物车里 购买成功的商品
          for (let index = 0; index < deleteSkus.length; index++) {
            const element = deleteSkus[index];
            let obj = {};
            obj.skuid = element.skuId;
            context.commit({
              type: "deleteCart",
              getmodel: element
            });
          }

          console.log(res);
          return resolve(res.result.order_sn);
        } else {
          return resolve("");
        }
      });
    });
  },
  //同步cart
  syscCart(context) {
    return new Promise(resolve => {
      getNowCart().then(res => {
        let dbCartList = res.result;
        if (res.success) {
          //删除所有
          context.commit({
            type: "deleteAllCart"
          });
          //重写添加
          for (let index = 0; index < dbCartList.length; index++) {
            var element = dbCartList[index];
            let obj = {};
            obj.skuid = element.skuid;
            obj.product_num = element.number;
            obj.product_name = element.productName;
            obj.product_img = element.img;
            obj.product_jdprice = element.productJdPrice;
            obj.product_ptprice = element.productPtPrice;
            obj.product_price = element.productPrice;
            obj.sale_value = element.sale;
            obj.stockMsg = element.stockStateDesc;
            obj.checked = true;

            context.commit({
              type:"addCart",
              info:obj
            })
          }
          return resolve("同步购物车成功");
        } else {
          return resolve("同步购物车失败");
        }
      });
    });
  }
};




export default actions;
