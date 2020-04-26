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
      let bool = Object.keys(state.looking)
      if(bool.length > 0){
        state.shopcart.push(state.looking)
        alert("已加入购物车")
      }
    },
    handleChecked(state,checked) {
      state.looking.checked = checked
    },
    //从购物车中删除商品
    handleDeleteProduct(state) {

    },
    //保存正在查看的商品
    handleLooking(state, item) {
      state.looking = item
    }
  }
})