<template>
  <el-carousel class="swiper" :interval="5000" arrow="always" height="188px">
    <el-carousel-item v-for="(item,index) in imgs" :key="index">
      <el-image :src="item.url"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name:"Swiper",
  data(){
    return{
      imgs:[
        {
          url:'https://img.meituan.net/iphoenix/09ec58e3673a4d6aceabd9e1151781f95251800.png.webp@2880w_460h_80Q_1e_1c'
        },{
          url:'https://img.meituan.net/iphoenix/fae12ad6cb45735f4835276ada9cb062167115.jpg.webp@2880w_460h_80Q_1e_1c'
        },{
          url:'https://p0.meituan.net/iphoenix/5b2af7457f8f0feb26c030aeefecb33f2393508.jpg.webp@2880w_460h_80Q_1e_1c'
        },{
          url:'https://p1.meituan.net/iphoenix/3d1f903d47e845f896568b43d3bccc282623564.jpg.webp@2880w_460h_80Q_1e_1c'
        }
      ]
    }
  }
}
</script>

<style>
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
   .swiper{
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
}
</style>