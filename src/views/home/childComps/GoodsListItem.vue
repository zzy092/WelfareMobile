<template>
  <div class="goods-item" @click="goToDetail">
    <img :src="goodsItem.product_imagePath" alt="" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.product_name }}</p>
      <span class="price">{{ goodsItem.product_price }}</span>
      <span class="collect">京东价 {{ goodsItem.product_jdPrice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImageload");
    },
    goToDetail: function () {
      // 1.获取sku
      let sku = this.goodsItem.sku;

      // 2.跳转到详情页面
      this.$router.push({ path: "/skudetail", query: { sku } });
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
  text-decoration: line-through;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;

  /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
}
</style>
