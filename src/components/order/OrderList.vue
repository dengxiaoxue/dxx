<template>
  <div class="order-list" v-infinite-scroll="load" style="overflow:auto">
    <order-list-item v-for="(order,index) in orders" :key="index" :order="order"/>
  </div>
</template>
<script>
import OrderListItem from './OrderListItem.vue'
export default {
  components: { OrderListItem },
  name:"OrderList",
  props:{
    orders:{
      type:Array,
      default:[]
    },
  },
  data(){
    return{
      item:{
        total:0,//数据的总数量
        totalPage:0,//取整数量除每页展示的数量  分页大小
        current:1 //默认展示页码
      },
      list:{} //以对象的格式来保存数据
    }
  },
  created(){
    //后端统一把所有数据以json串 传给前端
    this.item.total  = this.orders.length //数据的总数量
    this.item.totalPage = Math.ceil(this.item.total/5) //取整数量除每页展示的数量  分页大小
    this.item.current = 1 //默认展示页码

    //for循环 分页大小size
    for(var i = 0;i < this.item.totalPage;i++){
        this.list['page'+(i+1)] = []
    }
    let count = 0  //计数器
    let current = 1  //list key
    this.orders.forEach((itm,idx)=>{
        if(count==5){  
            current++  
            count = 0
        }
        this.list['page'+current].push(itm)
    //如果计数器等于展示数量，则在list[key]处push数据，同时计数器还原
        count++ //每次循环计数器++
    })
    //分页数据如下
    // console.log(this.list)
  },
  methods: {
      load () {
        
      }
    }
}
</script>
<style scoped>

</style>