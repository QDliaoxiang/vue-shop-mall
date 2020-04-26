<template>
  <div class="item border-bottom">
    <div class="check">
      <input type="checkbox" @change="handleClickChange"/>
    </div>
    <div class="img">
      <img :src="item.imgUrl" alt="">
    </div>
    <div class="text">
      <span class="title">{{item.title}}</span>
      <p class="type">{{item.checked}}</p>
      <span class="price">￥{{item.price}}</span>
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
  },
  methods: {
    //将够选中商品的价格推到store数组
    handleClickChange(e) {
      let data = this.item
      if(e.target.checked === true) {
        this.$store.commit("handleChangeTotalPrice", data)
      }else{
        this.$store.commit("handleChangeTotalPrice", data.id)
      }
    }
  },
  beforeDestroy() {
    //离开购物车取消勾选
    this.$store.commit("handleChangeTotalPrice", this.item.id)
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
    span.title{
      font-size: .3rem;
      line-height: .36rem;
      overflow: hidden;             /* 隐藏溢出部分 */
      text-overflow: ellipsis;      /* 显示省略符号来代表被隐藏的文本 */
      display: -webkit-box;         /* 将对象作为弹性伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置盒子内排列顺序为纵向 */
      -webkit-line-clamp: 2;        /* 限制块元素显示的文本的行数 */
    }
    p.type{
      padding-top: .2rem;
    }
    span.price{
      display: inline-block;
      padding-top: .1rem;
      font-size: .4rem;
      color: #f60;
    }
  }
}
</style>