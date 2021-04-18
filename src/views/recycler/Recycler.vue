<template>
<div class="recy">
  <el-main>
  <div class="avatar">
    <el-tooltip class="item" effect="dark" content="退出登录" placement="top-start">
        <el-button type="text" @click="outLogin"><el-avatar class="img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></el-button>
    </el-tooltip>
    <div class="name">乌乌龟大师</div>
  </div>
  <el-tabs class="tabs" type="card" tab-position="left" style="height: 800px">
    <el-tab-pane label="首页">
      <swiper class="swiper"></swiper>
      <search class="search"></search>
      <goods-list :goods="goods" class="goods"/>
    </el-tab-pane>
    <el-tab-pane label="全部订单">
      <order></order>
    </el-tab-pane>
    <el-tab-pane label="进行中的订单">
      <order></order>
    </el-tab-pane>
    <el-tab-pane label="已完成订单">
      <order></order>
    </el-tab-pane>
    <el-tab-pane label="我的信息">
      <user-info></user-info>
    </el-tab-pane>
  </el-tabs>
  </el-main>
</div>
</template>
<script>
import GoodsList from 'components/goods/GoodsList.vue'
import Search from './shopChild/Search.vue'
import Swiper from './shopChild/Swiper'
import Order from './order/ReOrder'
import UserInfo from '../personal/per/UserInfo.vue'
export default {
  components: { Swiper,Search, GoodsList,Order, UserInfo },
  name:"Recycler",
  data(){
    return{
       goods:[
        {
          id:0,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:1,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:2,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:3,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:4,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:5,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:6,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        },
        {
          id:7,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56'
        }
      ]  
    }
  },
  methods:{
    outLogin(){
      this.$confirm('退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login'),
          this.$message({
            showClose: true,
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            showClose: true,
            type: 'info',
            message: '取消退出!'
          });          
        });
    }
  }
}
</script>
<style scoped>
.recy{
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.avatar{
  width: 80px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.avatar .img{
  width: 60px;
  height: 55px;
  margin-bottom: 5px;
}
.tabs{
  position: relative;
}
.swiper{
  position: relative;
}
.search{
  position: relative;
}
.goods{
  position: relative;
}
</style>