<template>
  <div class="wrap">
    <input type="checkbox" @change="handleChange">
    <div class="total">
      ￥{{total}}
      <span class="freight">(不含运费)</span>
    </div>
    <div class="settle">去结算</div>
  </div>
</template>
<script>
export default {
  name: 'Computed',
  data() {
    return {
      totalPrices: this.$store.state.totalPrice,
      total: 0,
      cartList: this.$store.state.shopcart  //购物车中的商品
    }
  },
  methods: {
    handleChange(e) {
      let bool = e.target.checked
      if(bool){
        this.$bus.$emit("checked")
        for(let i = 0; i < this.cartList.length; i++){
          this.$store.commit("handleChangeTotalPrice", this.cartList[i])
        }
      }else{
        this.$bus.$emit("cancel")
        for(let j = 0; j < this.cartList.length; j++){
          this.$store.commit("handleChangeTotalPrice", this.cartList[j].id)
        }
      }
    }
  },
  computed: {
  
  },
  watch: {
    totalPrices(arr) {
      let total = 0
      this.$store.state.totalPrice.forEach( (item) => {
          total += +item.price
      })
      this.total = total
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  padding-left: .2rem;
  border-top: 1px solid #f60;

  input[type=checkbox]
    zoom: 150%;
  .total
    width: 45%;
    line-height: 1rem;
    text-align: center;
    font-size: .38rem;
    color: #f60;
    .freight
      color: #c9c9c9;
      font-size: .22rem;
  .settle
    width: 35%;
    line-height: 1rem;
    background: #ff3c25;
    font-size: .34rem;
    color: #fff;
    text-align: center;
</style>