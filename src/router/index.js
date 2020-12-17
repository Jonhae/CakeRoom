import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home.vue')
const Category = ()=> import('../views/category/Category.vue')
const Cart = ()=> import('../views/cart/Cart.vue')
const Profile = ()=> import('../views/profile/Profile.vue')
const Detail = ()=> import('../views/detail/Detail.vue')
const Login = ()=> import('../views/login/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart 
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    //params动态路由传参，:后面的id要与push传的一致
    path:'/detail/:iid',
    component:Detail
  },
  {
    //登录页面
    path:'/login',
    component:Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
