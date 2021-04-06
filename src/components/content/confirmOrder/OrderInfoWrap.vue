<template>
  <div>
    <div id="shop-item" v-for="(item,index) in orderInfo " :key="index">
      <div class="item-img">
        <img :src="item.product_img" alt="" />
      </div>
      <div class="item-info">
        <div class="item-title">{{ item.product_name }}</div>

        <div class="info-bottom">
          <div class="item-price left">￥{{ item.product_ptprice }}</div>
          <div class="right">×{{ item.product_num }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderInfoWrap",
  props: {
    orderInfo: {
      typeof: Object,
    }
  },
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-desc button {
  width: 30px;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  font-size: 0.9rem;
  color: orangered;
}
</style>
