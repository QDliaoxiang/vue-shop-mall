<template>
  <div class="content">
    <span class="mark">自营</span>
    <span class="description">{{items.title}}</span>
    <p>
      <span class="price">￥{{items.price}}</span>
      <span class="news">降价通知</span>
    </p>
    <div class="category">
      <div class="wrap">
        <h3 class="htitle">颜色分类</h3>
         <span @click="handlePick" v-for="one in items.category" :key="one.id" ref="cate_item">{{one}}</span>
      </div>
      <h3 class="htitle">已选<span class="checked">{{checked}}</span></h3>
    </div>
  </div>
</template>
<script>

export default {
  name: "DetailContent",
  props: ["item"],
  data () {
    return {
      items: this.item,
      checked: this.item.category[0],//默认选择第一款
    }
  },
  methods: {
    //选择颜色分类
    handlePick ($event) {
      for(let i = 0; i < this.$refs.cate_item.length; i++) {
        if($event.target === this.$refs.cate_item[i]) {
          this.$refs.cate_item[i].classList.add('borderSty');
          this.checked = this.$refs.cate_item[i].innerText;
        }else{
          this.$refs.cate_item[i].classList.remove('borderSty')
        }
      }
      this.$store.commit('handleChecked',this.checked)
    }
  },
  mounted() {
    this.$store.commit('handleChecked',this.checked)//不选择款式默认选择第一款
  }
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