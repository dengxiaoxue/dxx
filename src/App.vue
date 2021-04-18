<template>
  <div id="app">
    <el-container id="container">
      <el-header id="header" v-if="$route.path.indexOf('detail')===-1?true:false">
          <div id="logo"><span>电池回收站</span></div>
          <nav-bar ></nav-bar>
      </el-header>
      <el-main id="main">
        <!-- 缓存，避免每次切换路由重新加载 -->
        <keep-alive><router-view/></keep-alive> 
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return{
      isAppHeader:true,
    }
  },
  mounted(){
    console.log(this.$route.path)
  }
}
</script>

<style scoped>
@import "assets/css/normalize.css";
#container{
  margin: auto;
}
#header{
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  padding: 0 10%;
}
#logo{
  width: 120px;
  display: flex;
  align-items: center; 
  justify-content: center;
}
#main{
  padding: 0;
   width: 80%;
   margin: auto;
}
</style>
