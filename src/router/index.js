import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("../views/login/Login");
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const ShowOrdersJd = () => import("../views/orderJD/showOrders/ShowOrdersJd");
const SkuDetail = () => import("../views/skuDetail/SkuDetail");
const HomePage = () => import("../views/homePage/HomePage");
const ConfirmOrderJd = () => import("../views/orderJD/confirmOrder/ConfirmOrderJd");
const PayOrderJd = () => import("../views/orderJD/payOrder/PayOrderJd");

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
    path: "/ShowOrdersJD",
    component: ShowOrdersJd
  },
  {
    path: "/skudetail",
    component: SkuDetail
  },
  {
    path: "/confirmOrderJD",
    component: ConfirmOrderJd
  },
  {
    path:"/PayOrderJd",
    component:PayOrderJd
  }
];

//2.创建router
const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  if(to.path==='/homepage') return next()
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router;
