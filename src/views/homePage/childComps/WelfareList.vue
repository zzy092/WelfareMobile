<template>
  <div id="wlist">
    <div id="welfare-conten" v-if="welfares">
      <h2>我已拥有福利</h2>
      <div class="welfares">
        <div
          v-for="(item, index) in welfares"
          :key="index"
          class="welfare animate__animated animate__swing"
          @click="JumpPage(item.vue_route)"
        >
          <div class="welfare-img">
            <img :src="imgHandle(item.welfare_img)" alt="" />
          </div>
          <div class="welfare-title"><p>{{item.welfare_name}}</p></div>
          <!-- <h5>{{ item.welfare_name }}</h5> -->
        </div>
      </div>
    </div>
    <div v-else>
      <h2>暂无信息</h2>
    </div>
  </div>
</template>

<script>
import { getImgCompletePath } from "common/imgHelper";

export default {
  name: "WelfareList",
  props: {
    welfares: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgHandle(imagePath) {
      return getImgCompletePath(imagePath);
    },
    JumpPage(routeParam) {
      this.$router.push({ path: routeParam });
    },
  },
};
</script>

<style scoped>
#wlist h2{
  margin: 10px 5px;
  color:rgba(228, 92, 205, 0.712);
}

.welfares {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* background-color:yellow; */
  row-gap: 10px;
  column-gap: 10px;
  margin: 0px 10px;
}



.welfare {
  text-align: center;
  display: grid;
  justify-items: center;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
  border-radius: 5px;
  padding-bottom: 10px;
}
.welfare-img {
  overflow: hidden;
}
.welfare-img img {
  width: 100px;
  height: 66px;
  object-fit: cover;
  object-position: top center;
}
</style>
