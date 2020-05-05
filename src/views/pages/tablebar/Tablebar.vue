<template>
  <div class="tablebar border-top"> 
    <ul v-show="showTableBar" class="item-wrap">
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
      <li class="item" @click="handleRoute('/shopcart')">
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
    <div v-show="pageRoute==='/detail'" class="cart">
      <div class="addto" @click="handleAdd">加入购物车</div>
    </div>
    <computed v-show="pageRoute==='/shopcart'"></computed>
  </div>
</template>

<script>
import Computed from "../shopCart/components/Computed"
export default {
  name: 'Tablebar',
  components: {
    Computed
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleRoute(path) {
      //重复点击啥也不做
      if(path === this.pageRoute){
        return
      }
      this.$router.push(path)
    },
    //将当前正在查看的商品加入购物车
    handleAdd() {
      this.$store.commit("handleAddProdct")
      console.log("添加成功")
    }
  },
  computed: {
    //存储当前路由
    pageRoute() {
      return this.$route.path
    },
    //判断显示tablebar的情况
    showTableBar() {
      let path = this.pageRoute
      if(path === '/' || path === '/personal'){
        return true
      }else{
        return false
      }
    }
  },
  watch: {
    //监听是否在商品详情页改变tablebar内容
    pageRoute(newRoute) {
  
    }
  },
  mounted() {
    if(this.$route.path == '/detail') {
      this.detailBar = true
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
  .cart 
    height: .7rem;
    padding: .1rem 0;
    text-align: center;
    .addto
      display: inline-block;
      width: 90%;
      height: .7rem;
      line-height: .7rem;
      background: #ff3c3c;
      border-radius: .16rem;
      font-size: .34rem;
      color: #fff;
</style>