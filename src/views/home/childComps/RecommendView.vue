<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a href="#">
        <img :src="item.cat_img" />
        <div>{{ item.cat_name }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  width: 100vw;
  height: 24vh;
  display: grid;
  margin-top: 5px;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1vw;
  font-size: 13px;

  /* padding: 0px 5px; */
  border-bottom: 10px solid #eee;
}
.recommend-item {
  display: grid;
  text-align: center;
  overflow: hidden;

  margin-bottom: 10px;
}

.recommend-item img {
  width: 60%;
  height: 60%;
  object-fit: cover;
  object-position: top center;
  /* margin: 4px 0px; */
  margin-bottom: 8px;
}
</style>
