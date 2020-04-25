<template>
  <div class="item border-bottom">
    <div class="check">
      <input type="checkbox" />
    </div>
    <div class="img">
      <img :src="item.imgUrl" alt="">
    </div>
    <div class="text">
      <span>{{item.title}}</span>
      <p class="type">{{item.checked}}</p>
      <p class="price">￥{{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    item: {
      required: true,
      type: Object,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.item{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2.3rem;

  .check{
    height: .6rem;
    input{
      zoom:150%
    }
  }
  .img{
    width: 28%;
    img{
      width: 100%;
    }
  }
  .text{
    width: 60%;
    height: 80%;
    span{
      font-size: .3rem;
      line-height: .36rem;
    }
    p.type{
      padding-top: .2rem;
    }
    p.price{
      padding-top: .3rem;
      font-size: .4rem;
      color: #f60;
    }
  }
}
</style>