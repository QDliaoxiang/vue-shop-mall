import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/pages/home/Home"
import PersonalCenter from "@/views/pages/personal/PersonalCenter"
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
    }
  ]
})
