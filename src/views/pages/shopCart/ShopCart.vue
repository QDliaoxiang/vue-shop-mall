<template>
  <div class="wrap">
    <cart-header></cart-header>
    <div v-if="ishasProduct">
      <product-item v-for="item in cartList" :item="item" :key="item.id"></product-item>
    </div>
    <div v-if="!ishasProduct" class="empty">购物车空空如也，去加点商品再来吧！</div>
  </div>
</template>
<script>
import CartHeader from "./components/CartHeader";
import ProductItem from "./components/ProductItem";
export default {
  name: 'ShopCart',
  components: {
    CartHeader,
    ProductItem,
  },
  data() {
    return {
      cartList: this.$store.state.shopcart
    }
  },
  computed: {
    ishasProduct() {
      if(this.cartList.length > 0) {
        return true
      }else{
        return false
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  padding-top: 1rem;
  .empty
    text-align: center
    margin-top: 1rem
    color: #ccc
</style>