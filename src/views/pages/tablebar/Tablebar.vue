<template>
  <div class="tablebar border-top"> 
    <ul v-show="!detailBar" class="item-wrap">
      <li class="item" @click="handleRoute('/')">
        <div>
          <i class="iconfont icondianpu"></i>
        </div>
        <span>首页</span>
      </li>
      <li class="item">
        <div>
          <i class="iconfont iconimage"></i>
        </div>
        <span>分类</span>
      </li>
      <li class="item">
        <div>
          <i class="iconfont icongouwuchekong"></i>
        </div>
        <span>购物车</span>
      </li>
      <li class="item" @click="handleRoute('/personal')">
        <div>
          <i class="iconfont icongerenzhongxin"></i>
        </div>
        <span>我的</span>
      </li>
    </ul>
    <div v-show="detailBar">
      <h2>加入购物车</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tablebar',
  data() {
    return {
      detailBar: false
    }
  },
  methods: {
    handleRoute(path) {
      this.$router.push(path)
    }
  },
  computed: {
    pageRoute() {
      return this.$route.path
    }
  },
  watch: {
    //监听是否在商品详情页改变tablebar内容
    pageRoute(newRoute) {
      if(newRoute == '/detail') {
        this.detailBar = true
      }else{
        this.detailBar = false;
      }
      console.log(this.detailBar)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tablebar
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: .9rem;
  background: #fff;

  .item-wrap
    display: flex;
    justify-content: space-around;
    .item
      width: 15%;
      height: .9rem;
      text-align: center;
      color: #666;
      .iconfont
        font-size: .5rem;
      span 
        display: inline-block;
        padding-top: .1rem;
</style>