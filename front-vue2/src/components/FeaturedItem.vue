<template>
  <div id="featured-item">
      <Goods></Goods>
  </div>
</template>

<script>
import Goods from './common/goods_copy.vue'
import Sort from './common/sort.vue'

export default {
    data(){
        return{
            cateName:$router.params.big+'/'+$router.params.mid
        };
    },
    components:{
        Goods,
        
        Sort
    },
    methods:{

    }

}
</script>

<style>

</style>