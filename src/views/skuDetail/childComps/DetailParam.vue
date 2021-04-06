<template>
  <div v-if="goods.paramInfo!==''">
    <div v-html="goods.param" class="info-param">
    </div>
    <div>
      <span>重量：{{goods.weight}} kg</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "DetailParam",
  props: {
    goods: {
		    type: Object
      },
  },
};
</script>

<style scoped>

.param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>
