<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">商场首页</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <good-list :goods="showGoods" />
    </scroll>
    <!--返回顶部-->
    <back-top @click.native="backClick" v-show="isshowBackTop" />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import GoodList from "./childComps/GoodsList";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

//js
import { getHomeMultidata, getHomeProducts } from "network/home";
import { debunce } from "common/utils";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    GoodList,
    Scroll,
    BackTop,
    MainTabBar,
  },
  data() {
    return {
      isshowBackTop: false,
      pageIndex: 0,
      pageSize: 50,
      pageCount: 0,
      banners: [],
      recommends: [],
      showGoods: [],
      saveY: 0,
    };
  },
  created() {
    //1、首页数据
    this.getSwiperAndRecommend();
    this.getProducts(this.pageIndex, this.pageSize);
    //获取购物车
    this.getcart();
  },
  methods: {
    //轮播与分类信息
    getSwiperAndRecommend() {
      getHomeMultidata().then((res) => {
        //console.log(res);
        this.banners = res.result.homeCarouselImg;
        this.recommends = res.result.homeCategory;
      });
    },
    //首页商品
    getProducts() {
      this.pageIndex += 1;
      getHomeProducts(this.pageIndex, this.pageSize).then((res) => {
        if (res.resultCode == "0000" && res.result != null) {
          //console.log(res.result.listSkus);
          this.showGoods.push(...res.result.listSkus);
          //console.log(this.showGoods);
        } else {
          this.pageIndex -= 1;
        }

        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //  console.log('滚动事件被监听')
      // console.log(position)
      this.isshowBackTop = -position.y > 30;
    },
    loadMore() {
      //下拉加载更多
      this.getProducts();
    },
    getcart() {
      this.$store.dispatch("syscCart").then(res=>{
        console.log(res);
      })
    },
    _addCart(element) {
      let obj = this._getCartModel(element);
      this.$store.commit({
        type: "addCart",
        info: obj,
      });
    },
    _getCartModel(element) {
      let obj = {};
      obj.skuid = element.skuid;
      obj.product_num = element.number;
      obj.product_name = element.productName;
      obj.product_img = element.img;
      obj.product_jdprice = element.productJdPrice;
      obj.product_ptprice = element.productPtPrice;
      obj.product_price = element.productPrice;
      obj.sale_value = element.sale;
      obj.stockMsg = element.stockStateDesc;
      obj.checked = true;
      return obj;
    },
  },
  mounted() {
    // 3.监听item 中图片 加载完成 调防抖函数,优化性能
    const refresh = debunce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("itemImageload", () => {
      refresh();
    });
  },
  //监控组件销毁
  destroyed() {
    console.log("销毁");
  },
  // 活跃（需要在router-view 外包装一层 keep-alive）
  activated() {
    this.$refs.scroll.getScrollY(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  // 不活跃状态
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
