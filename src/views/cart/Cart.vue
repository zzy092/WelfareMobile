<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ getSumNumber }})</div>
    </nav-bar>
    <cart-list class="cart-list" :cart-list="cartList" />
    <bottom-bar></bottom-bar>
    <main-tab-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
    MainTabBar,
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    getSumNumber() {
      return this.$store.getters.cartCount;
    },
  },
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>
