import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    shopcart: [], //购物车的商品
    looking: {} //正在查看的商品
  },
  mutations: {
    //向购物车中添加商品
    handleAddProdct(state) {
      console.log(state)
    },
    //从购物车中删除商品
    handleDeleteProduct(state) {

    }
  }
})