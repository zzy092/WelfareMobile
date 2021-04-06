<template>
  <nav-bar class="detail-nav">
    <img
      slot="left"
      class="back"
      @click="backClick"
      src="~assets/img/common/whiteBack.png"
    />
  </nav-bar>
</template>

<script>
/* eslint-disable */
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "LoginNavBar",
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

<style scoped>
.detail-nav {
  background-color: #fff;
  font-weight: normal;
}
.back {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  object-fit: cover;
  object-position: top center;
}
</style>
