<template>
  <div class="icons">
    <div class="icon-item" v-for="(item) in iconList" :key="item.id" >
      <img :src="item.imgSrc" alt="icon">
      <p class="icon-text">{{item.text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: Math.random() - 0.5,
          text: '超市',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
        },
         {
          id: Math.random() - 0.5,
          text: '数码',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
        },
         {
          id: Math.random() - 0.5,
          text: '服饰',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png'
        },
         {
          id: Math.random() - 0.5,
          text: '生鲜',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png'
        },
         {
          id: Math.random() - 0.5,
          text: '配送',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png'
        },
         {
          id: Math.random() - 0.5,
          text: '充值',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png'
        },
         {
          id: Math.random() - 0.5,
          text: '9.9拼购',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png'
        },
         {
          id: Math.random() - 0.5,
          text: '领券',
          imgSrc: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .1rem;
    flex-wrap: wrap;
    .icon-item
      overflow: hidden
      width: 21%;
      height: 0;
      padding-bottom: 21%;
      text-align: center;
      color: #666;
      img 
        width: 60%;
      .icon-text
        margin-top: .15rem;
</style>