<template>
  <div class="wrap">
    <cart-header></cart-header>
    <product-item v-for="item in cartList" :item="item" :key="item.id"></product-item>
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
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  padding-top: 1rem;
</style>