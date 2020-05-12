import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/pages/home/Home"
import PersonalCenter from "@/views/pages/personal/PersonalCenter"
import ProductDetail from "@/views/pages/detail/ProductDetail"
import ShopCart from "@/views/pages/ShopCart/ShopCart"
import CateGory from "@/views/pages/category/CateGory"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/detail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/category',
      name: 'CateGory',
      component: CateGory
    }
  ]
})
