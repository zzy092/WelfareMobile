<template>
  <section id="page">
    <header><h2>{{userinfo.name}}</h2></header>
    <nav>
      <img :src="imgHandle(userinfo.headImage)" alt="" />
    </nav>
    <main>
      <p>{{userinfo.corpName}}</p>
    </main>

    <footer>
      <div><span class="desc">我的积分</span>：<span class="num-value">{{userinfo.user_point}}</span></div>
      <div><span class="desc">我的余额</span>：<span class="num-value">{{userinfo.user_money}}</span></div>
    </footer>
  </section>
</template>

<script>
import{getImgCompletePath} from 'common/imgHelper'
export default {
  name: "HomePageUser",
  props:{
    userinfo:{
      type:Object
    }
  },
  methods:{
     imgHandle(imagePath){
      return getImgCompletePath(imagePath);
    }
  }
};
</script>

<style scoped>
#page {
  display: grid; /* 1.设置display为grid */
  width: 98vw;
  height: 20vh;
  grid-template-areas:
    "nav  head"
    "nav  main"
    "nav  foot"; /* 2.区域划分 当前为 三行 两列 */
  grid-template-rows: 1fr 0.5fr 0.5fr; /* 3.各区域 宽高设置 */
  grid-template-columns: 30vw 1fr;
  box-shadow: 0px 0px 18px rgba(182, 171, 171, 0.6);

  border-radius: 5px;
  margin: 20px auto 15px auto;
}

#page > header {
  grid-area: head; /* 4. 指定当前元素所在的区域位置, 从grid-template-areas选取值 */
  /* background-color: #8ca0ff; */
  border-radius: 5px;
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center;
}
header h2{
  font-size: 40px;
font-weight: 600;
}
#page > nav {
  grid-area: nav;
  /* background-color: #ffa08c; */
  border-radius: 5px;
}
#page > nav > img {
  /* border-radius:50%; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

#page > main {
  grid-area: main;
  /* background-color: #ffff64; */
  border-radius: 5px;
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center;
}

#page > footer {
  grid-area: foot;
  /* background-color: #8cffa0; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4vw;
  grid-template-columns: 1fr 1fr;
}

.desc{
color: #44A0FF;
}
.num-value{
color: #EE8B68;
font-weight: bold;
}
</style>
