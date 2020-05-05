// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store/index"
import axios from "axios"

import "../src/assets/styles/reset.css"
import "../src/assets/styles/border.css"
import "./assets/iconfont/iconfont.css"
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)//解决移动端300毫秒延迟
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
