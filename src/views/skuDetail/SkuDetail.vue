<template>
  <div id="detail">
    <detail-nav-bar
      @itemClick="titleClick"
      :current-index="currentIndex"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :data="[topImages, goods, skuSimilar]"
    >
      <detail-swiper ref="base" :images="topImages"></detail-swiper>
      <detail-info
        ref="param"
        :goods="goods"
        :services="services"
      ></detail-info>
      <detail-similar :skuSimilar="skuSimilar"></detail-similar>
      <detail-param :goods="goods"></detail-param>
      <detail-body ref="body" :goods="goods"></detail-body>
    </scroll>

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @backTop="backTop" class="back-top" v-show="showBackTop" />
  </div>
</template>

<script>
/* eslint-disable */
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfo from "./childComps/DetailInfo";
import DetailSimilar from "./childComps/DetailSimilar";
import DetailParam from "./childComps/DetailParam";
import DetailBody from "./childComps/DetailBody.vue";

import DetailBottomBar from "./childComps/DetailBottomBar";

import BackTop from "components/content/backTop/BackTop";
import { getSkuDetail } from "network/skuDetail";
import { backTopMixin } from "@/common/mixin";
import { BACKTOP_DISTANCE } from "@/common/const";

export default {
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailInfo,
    DetailParam,
    DetailBody,
    DetailSimilar,
    DetailBottomBar,
    BackTop,
  },
  name: "SkuDetail",
  mixins: [backTopMixin],
  data() {
    return {
      sku: "",
      currentIndex: 0,
      topImages: [],
      goods: {},
      services: [],
      skuSimilar: [],
      themeTops: [],
      stockMsg: "",
      goodsNumber: 0,
    };
  },
  created() {
    this.getDetailData();
  },
  updated() {
    // 获取需要的四个offsetTop
    this._getOffsetTops();
  },
  methods: {
    _getOffsetTops() {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.body.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
    },

    //获取商品信息
    getDetailData() {
      //获取商品sku
      const sku = this.$route.query.sku;
      this.sku = sku;

      //获取详情
      getSkuDetail(sku).then((res) => {
        if (res.success) {
          console.log(res);
          //商品轮播图
          this.topImages = res.result.skuImags;
          //名称与价格
          this.goods = res.result.goods;
          //7天无理由、自营
          this.services = res.result.goodsService;
          //规格
          this.skuSimilar = res.result.skuSimilar;
          //param
          this.paramInfo = res.result.goods.param;
          //库存
          this.stockMsg = res.result.stockMsg;
        } else {
          console.log(res);
        }
      });
    },
    _listenScrollTheme(position) {
      if (Object.keys(themeTops).length !== 0) {
        let length = this.themeTops.length;
        for (let i = 0; i < length; i++) {
          let iPos = this.themeTops[i];
          /**
           * 判断的方案:
           *  方案一:
           *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
           *    优点: 不需要引入其他的内容, 通过逻辑解决
           *    缺点: 判断条件过长, 并且不容易理解
           *  方案二:
           *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
           *    优点: 简洁明了, 便于理解
           *    缺点: 需要引入一个较大的int数字
           * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
           * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
           */
          if (position >= iPos && position < this.themeTops[i + 1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
            }
            break;
          }
        }
      }
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100);
    },
    contentScroll(position) {
      // 1.监听backTop的显示
      this.showBackTop = position.y < -BACKTOP_DISTANCE;

      //监听滚动到哪一个主题
      this._listenScrollTheme(-position.y);
    },
    addToCart() {
      this.goodsNumber++;
      const obj = {};
      obj.skuid = this.sku;
      obj.product_num = this.goodsNumber;
      obj.product_name = this.goods.name;
      obj.product_img = this.goods.masterImage;
      obj.product_jdprice = this.goods.jdPrice;
      obj.product_ptprice = this.goods.ptPrice;
      obj.product_price = this.goods.price;
      obj.sale_value = this.goods.pttax;
      obj.stockMsg = this.stockMsg;
      obj.checked = true;

      //通过store的actions异步处理 vuex对象
      this.$store.dispatch("addCart", { skuModel: obj }).then((res) => {
        console.log(res);
      });
      //updateCartNumber(obj.skuid,obj.product_num);
    },
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
</style>
