<template>
  <div id="jdconfirmorder" v-if="this.$route.query.submitType != undefined">
    <order-nav-bar />

    <def-address-wap :defAddress="defAddress" />
    <order-info-wrap :orderInfo="orderInfo" />
    <check-out :orderPrice="orderPrice" :freightPrice="freight" />
    <div v-if="isdefAddress&&isFreight">
      <button @click="confirmOrder">在线支付</button>
    </div>
  </div>
  <div v-else>
    <h1>无效的请求</h1>
  </div>
</template>

<script>
import DefAddressWap from "components/content/confirmOrder/DefAddressWrap.vue";
import OrderInfoWrap from "components/content/confirmOrder/OrderInfoWrap.vue";

import OrderNavBar from "./childComps/OrderNavBar.vue";
import CheckOut from "./childComps/CheckOut";

import { getMastAddress } from "network/address";
import { getOrderFreight, submitOrder } from "network/jdOrder";
export default {
  components: {
    OrderNavBar,
    DefAddressWap,
    OrderInfoWrap,
    CheckOut,
  },
  name: "JdConfirmOrder",
  created() {
    this._getMastAddress();
    this._setOrderInfo();
    this._getOrderFreight();
  },
  data() {
    return {
      defAddress: {},
      orderInfo: [],
      checkInfo: {},
      freight: 0,
      orderPrice: 0,
      addressId: 0,
      isdefAddress: false,
      isFreight: false,
    };
  },
  methods: {
    _setOrderInfo() { //商品详情
      const suumitType = this.$route.query.submitType;
      //==1 购物车提交
      if (suumitType == "1") {
        const cartList = this.$store.getters.cartList;
        this.orderInfo = cartList.filter((item) => {
          return item.checked;
        });
      }
    },
    _getMastAddress() { //默认收货地址
      getMastAddress().then((res) => {
        if (res.success) {
          this.isdefAddress = true;
          this.addressId = res.result.id;
          console.log(res);
          this.$store.commit({
            type: "setDefAddress",
            defAddress: res.result.area_str_ids,
          });
          this.defAddress = res.result;
        }
      });
    },
    _getOrderFreight() {  //订单运费
      let queryModel = new Object();
      queryModel.defAddress = this.$store.getters.getDefAddress;
      queryModel.skuUums = this.getSku();

      getOrderFreight(queryModel).then((res) => {
        if (res.success) {
          this.isFreight = true;
          this.freight = res.result.freight;
        }
      });
    },
    confirmOrder() {  //提交订单
      let queryModel=new Object();
      queryModel.addressId=this.addressId;
      queryModel.skus=this.getSku();
      queryModel.payMoney=this.orderPrice+this.freight;
      submitOrder(queryModel).then(res=>{
        if(res.success){
          console.log(res);
          console.log('提交订单成功');
          //携带订单id 跳转 支付页面

        }else{
          console.log(res.resultMessage);
        }
      })
    },
    getSku() {
      let listSkuModel = [];
      this.orderInfo.forEach((element) => {
        let skuModel = {};
        skuModel.skuId = element.skuid;
        skuModel.num = element.product_num;
        listSkuModel.push(skuModel);
      });
      return listSkuModel;
    },
  },
  watch: {
    orderInfo() {
      if (Object.keys(this.orderInfo).length !== 0) {
        this.orderPrice = this.orderInfo
          .reduce((preValue, item) => {
            return preValue + item.product_num * item.product_ptprice;
          }, 0)
          .toFixed(2);
      }
    },
  },
};
</script>

<style scoped>
</style>
