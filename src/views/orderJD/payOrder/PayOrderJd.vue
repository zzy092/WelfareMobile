<template>
  <div id="payOrder" v-if="orderSn">
    <pay-order-bar />
    <h1>{{orderSn}}</h1>
  </div>
  <div v-else>
    <h1>非法请求</h1>
  </div>
</template>

<script>
import PayOrderBar from "./childComps/PayOrderBar.vue";
export default {
  components: { PayOrderBar },
  data() {
    return {
      orderSn: 0,
    };
  },
  created() {
    sessionStorage.removeItem("confirmItems");
    this._setOrderSn()
  },
  methods: {
    _setOrderSn() {
      console.log(this.$route.query.order_sn);
      this.orderSn = Number(this.$route.query.order_sn);
    },
  },
};
</script>

<style scoped>
</style>
