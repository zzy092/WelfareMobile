<template>
  <div id="home-page">
    <home-page-nav-bar :userModel="userinfo" />
    <home-page-user :userinfo="userinfo" />
    <home-page-notice />
    <welfare-list :welfares="welfares" />

    <home-page-foot />
    <!-- <foot-nav-bar /> -->
  </div>
</template>

<script>
import FootNavBar from "./childComps/FootNavBar.vue";
import HomePageFoot from "./childComps/HomePageFoot.vue";
/* eslint-disable */
import HomePageNavBar from "./childComps/HomePageNavBar.vue";
import HomePageNotice from "./childComps/HomePageNotice.vue";
import HomePageUser from "./childComps/HomePageUser.vue";
import WelfareList from "./childComps/WelfareList.vue";
//request
import { getUserMsg } from "network/homePage";

export default {
  name: "HomePage",
  components: {
    HomePageNavBar,
    HomePageUser,
    HomePageNotice,
    HomePageFoot,
    WelfareList,
    FootNavBar,
  },
  data() {
    return {
      userinfo: {},
      welfares: [],
    };
  },
  created() {
    //corpid
    const corpid = this.$route.query.corpid;
    //this.$store.commit('updateCorpid',{corpid:corpid})
    this.$store.commit({
      type: "updateCorpid",
      corpid: corpid,
    });

    this.getuserinfo();
  },
  methods: {
    getuserinfo() {
      var storage = window.localStorage;
      let token = storage.token;
      if (token == undefined) {
        this.$router.replace("login");
      } else {
        getUserMsg().then((res) => {
          if (res.success) {
            console.log(res);
            this.userinfo = res.result;
            this.welfares = res.result.listWelfare;
            console.log(this.userinfo);
          } else {
            if (res.resultCode == "1006") {
              this.$router.replace("login");
            }
          }
        });
      }
    },
    JumpPage(routeParam) {
      this.$router.push({ path: routeParam });
    },
  },
};
</script>

<style scoped>
</style>
