<template>
  <div id="nav-bar">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" 
      background-color="rgba(255, 255, 255, 0.2)" text-color="#000" active-text-color="rgb(83, 168, 243)">
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">商城</el-menu-item>
        <el-menu-item index="3">我的订单</el-menu-item>
        <el-menu-item index="4">我的小站</el-menu-item>
        <el-submenu index="5" v-if="!$store.state.logined">
          <template slot="title">登录/注册</template>
          <el-menu-item index="5">我是用户</el-menu-item>
          <el-menu-item index="6">我是回收员</el-menu-item>
          <el-menu-item index="7">我是管理员</el-menu-item>
        </el-submenu>
        <el-submenu class="avatar" v-if="$store.state.logined">
          <!-- <div class="name">乌乌龟大师</div> -->
          <template slot="title"><el-avatar class="img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></template>
          <el-menu-item index="8" >退出登录</el-menu-item>
        </el-submenu>
      </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data(){
    return{
      paths:['/home','/shop','/order','/personal','/login'], //'/login/recycler','/login/admin'
      titles:['用户登录','回收员登录','管理员登录'],
    }
  },
  methods:{
    handleSelect(index){
      this.$router.push(this.paths[index-1])
      if(index==='5'){
        this.$bus.$emit('login',this.titles[0])  //发射到login组件里切换标题
        this.$router.push(this.paths[4])
      }
      if(index==='6'){
        this.$bus.$emit('login',this.titles[1])
        this.$router.push(this.paths[4])
      }
      if(index==='7'){
        this.$bus.$emit('login',this.titles[2])
        this.$router.push(this.paths[4])
      }
      if(index==='8'){
         this.$confirm('退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.state.logined=false
          this.$router.push('/login')
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
}
</script>

<style scoped>

/* .avatar{
  display: flex;
  justify-content: center;
  font-size: 12px;
}
.avatar .img{
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
} */
</style>>

