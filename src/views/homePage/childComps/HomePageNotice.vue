<template>
  <div id="notice">
    <div class="laba">
      <img src="~assets/img/common/laba.png" alt="" />
    </div>
    <div class="scroll-left">
      <p>手机端系统升级2.0 啦！啦啦！！啦啦！！！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageNotice",
};
</script>

<style scoped>
#notice {
  display: grid;
  grid-template-columns: 0.12fr 0.88fr;
  background: #fdf9f9;
  height: 40px;
  width: 100%;
}
.laba.detail {
  overflow: hidden;
}
.laba {
  display: flex;
  align-items: center; /*垂直居中*/
}
.laba img {
  height: 80%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}
.scroll-left {
  display: flex;
  align-items: center; /*垂直居中*/
  /* justify-content: center; */
}
.scroll-left {
  height: 40px;
  overflow: hidden;
  position: relative;
  /* background: yellow; */
  color: orange;
  /* border: 1px solid orange; */
}
.scroll-left p {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 40px;
  text-align: center;
  /* Starting position */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  /* Apply animation to this element */
  -moz-animation: scroll-left 5s linear infinite;
  -webkit-animation: scroll-left 5s linear infinite;
  animation: scroll-left 5s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%); /* Browser bug fix */
    -webkit-transform: translateX(-100%); /* Browser bug fix */
    transform: translateX(-100%);
  }
}
</style>
