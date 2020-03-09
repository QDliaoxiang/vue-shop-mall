<template>
  <div>
    <detail-header></detail-header>
    <detail-swiper></detail-swiper>
    <detail-content></detail-content>
    <detail-img></detail-img>
  </div>
</template>

<script>
import DetailHeader from "./components/DetailHeader";
import DetailSwiper from "./components/DetailSwiper";
import DetailContent from "./components/DetailContent";
import DetailImg from "./components/DetailImg"

export default {
  name: "ProductDetail",
  components: {
    DetailHeader,
    DetailSwiper,
    DetailContent,
    DetailImg,
  }
}
</script>

<style lang="stylus" scoped>

</style>