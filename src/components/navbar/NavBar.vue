<template>
  <div id="nav-bar">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" 
      background-color="rgba(255, 255, 255, 0.2)" text-color="#000" active-text-color="#7ebff5">
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">商城</el-menu-item>
        <el-menu-item index="3">我的订单</el-menu-item>
        <el-menu-item index="4">个人中心</el-menu-item>
        <el-menu-item index="5">登录/注册</el-menu-item>
      </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data(){
    return{
      paths:['/home','/shop','/order','/personal','/login']
    }
  },
  methods:{
    handleSelect(key){
      this.$router.push(this.paths[key-1])
    }
  }
}
</script>

<style scoped>
.c{
  color:#7ebff5;
}
</style>>

