<template>
  <div class="wrap">
    <div class="left-box">
      <ul>
        <li v-for="item in cateList" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateGory",
  data() {
    return {
      cateList: []
    };
  },
  methods: {
    getCategoryList(){
      this.$axios.get('http://47.102.223.148:3001/cate/list').then(res => {
        this.cateList = res.data.cate
        console.log(this.cateList)
      })
    }
  },
  created() {
    this.getCategoryList()
  },
  
}
</script>
<style lang="stylus" scoped>
.wrap
  .left-box
    position: absolute;
    left: 0;
    top: 0;
    width: 1.6rem;
    height: 100%;
    background: #c9c9c9;
    border: 1px solid #c9c9c9;
    ul li 
      width: 100%;
      height: .5rem;
      margin-bottom: .1rem;
      background: #fff;
      line-height: .5rem;
      text-align: center;
</style>