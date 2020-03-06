<template>
  <div class="header">
    <div class="search">
      <i class="iconfont iconsousuo"></i>
      <input class="wrap" type="text" placeholder="搜索你想要的商品">
      <i class="iconfont iconweizhi-copy"></i>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
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
    .iconweizhi-copy
      padding-left: .1rem;
      color: #fff;
</style>