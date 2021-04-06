<template>
  <div v-if="Object.keys(skuSimilar).length !== 0">
    <div>
      {{ skuSimilar[0].saleName }}
      <div v-for="(item,index) in skuSimilar[0].saleAttrList" :key="index">
        <span>{{item.saleValue}}</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "DetailSimilar",
  props: {
    skuSimilar: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>
