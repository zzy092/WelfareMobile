<template>
  <div class="buy_checkout">
    <div>
      <strong>商品总额</strong>
      <span>￥{{ orderPrice }}</span>
    </div>
    <div>
      <strong>运费</strong>
      <span>￥{{ freightPrice }}</span>
    </div>
    <div>
      <strong></strong>
      <span>总计：￥{{ (orderPrice + freightPrice) | numFilter }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckOut",
  props: {
    orderPrice: {
      typeof: Number,
      default: 0,
    },
    freightPrice: {
      typeof: Number,
      default: 0,
    },
  },
  methods: {
    submit() {
      console.log("123456");
    },
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后三位
      let tempVal = parseFloat(value).toFixed(3);
      let realVal = tempVal.substring(0, tempVal.length - 1);
      return realVal;
    },
  },
};
</script>


<style scoped>
.buy_checkout {
  display: grid;
  grid-template-columns: 1px;
}

.buy_checkout > div {
  width: 100vw;
  height: 36px;
}
</style>
