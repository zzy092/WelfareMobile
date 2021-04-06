<template>
  <nav-bar>
    <img
      slot="left"
      class="back"
      @click="backClick"
      src="~assets/img/common/back.svg"
    />
    <div class="title" slot="center">
      <span>确认订单</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "OrderNavBar",
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style sc
NavBaroped>
</style>
