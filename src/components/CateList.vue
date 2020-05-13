<template>
  <div class="wrap">
    <h2 class="title">{{header}}</h2>
    <ul class="item-wrap">
      <li v-for="item in list" :key="item.id">
        <img :src="item.imgSrc" alt="">
        <span>{{item.brand}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CateList",
  props: ["list","header"],
  mounted() {
    console.log(this.list)
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  position: absolute;
  top: 0;
  left: 1.64rem;
  width: 74%;
  height: 10rem;
  background-color: #fff
  .title
    font-size: .32rem;
    font-weight: bold;
    margin-top: .3rem;
    margin-left: .1rem;
  .item-wrap
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: .1rem;
    li 
      width: 25%;
      height: 1.5rem;
      margin: .1rem 0;
      text-align: center;
      img 
       width: 80%

</style>