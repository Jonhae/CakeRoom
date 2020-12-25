import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Login = () => import('../views/login/Login.vue')
const LoginPassword = () => import('../views/login/loginPassword.vue')

// profile编辑
const Compile = () => import('../views/profile/childComps/ProfileCompile.vue')
const UserName = () => import('../views/profile/childComps/UserName.vue')
const AddressList = ()=> import('../views/profile/childComps/AddressList.vue')

// link
const FruitTart = () => import('../link/FuritTart.vue')
const Cookies = () => import('../link/Cookies.vue')
const Lemon = () => import('../link/Lemon.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',

  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/compile',
    component: Compile
  },
  {
    path:'/compile/:username',
    component: UserName,
  },
  {
    path:'/addresslist',
    component: AddressList,

  },
  {
    //params动态路由传参，:后面的id要与push传的一致
    path: '/detail/:iid',
    component: Detail
  },
  {
    //登录页面
    path: '/login',
    component: Login
  },
  {
    path: '/loginpassword',
    component: LoginPassword
  },
  // link
  {
    path:'/fruittart',
    component: FruitTart
  },
  {
    path:'/cookies',
    component: Cookies,
  },
  {
    path:'/lemon',
    component: Lemon
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
