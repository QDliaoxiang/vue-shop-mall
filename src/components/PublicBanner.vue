<template>
  <div>
    <h3 class="title">{{bannerSrc.title}}</h3>
    <div class="show">
      <img class="ban-img" :src="bannerSrc.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicBanner',
  props: ['bannerSrc'],
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    padding: .1rem;
    color: #666;
  .show
    width: 100%;
    .ban-img
      width: 100%;
      
</style>