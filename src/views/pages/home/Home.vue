<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <public-banner :bannerSrc="bans[0]"></public-banner>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/HomeIcons"
import PublicBanner from "../../../components/PublicBanner"
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    PublicBanner,
  },
  data () {
    return {
      bans:[
        {
          title: '每日特价',
          img: '//gw.alicdn.com/imgextra/i4/1444798/O1CN01geJ5JY1lJWuaG6X4e_!!1444798-0-lubanu.jpg'
        },
        {
          img: '//gw.alicdn.com/imgextra/i2/99/O1CN01rM3hU51CbNnUE5rLP_!!99-0-lubanu.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>