<template>
  <div class="product">
    <div class="img-wrap">
      <img src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/90884/24/9777/120253/5e1449fcEf11bccfd/465b47f2431248d0.jpg!q70.dpg.webp" alt="">
    </div>
    <span class="title"> 手电筒可充电 强光远射超亮LED多功能家用户外学生小型便携防水COB照明工作灯 USB手机充电宝 USB直充 可供手机充电 远射强光套装                             </span>
    <p>$89.9
      <span>找相似</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeProduct',
  
  data () {
    return {

    }
     
  }
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
      width: 100%;
      height: 0;
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