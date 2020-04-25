<template>
  <div class="wrap">
    <div class="img-wrap" v-for="item in detailImg" :key="item.id">
      <img :src="item.bannerUrl" alt="图片">
    </div>
   
  </div>
</template>
<script>
export default {
  name: 'DetailImg',
  props: {
    detailImg: {
      isrequire: true,
      type: Array
    }
  },
}
</script>
<style lang="stylus" scoped>

  .img-wrap
    width: 100%;
    height: auto;
    overflow: hidden;
    img 
      width: 100%;
</style>