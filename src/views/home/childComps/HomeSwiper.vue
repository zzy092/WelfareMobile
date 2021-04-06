<template>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <a href="#">
        <img :src='item.carouse_img' alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style scoped>
</style>
