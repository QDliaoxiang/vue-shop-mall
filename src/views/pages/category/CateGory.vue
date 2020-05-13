<template>
  <div class="wrap">
    <div class="left-box">
      <ul>
        <li v-for="(item, index) in cateList" @click="handleChange(index)" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <cate-list :list="defaultItems" :header="defaulTitle"></cate-list>
  </div>
</template>

<script>
import CateList from "../../../components/CateList"
export default {
  name: "CateGory",
  components: {
    CateList,
  },
  data() {
    return {
      cateList: [],
      defaultItems: [],
      defaulTitle: "",
    };
  },
  methods: {
    getCategoryList(){
      this.$axios.get('http://47.102.223.148:3001/cate/list').then(res => {
        this.cateList = res.data.cate
        this.defaultItems = res.data.cate[0].content
        this.defaulTitle = res.data.cate[0].header
      })
    },
    handleChange(index) {
      this.defaultItems = this.cateList[index].content
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
    height: 98%;
    background: #fafafa;
    border: 1px solid #ddd;
    ul li 
      width: 100%;
      height: .5rem;
      margin-bottom: .1rem;
      background: #fff;
      line-height: .5rem;
      text-align: center;
</style>