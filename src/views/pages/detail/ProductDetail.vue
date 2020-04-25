<template>
  <div>
    <detail-header></detail-header>
    <detail-swiper :bannerList="item.banner"></detail-swiper>
    <detail-content :item="item"></detail-content>
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
  },
  data() {
    return {
      item: {}
    }
  },
  created() {
    this.item = this.$route.params.item
    
  }
}
</script>

<style lang="stylus" scoped>

</style>