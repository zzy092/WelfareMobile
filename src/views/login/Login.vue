<template>
  <div id="login">
    <!-- <login-nav-bar class="navbar" /> -->
    <section class="aui-flexView">
      <section class="aui-scrollView">
        <!--标题-->
        <div class="aui-account-title">
          <h1>账号登陆</h1>
        </div>
        <!--账号密码-->
        <div class="aui-account-tile">
          <div class="b-line">
            <input
              type="text"
              v-model="loginName"
              placeholder="请输入登录账号"
              id="login_name"
            />
            <label id="login_name_text" class="err">手机号不可为空</label>
          </div>
          <div>
            <input
              type="password"
              v-model="loginPassword"
              placeholder="请输入密码"
              id="login_password"
            />
            <label class="err">密码不可为空</label>
          </div>
        </div>
        <!--登录按钮-->
        <div class="aui-account-button">
          <button id="login_submit" @click="login">登录</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import md5 from "js-md5";

import { accountLogin} from "network/login";

export default {
  components: {},
  data() {
    return {
      loginName: "lisa",
      loginPassword: "nawxs2..2",
    };
  },
  methods: {
    login() {
      let md5Pwd = md5(this.loginPassword);
      let corpid = localStorage.getItem("corpid"); //this.$store.corpid;
      const obj = {};
      obj.loginName = this.loginName;
      obj.password = md5Pwd;
      obj.corpid = corpid;
      obj.deviceType = 1;
      let t = new Date(); //你已知的时间
      let t_s = t.getTime(); //转化为时间戳毫秒数
      let nt = new Date(); //定义一个新时间
      nt.setTime(t_s + 5000 * 60); //设置新时间比旧时间多5分钟
      let refresh_expires=nt.getTime();
      obj.refresh_expires = refresh_expires;
      accountLogin(obj).then((res) => {
        if (res.success) {
          var storage = window.localStorage;
          storage.clear();
          storage.setItem("token", res.result.access_token);

          this.$store.commit({
            type: "updateToken",
            token: storage.token,
            corpid: res.result.corpid,
          });
          //跳转到用户福利首页
          console.log("跳转到用户首页");
          var corpid=this.$store.getters.corpidValue
          console.log(corpid);
           this.$router.push({ path: "/homepage", query: { corpid } });
        } else {
          console.log(res.resultMessage);
        }
      });
    }
  },
};
</script>

<style scoped>
#login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(../../assets/img/login/bg.png);
  background-size: cover;
}

.aui-flexView h1 {
  margin: 0;
}
</style>
