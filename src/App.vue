<template>
  <div id="app">
    <el-container>
      <el-header id="header">
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
#header{
  padding: 0;
}
#main{
  padding: 0;
}
</style>
