<template>
  <div class="shop-toolbar padding-bottom-1x mb-2">
    <div class="shop-sorting">
      <label for="sorting"></label>
      <select class="form-control" id="sorting" v-model="sortType" v-on:change="sortBy">
        <option disabled value="">정렬 선택</option>
        <option value="priceLow">낮은 가격순</option>
        <option value="finish">거래완료</option>
        <option value="priceHigh">높은 가격순</option>
        <option value="old">오래된 순</option>
        <option value="turn">되돌리기</option>
      </select>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from "../../api/Goods.js";
export default {
  props:{
    goodsdata:Array,
    goodsdataOriginal:Array,
    goodsdataFinish:Array,
    infiniteBtn:Boolean,
  },
  data() {
    return {
      // goodsOriginal:[...this.$store.state.goods.goods],
      // goods:this.$store.state.goods.goods,
      sortType:'',
      turnCheck:false,
    };
  },
  mounted() {

  },
  methods: {
    async sortBy() {
      this.turnCheck=false;
      switch(this.sortType){
        case 'old':{
          this.goodsdata.sort(function(a,b){
            return a.id-b.id;
          })
          break;
        }
        case 'priceHigh':{
          this.goodsdata.sort(function(a,b){
            return b.price-a.price;
          })
          break;
        }
        case 'priceLow':{
          this.goodsdata.sort(function(a,b){
            return a.price-b.price;
          })
          break;
        }
        case 'finish':{
          this.goodsdata=[];
          this.goodsdata=this.goodsdataFinish;
          break;
        }
        case 'turn':{
          const response = await getGoodsList(8);
          this.goodsdata = response.data;
          this.goodsdata.sort(function(a,b){
            return b.id-a.id;
          })
          this.turnCheck=true;
          break;
        }
      }
      try {
          this.infiniteBtn=false;
          // 되돌릴 때는 무한스크롤 작동
          if(this.turnCheck==true){
            this.infiniteBtn=true;
          }
          this.$emit('pass',this.goodsdata)
          this.$emit('change',this.infiniteBtn);
          console.log(this.goodsdata);
        } catch (error) {
          alert(error);
      }
    },
  },
};
</script>

<style>
/* .shop-sorting{
	float:right;
} */
</style>