<template>
  <div class="container">
    <div class="header">
      <div class="pic"><i class="iconfont icongerenzhongxin"></i></div>
      <div class="log-reg">
        下完这场雨
      </div>
    </div>
    <div class="order border-bottom">
      <a class="myorder" href="#">我的订单</a>
      <span class="all">
        <a href="#">全部订单</a>
        <i class="iconfont iconiconfontyoujiantou-copy-copy-copy-copy"></i>
      </span>
    </div>
    <div class="todos">
      <ul class="wrap">
        <li v-for="item in todos" :key=item.id>
          <span><i class="iconfont" :class="item.icon"></i></span>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="contain" v-for="(item, index) in menuList" :key="index/1.3333">
      <menu-item v-for="val in item" :key="val.id" :info="val"></menu-item>
    </div>
  </div>
</template>
<script>
import MenuItem from "../../../components/MenuItem"
export default {
  name: 'PersonalCenter',
  components: {
    MenuItem,
  },
  data () {
    return {
      todos: [
        {
          id: Math.random() - 0.5,
          icon: 'icondaifukuan',
          text: '待付款'
        },
        {
          id: Math.random() - 0.5,
          icon: 'iconicon-receive',
          text: '待收货'
        },
        {
          id: Math.random() - 0.5,
          icon: 'icondaipingjia',
          text: '待评价'
        },
        {
          id: Math.random() - 0.5,
          icon: 'icontuihuanhuo',
          text: '退换货'
        }
      ],
      menuList: [
        [{
          id: Math.random() - 0.5,
          icon: 'iconhuiyuan',
          text: '会员专享',
          color: '#f60'
        },
        {
          id: Math.random() - 0.5,
          icon: 'icongermination',
          text: '智能农场',
          color: '#1afa29'
        },],
       [ {
          id: Math.random() - 0.5,
          icon: 'iconyouhuiquan',
          text: '领券优惠',
          color: '#f60'
        },
        {
          id: Math.random() - 0.5,
          icon: 'iconfanli',
          text: '返利通道',
          color: '#f00'
        },],
        [{
          id: Math.random() - 0.5,
          icon: 'iconshezhi',
          text: '设置',
          color: '#1296db'
        }]
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  width: 100%;
  .header
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    background: orange;
    .pic
      display: inline-block;
      vertical-align: middle;
      margin-left: .5rem;
      width: .9rem;
      height: .9rem;
      vertical-align: center;
      border: 2px solid #fff;
      border-radius: 50%;
      text-align: center;
      line-height: .9rem;
      .iconfont
        font-size: .6rem;
        color: #fff;
    .log-reg
      display: inline-block;
      margin-left: .2rem;
      color: #fff;
      font-size: .32rem;
  .order
    width: 100%;
    line-height: 1rem;
    border-bottom: 1px solid #c9c9c9;
    .myorder
      font-size: .34rem;
      padding-left: .5rem;
      color: #333;
    .all
      float: right;
      padding-right: .5rem;
      a,.iconfont 
        color: #c9c9c9;
  .todos 
    width: 100%;
    border-bottom: 1px solid #c9c9c9;
    .wrap 
      display: flex;
      width: 100%;
      justify-content: space-around;
      li 
        width: 22%;
        height: 1.2rem;
        padding-top:.2rem;
        text-align: center;
        color: #999;
        span .iconfont
          font-size: .5rem;
        p 
          padding-top: .1rem;
  .contain 
    margin-top: .5rem;
    background: #f8fcff;
</style>