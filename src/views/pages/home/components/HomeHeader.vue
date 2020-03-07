<template>
  <div class="header">
    <div class="search">
      <i class="iconfont iconsousuo"></i>
      <input class="wrap" type="text" placeholder="搜索你想要的商品">
      <i class="iconfont icongerenzhongxin"></i>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'HomeHeader'
 }
</script>

<style lang="stylus" scoped>
.header
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  .search
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .8rem;
    padding: 0 .1rem;
    background: #f63515;
    .iconsousuo
      padding-right: .1rem;
      color: #fff;
    .wrap
      flex: 1;
      border-radius: .05rem;
      border: 1px solid #ccc;
    .icongerenzhongxin
      padding-left: .1rem;
      color: #fff;
</style>