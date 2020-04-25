<template>
   <swiper class="swiper-wrap border-bottom" style="margin-top:1rem;" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-item" v-for="item of bannerList" :key="item.id">
      <img class="img-item" :src="item.bannerUrl"/>
    </swiper-slide>
   
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'DetailSwiper',
  props: ["bannerList"],
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }, //这样写小圆点就有了
        autoplay: true
      },
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper-wrap >>> .swiper-pagination-bullet-active 
  background: orange;
  .swiper-wrap
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 100%;
    .swiper-item img 
      width: 100%;
      height: 100%;
</style>