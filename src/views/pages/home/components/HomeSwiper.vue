<template>
  <swiper class="swiper-wrap" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-item" v-for="item of list" :key="item.id">
      <img class="img-item" :src="item.imgSrc"/>
    </swiper-slide>
   
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
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
          imgSrc: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/103806/19/14030/153344/5e6074acEd00048e1/555b1b4a66630f65.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        },
        {
          id: '002',
          imgSrc: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/96432/15/13379/71246/5e5a3d5aE458e70ab/5f07c5c4e51c1289.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        },
        {
          id: '003',
          imgSrc: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/91801/27/13766/143477/5e5dafaaEf2dcc2a8/6017e30b9257ba79.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        },
        {
          id: '004',
          imgSrc: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/95842/38/12546/80187/5e4ba3e7E09e0da3b/92aac67aefdf6b6f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        }
      ]
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped>
.swiper-wrap {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 38%;

  .swiper-item {
    height: 2.5rem;

    .img-item {
      width: 100%;
      height: 100%;
    }
  }
}
</style>