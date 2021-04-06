<template>
  <scroll>
    <div>
      <cart-list-item
        v-for="(item,index) in cartList"
        :key="index"
        :item-info="item"
      ></cart-list-item>
    </div>

  </scroll>
</template>

<script>
/* eslint-disable */
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  }
};
</script>

<style scoped>
</style>
