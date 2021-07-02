<template>
  <div class="shop-toolbar padding-bottom-1x mb-2">
    <div class="shop-sorting">
      <label for="sorting"></label>
      <select class="form-control" id="sorting" v-model="sortType" v-on:change="sortBy">
        <option disabled value="">정렬 선택</option>
        <option value="new">최신 순</option>
        <option value="old">오래된 순</option>
        <option value="priceHigh">높은 가격순</option>
        <option value="priceLow">낮은 가격순</option>
        <option>되돌리기</option>
        <option v-if="mypageCheck">거래완료</option>
        <option v-if="mypageCheck">거래중</option>
      </select>
    </div>
  </div>
</template>

<script>
import { getSortGoods } from "../../api/Goods.js";

export default {
  data() {
    return {
      // goodsOriginal:[...this.$store.state.goods.goods],
      // goods:this.$store.state.goods.goods,
      mypageCheck: false,
      sortType:'',
    };
  },
  mounted() {
    if (window.location.pathname === "/mypage") {
      this.mypageCheck = true;
    } else {
      this.mypageCheck = false;
    }
  },
  // props:{
  //   // goodsData:['goodsData']
  // },
  methods: {
    async sortBy() {
      let standard='';
      let order='';
      if(this.sortType=='new'){
        standard='id';
        order='DESC'
      }
      else if(this.sortType=='old'){
        standard='id';
        order='ASC'
      }
      else if(this.sortType=='priceHigh'){
        standard='price';
        order='DESC'
      }
      else{
        standard='price';
        order='ASC'
      }
      try {
        const response = await getSortGoods(standard,order);
        this.$emit('pass',response.data)
        console.log(response);
      } catch (error) {
        alert(error);
      }
    },
    // priceLow(){
    //   this.goods.sort(function(a,b){
    //     return a.price - b.price
    //   });
    //   this.$store.goods.commit('changeGoods',goods)
    //   this.$router.go()
    // },
    // priceHigh(){
    //   this.goods.sort(function(a,b){
    //     return b.price - a.price
    //   });
    // },
    // sortBack(){
    //   this.$store.state.goods.goods = [...this.goodsOriginal];
    // },
    // passGoods(){
    //   this.$store.state.goods.goods=[]
    //   // this.$store.goods.commit('changeGoods',goods)
    //   this.$router.go()
    // }
  },
};
</script>

<style>
/* .shop-sorting{
	float:right;
} */
</style>