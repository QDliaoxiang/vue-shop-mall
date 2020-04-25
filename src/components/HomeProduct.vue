<template>
  <div class="product">
    <div class="img-wrap">
      <img :src="product.imgUrl" alt="图片">
    </div>
    <span class="title">{{product.title}}</span>
    <p>{{product.price}}
      <span>找相似</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeProduct',
  props: {
    product: {
      isrequire: true,
      type: Object
    }
  },
  data () {
    return {

    }
     
  },
}
</script>

<style lang="stylus" scoped>
  .product
    width: 47%;
    height: 4.1rem;
    background: #fff;
    margin-bottom: .2rem;
    .img-wrap
      overflow: hidden;
      width: 90%;
      height: 0;
      margin: auto;
      padding-bottom: 3rem;
      img 
        width: 100%;
    .title
      width: 100%;
      line-height: .3rem;
      word-wrap:break-word;         /* 内容存在英语或数字时强制换行 */
      overflow: hidden;             /* 隐藏溢出部分 */
      text-overflow: ellipsis;      /* 显示省略符号来代表被隐藏的文本 */
      display: -webkit-box;         /* 将对象作为弹性伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置盒子内排列顺序为纵向 */
      -webkit-line-clamp: 2;        /* 限制块元素显示的文本的行数 */
      color: #333;
      font-size: .28rem;
    p 
      padding-left: .1rem;
      line-height: .45rem;
      font-size: .38rem;
      color: red;
      span 
        float: right;
        margin-right: .2rem;
        color: #c9c9c9;
        font-size: .26rem;
</style>