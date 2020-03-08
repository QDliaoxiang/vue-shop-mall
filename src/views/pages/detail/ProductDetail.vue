<template>
  <div>
    <detail-header></detail-header>
    <detail-swiper></detail-swiper>
    <detail-content></detail-content>
  </div>
</template>

<script>
import DetailHeader from "./components/DetailHeader";
import DetailSwiper from "./components/DetailSwiper";
import DetailContent from "./components/DetailContent";

export default {
  name: "ProductDetail",
  components: {
    DetailHeader,
    DetailSwiper,
    DetailContent,
  }
}
</script>

<style lang="stylus" scoped>

</style>