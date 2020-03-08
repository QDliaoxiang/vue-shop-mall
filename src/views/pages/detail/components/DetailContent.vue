<template>
  <div class="content">
    <span class="mark">自营</span>
    <span class="description">
      戴尔DELL灵越5000 14英寸远程办公英特尔酷睿i5高性能轻薄笔记本电脑(十代i5-1035G1 8G 512G MX230 2G)银
    </span>
    <p>
      <span class="price">￥899</span>
      <span class="news">降价通知</span>
    </p>
    <div class="category">
      <h3>颜色分类</h3>
      <div class="wrap">
        <span>土豪金</span>
        <span>玫瑰金</span>
        <span>初音绿</span>
        <span>银色</span>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'DetailContent',
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .content
    padding: .2rem;
    .mark
      background: red;
      color: #fff;
    .description 
      font-size: .32rem;
      line-height: .4rem;
    p 
      padding-top: .2rem;
      line-height: .5rem;
      border-bottom: 1px solid #c9c9c9;
      .price 
        color: red;
        font-size: .5rem;
      .news 
        float: right;
        padding-rightL .5rem;
        color:#999;
    .category
      padding: .2rem 0;
      .wrap span 
        display: inline-block;
        padding: .1rem;
        margin-top: .2rem;
        margin-right: .2rem;
        border: 1px solid red;
        color: #999;
        border-radius: .1rem;
</style>