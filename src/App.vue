<template>
  <div id="app">
    <keep-alive exclude="SkuDetail,JdConfirmOrder">
      <router-view />
    </keep-alive>


  </div>
</template>

<script>


export default {
  name: "App",
  components: {

  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
