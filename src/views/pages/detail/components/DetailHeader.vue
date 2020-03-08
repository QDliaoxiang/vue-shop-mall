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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    height: 1rem;
    .title 
      font-size: .4rem;
    .back .iconfont
      font-size: .4rem;
      font-weight: bold;
    .more .iconfont
      font-size: .4rem;
      font-weight: bold;
</style>