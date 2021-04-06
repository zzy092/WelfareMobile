<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/myDownloadIcon/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/myDownloadIcon/home_red.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/myDownloadIcon/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/myDownloadIcon/category_red.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/myDownloadIcon/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/myDownloadIcon/cart_red.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/JdOrders">
      <img slot="item-icon" src="~assets/img/myDownloadIcon/order.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/myDownloadIcon/order_red.svg" alt="">
      <div slot="item-text">订单</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
