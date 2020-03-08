<template>
   <swiper class="swiper-wrap border-bottom" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-item" v-for="item of list" :key="item.id">
      <img class="img-item" :src="item.imgSrc"/>
    </swiper-slide>
   
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'DetailSwiper',
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
      list: [
        {
          id: '001',
          imgSrc: '//img13.360buyimg.com/n1/jfs/t1/94956/38/10593/146376/5e1d7bc2E25e0f906/330cc4d0ec246249.jpg',
        },
        {
          id: '002',
          imgSrc: '//img13.360buyimg.com/n1/jfs/t19057/133/1066097356/318526/ea36a1ec/5ab99f40N5ed8d209.jpg',
        },
        {
          id: '003',
          imgSrc: '//img13.360buyimg.com/n1/jfs/t1/31804/25/13917/171957/5cbc1445E43361d9b/15fe4ff7508e9815.jpg',
        },
        {
          id: '004',
          imgSrc: '//img13.360buyimg.com/n1/jfs/t1/101173/4/10707/97618/5e1d7bc6E93ca3602/963df5d030d28ef2.jpg',
        }
      ]
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