<template>
  <div class="header border-bottom">
    <span class="back" @click="handleBack"><i class="iconfont iconfanhui"></i></span>
    <span class="title">商品详情</span>
    <span class="more"><i class="iconfont icongengduo"></i></span>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    background:#fff;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height: 1rem;
    .title 
      font-size: .4rem;
    .back .iconfont
      font-size: .4rem;
      font-weight: bold;
    .more .iconfont
      padding-right: .2rem;
      font-size: .4rem;
      font-weight: bold;
</style>