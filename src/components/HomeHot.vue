<template>
<div>
  <h3 class="title border-bottom">现场秒杀</h3>
  <swiper class="swiper-wrap" :options="swiperOption" ref="mySwiper2">
    <swiper-slide class="swiper-item" v-for="item in hotList" :key=item.id>
      <img
        class="img-item"
        :src="item.imgSrc"
      />
      <p>￥{{item.price}}</p>
    </swiper-slide>
   
  </swiper>
</div>
</template>
<script>
export default {
  name: "HomeHot",
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        centeredSlidesBounds: true,
      },
      hotList: [
        {
          id: Math.random() - 0.5,
          imgSrc: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/98983/28/13709/158259/5e5c8151Ed5416efa/639f00685ff861ec.jpg.dpg',
          price: '2980',
        },
        {
          id: Math.random() - 0.5,
          imgSrc: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/110062/24/7729/197568/5e5f5aa1E0236b93e/9f36fe92b75b5731.jpg.dpg',
          price: '19.8',
        },
        {
          id: Math.random() - 0.5,
          imgSrc: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/95484/26/13198/159893/5e548cacEbd319640/4711f3e987f65519.jpg.dpg',
          price: '399',
        },
        {
          id: Math.random() - 0.5,
          imgSrc: '//img10.360buyimg.com/mobilecms/s220x220_jfs/t1/87714/23/13899/175822/5e5e0f36Ecd73173a/0d13d44c746ed02e.jpg!cc_220x220!q70.dpg.webp',
          price: '39.9',
        },
        {
          id: Math.random() - 0.5,
          imgSrc: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/89642/37/14024/195981/5e6213b1Ee4c6906a/7d71d779272b6b84.jpg.dpg',
          price: '1199',
        },
        {
          id: Math.random() - 0.5,
          imgSrc: 'https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t30073/218/864057261/182405/ae2b478e/5c00e1c5N7afbd318.jpg.dpg',
          price: '869',
        }
      ]
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped>
.title
  padding: .1rem;
  color: #666;
.swiper-wrap 
  height: 2rem;
  margin-top: .2rem;
  .swiper-item 
    text-align: center;
    color: red;
    .img-item 
      width: 80%;
    
  

</style>