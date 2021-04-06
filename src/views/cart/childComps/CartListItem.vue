<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton
        @checkBtnClick="checkedChange"
        v-model="itemInfo.checked"
      ></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.product_img" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.product_name }}</div>
      <div class="item-desc">
        <button @click="decrement">-</button>
        <input type="text" v-model.lazy="goodsNumber" />
        <button @click="increment">+</button>
      </div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.product_ptprice }}</div>
        <div class="right"><button @click="deleteCart">删除</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "ShopCartItem",
  props: {
    itemInfo: Object,
  },
  data() {
    return {
      goodsNumber: this.itemInfo.product_num,
      ditemInfo: this.itemInfo,
    };
  },
  components: {
    CheckButton,
  },
  methods: {
    checkedChange: function () {
      this.itemInfo.checked = !this.itemInfo.checked;
      this.$store.commit({
        type:'updateCart',
        getmodel:this.itemInfo
      })
    },
    increment() {
      this.goodsNumber++;
    },
    decrement() {
      this.goodsNumber--;
    },
    deleteCart() {
      //通过store的actions异步处理 vuex对象
      this.$store
        .dispatch("deleteCart", {
          skuModel: this._getCartModel(this.ditemInfo),
        })
        .then((res) => {
          console.log(res);
        });
    },
    _updateCartNumber() {
      this.ditemInfo.product_num = this.goodsNumber; //是这里把 这边了之后
      //通过store的actions异步处理 vuex对象
      this.$store
        .dispatch("addCart", { skuModel: this._getCartModel(this.ditemInfo) })
        .then((res) => {
          console.log(res);
        });
    },
    _getCartModel(element) {
      let obj = {};
      obj.skuid = element.skuid;
      obj.product_num = element.product_num;
      obj.product_name = element.product_name;
      obj.product_img = element.product_img;
      obj.product_jdprice = element.product_jdprice;
      obj.product_ptprice = element.product_ptprice;
      obj.product_price = element.product_price;
      obj.sale_value = element.sale_value;
      obj.stockMsg = element.stockMsg;
      obj.checked = element.checked;
      return obj;
    },
  },
  watch: {
    goodsNumber: function () {
      // console.log("由 ", oldValue, "变为 ", newValue);
      this._updateCartNumber();
    },
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
