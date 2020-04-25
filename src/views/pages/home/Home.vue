<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <public-banner :bannerSrc="bans[0]"></public-banner>
    <home-hot></home-hot>
    <div class="list-wrap">
      <home-product v-for="item in homeList" :key="item.id" :product="item" @click.native="handleShowDetail(item)"></home-product>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/HomeIcons";
import PublicBanner from "../../../components/PublicBanner";
import HomeHot from "../../../components/HomeHot";
import HomeProduct from "../../../components/HomeProduct";
import HomeFooter from "./components/HomeFooter";

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    PublicBanner,
    HomeHot,
    HomeProduct,
    HomeFooter,
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
      ],
      homeList: []
    }
  },
  methods: {
    handleShowDetail (item) {
      this.$router.push({name:'ProductDetail',params:{item}})
    
    },
    //获取商品
    handleGetList() {
      this.$axios.get('http://47.102.223.148:3001/home/list').then(res => {
        this.homeList = res.data.data.list
        
      })
    }
  },
  created() {
    this.handleGetList()
  }
}
</script>

<style lang="stylus" scoped>
  .list-wrap
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: .1rem;
    background: #f0f2f5;
</style>