<template>
  <scroll>
    <div>
      <cart-list-item
        v-for="item in cartList"
        :key="item.skuid"
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
  },
  methods:{
    tijiao(){
      this.$router.push({path:'/jdconfirmorder',query:{}})
    }
  }
};
</script>

<style scoped>
</style>
