<template>
  <div class="item">
    <span class="lef">
      <i class="iconfont" :class="info.icon" :style="'color:'+info.color"></i>
    </span>
    <span class="title">{{info.text}}</span>
    <i class="iconfont iconiconfontyoujiantou-copy-copy-copy-copy"></i>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ["info"]
}
</script>

<style lang="stylus" scoped>
 .item 
   width: 100%;
   line-height: .85rem;
   .lef
     display: inline-block;
     padding-left: .5rem;
     .iconfont 
      font-size: .38rem;
   .title 
     padding-left: .5rem;
     font-size: .34rem;
   .iconiconfontyoujiantou-copy-copy-copy-copy
     float: right;
     padding-right: .5rem;
</style>