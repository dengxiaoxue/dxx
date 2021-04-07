<template>
  <div id="app">
    <el-container id="container">
      <el-header id="header">
          <div id="logo"><span>电池回收站</span></div>
          <nav-bar></nav-bar>
      </el-header>
      <el-main id="main">
          <router-view/>
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
  }
}
</script>

<style>
@import "assets/css/normalize.css";
#container{
  width: 80%;
  margin: auto;
}
#header{
  padding: 0;
  display: flex;
  justify-content: space-between;
}
#logo{
  width: 120px;
  display: flex;
  align-items: center; 
  justify-content: center;
}
#main{
  padding: 0;
}

</style>
