<template>
  <div>
    <cart-header></cart-header>
    <product-item :item="goods"></product-item>
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
      goods: {
        imgUrl: "https://img11.360buyimg.com/cms/s264x264_jfs/t1/113656/28/783/168949/5e902b83Ec1ba39a5/061c2f4515b86249.jpg",
        price: 79.9,
        desc: "   蓝月亮洗衣液12斤套装：亮白增艳薰衣草3kg瓶+1kg袋*3  ",
        type: "套装12斤"
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>