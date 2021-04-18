<template>
  <div id="home">
    <div class="strawberry"><img class="img" src="~assets/img/strawberry.jpg" alt=""/></div>
    <el-main class="home-container">
      <el-divider>关于我们</el-divider>
      <about/>
      <el-divider>磷酸铁锂电池回收</el-divider>
      <goods-list :goods="lithCells"/>
      <el-divider>三元电池回收</el-divider>
      <goods-list :goods="lithCells"/>
    </el-main>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <el-footer>
      <span>©垃圾回收站-dxx</span>
    </el-footer>
  </div>
</template>
<script>
import GoodsList from 'components/goods/GoodsList.vue'
import About from './homeChild/About.vue'

export default {
  name: 'Home',
  components:{About, GoodsList},
  data(){
    return{
      lithCells:[
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
    
  }
}
</script>

<style scoped>
.strawberry{
  position: absolute;
  top:60px;
  left: 0;
  right: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.img{
  width: 100%;
}
.home-container{
  margin-top: 500px;
}
.el-divider{
  margin: 60px 0;
}
.el-footer{
  font-size: 12px;
  color: #ccc;
}
</style>