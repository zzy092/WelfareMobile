import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("../views/login/Login");
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const JdOrders = () => import("../views/jdOrders/JdOrders");
const SkuDetail = () => import("../views/skuDetail/SkuDetail");
const HomePage = () => import("../views/homePage/HomePage");
const JdConfirmOrder = () => import("../views/jdConfirmOrder/JdConfirmOrder");

//1、安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/homepage"
  },
  {
    path: "/homepage",
    component: HomePage
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/jdOrders",
    component: JdOrders
  },
  {
    path: "/skudetail",
    component: SkuDetail
  },
  {
    path: "/jdconfirmorder",
    component: JdConfirmOrder
  }
];

//2.创建router
const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
