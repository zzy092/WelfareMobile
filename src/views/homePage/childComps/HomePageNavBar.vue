<template>
  <nav-bar class="detail-nav">
    <img slot="left" class="logo" :src="imgHandle(userModel.corpLogo)" />
    <div class="title" slot="center">
      <span></span>
    </div>
    <img slot="right" class="menu" src="~assets/img/common/menu.png">
  </nav-bar>
</template>

<script>
/* eslint-disable */
import NavBar from "components/common/navbar/NavBar.vue";
//js
import{getImgCompletePath} from 'common/imgHelper'

export default {
  name: "HomePageNavBar",
  props:{
    userModel: {
		    type: Object
      },
  },
  components: {
    NavBar,
  },
  computed:{

  },
  methods:{
     imgHandle(imagePath){
      return getImgCompletePath(imagePath);
    }
  }
};
</script>

<style scoped>
.title{
   font-size: 21px;
  font-weight: 600;
  color: black;
}
.logo {
  width: 90%;
  height: 90%;
  object-fit: cover;
  object-position: top center;
}

.menu{
  float: right;
  height: 99%;
   object-fit: cover;
  object-position: top center;
}

.detail-nav /deep/ .nav-left {
  width: 25vw;
  height: 100%;
}
.detail-nav /deep/ .nav-center {
  width: 50vw;
  height: 100%;
}
.detail-nav /deep/ .nav-right {
  width: 25vw;
  height: 100%;
}

</style>
