<template>
  <div id="goods-list" >
    <el-row>
      <el-col :span="6" v-for="(item,index) in goods" :key="index">
        <el-card shadow="hover">
          <goods-list-item :goods-item="item"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import GoodsListItem from '../goods/GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return{
      arr:[1,2,3,4,5,6,7,8,9,10,11]
    }
  }
}
</script>
<style scoped>

</style>