<template>
  <div id="footmsg">
    <p>联系方式 全国统一服务热线 4000-123-300</p>
    <p>Copyright 2019-2021 YUANFU.All Rights</p>
  </div>
</template>

<script>
export default {
  name: "HomePageFoot",
};
</script>

<style scoped>
#footmsg {
  width: 100vw;
  height: 45px;
  display: grid;
  background-color: #f2f2f2;
  position: fixed;
  align-items: center; /*垂直居中*/
  justify-content: center;

  left: 0;
  right: 0;
  bottom: 0;


}
#footmsg p{
  font-size: 14px;
  color: #999999;
}
</style>
