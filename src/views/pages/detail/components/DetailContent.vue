<template>
  <div class="content">
    <span class="mark">自营</span>
    <span class="description">戴尔DELL灵越5000 14英寸远程办公英特尔酷睿i5高性能轻薄笔记本电脑(十代i5-1035G1 8G 512G MX230 2G)银</span>
    <p>
      <span class="price">￥899</span>
      <span class="news">降价通知</span>
    </p>
    <div class="category">
      <div class="wrap">
        <h3 class="htitle">颜色分类</h3>
         <span @click="handlePick" v-for="item in list" :key="item.id" ref="cate_item">{{item.title}}</span>
      </div>
      <h3 class="htitle">已选<span class="checked">{{item}}</span></h3>
    </div>
  </div>
</template>
<script>

export default {
  name: "DetailContent",
  data () {
    return {
     item: '',
     list: [
       {
         id: '012',
         title: '香槟金'
       },
       {
         id: '052',
         title: '十代酷睿 512SSD+独显 银色'
       },
       {
         id: '072',
         title: '初音绿'
       },
       {
         id: '0128',
         title: '曜石黑'
       }
     ]
    }
  },
  methods: {
    //选择颜色分类
    handlePick ($event) {
      for(let i = 0; i < this.$refs.cate_item.length; i++) {
        if($event.target === this.$refs.cate_item[i]) {
          this.$refs.cate_item[i].classList.add('borderSty');
          this.item = this.$refs.cate_item[i].innerText;
        }else{
          this.$refs.cate_item[i].classList.remove('borderSty')
        }
      }

    }
  },
};
</script>

<style lang="stylus" scoped>

.content 
  padding: 0.2rem;
  .mark 
    background: red;
    color: #fff;

  .description 
    font-size: 0.32rem;
    line-height: 0.4rem;
  p 
    padding-top: 0.2rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #c9c9c9;
    .price 
      color: red;
      font-size: 0.5rem;
    .news 
      float: right;
      padding-rightL: 0.5rem;
      color: #999;
  .category
    padding: 0.2rem 0;
    height: 7rem;
    .wrap span 
      display: inline-block;
      padding:.15rem;
      border: 1px solid #ccc;
      margin: .1rem;
      font-size: .25rem;
    .wrap .htitle
      color: #999;
    .borderSty 
      border: 1px solid red!important;
    .htitle
      color: #999;
      font-size: .24rem;
      .checked
        padding-left: .2rem;
        font-size: .28rem;
        color:#000;
    
</style>