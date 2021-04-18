<template>
  <div class="order-list-item">
    <div class="item-img">
      <img :src="order.img" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{order.title}}</div>
      <div class="item-desc">{{order.desc}}</div>
      <div class="info-bottom">
        <span class="item-count right">{{order.date|showDate}}</span>
      </div>
    </div> 
    <div class="item-benefit">
      <div class="item-price"><span>价格：</span>￥{{order.benefit}}</div>
    </div>
    <div class="item-status">
      <!-- <slot name="status"></slot> -->
      <div v-if="order.condition==='finish'?orderStatus='已完成':orderStatus='进行中'">{{orderStatus}}</div>
    </div>
    <div class="opt">
      <!-- <slot name="opt"></slot> -->
      <el-button type="danger" plain>删除订单</el-button>
    </div>
  </div>
</template>
<script>
import {formaDate} from 'common/utils.js'
export default {
  name:"OrderListItem",
  props:{
    order:{
      type:Object,
      default:{}
    }
  },
  data(){
    return{
      orderStatus:''
    }
  },
  filters:{
    showDate(value){
      const date=new Date(value*1000)
      return formaDate(date,'yyyy/MM/dd hh:mm:ss')
    }
  },
  created(){
    // console.log(this.order)
  }
}
</script>
<style scoped>
.order-list-item{
  display: flex;
  width: 100%;
  background-color: rgb(255, 229, 196,.4);
  border-bottom: 1px solid #ccc;
}
.item-title, .item-desc{
  overflow: hidden;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
}
.item-img{
  padding: 15px;
}
.item-img img{
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 15px 10px;
  position: relative;
  overflow: hidden;
  width: 35%;
}
.item-info .item-desc{
  font-size: 12px;
  color: #666;
  margin-top: 15px;
}
.info-bottom{
  font-size: 12px;
  margin-top: 10px;
  position: absolute;
  bottom: 12px;
  left: 10px;
  right: 10px;
  color: rgb(146, 146, 146);
}
.item-benefit,.item-status,.opt{
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(180, 9, 9);
  width: 20%;
}
.item-price span,.item-status{
  font-size: 12px;
  color: rgb(146, 146, 146);
}
</style>