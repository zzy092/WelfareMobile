<template>
  <nav-bar class="detail-nav">
    <div class="nav-image" slot="left">
      <img src="~assets/img/common/question.png" />
    </div>

    <div class="title" slot="center">
      <span>常见问题</span>
    </div>
    <div class="nav-image" slot="right">
      <img src="~assets/img/common/jiantou-right-hui.png" alt="">
    </div>

  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
/* eslint-disable */

export default {
  name: "HomePageNavBar",
  components: {
    NavBar,
  },
  props: {
    logoImage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.detail-nav{
  display: grid;
  grid-template-columns: 1fr 8fr 1fr ;
  width: 100%;
  height: 30px;
}

.nav-image {
  overflow: hidden;
}

.nav-image img {
  width: 100%;
  height: 30px;
  object-fit: cover;
  object-position:  center;
}

 .title /deep/ #nav-bar {
  line-height: 30px;
  height:30px;
  text-align: left;
}

</style>
