<template>
  <div id="login">
    <el-form :model="user" :rules="rules" label-position="left" label-width="100px" status-icon>
      <div class="login-title">{{title}}</div>
      <el-form-item>
        <span class="log" :class="{active:isLog}" @click="isLog=true">登录</span>
        <span class="enr" :class="{active:!isLog}" @click="isLog=false">注册</span>
      </el-form-item>
      <div v-if="isLog">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name" placeholder="请输入用户名..." prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input  type="password" v-model="user.password" placeholder="请输入密码..." prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="btn" @click="submitForm(user)">登录</el-button>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name" placeholder="请输入用户名..." prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password" placeholder="请输入密码..." prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" class="btn" @click="submitForm(user)">注册</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import {reqLogin} from 'network/login'
export default {
  name: 'LoginChild',
  data(){
    return{
      isLog:true,
      user:{
        name:'',
        password:''
      },
      rules:{
        name:[{required: true,message:'请输入用户名',trigger:'blur'}],
        password:[{required: true,message:'请输入密码',trigger:'blur'}]
      },
      title:'用户登录'
    }
  },
  mounted(){
    this.$bus.$on('login',(title)=>{  //这里在create里监听=>mounted
      this.title=title
    })  
  },
  methods:{
    submitForm(user){
      const _this=this
      reqLogin(user).then(response=>{
        _this.$store.commit('login',response)
        // console.log('登录成功')
        // console.log(_this.$store.state.user) //可以拿到state里的数据
        _this.$router.replace('/home')
        this.$message({
          showClose: true,
          message: '登录成功！',
          type: 'success'
        });
        this.$store.state.logined=true
      })
    }
  }
}
</script>

<style scoped>
#login{
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('~assets/img/strawberry.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%; /*满屏*/
  display: flex;
  justify-content: center;
  align-items: center;
}
 .el-form{
  width: 400px;
  background-color: rgba(4, 20, 27, 0.8);
  padding: 40px;
  border-radius: 5%;
}
 .el-form .el-form-item__label{
  color: #fff;
}
.el-form .login-title{
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
}
.log,.enr{
  font-size: 18px;
  color: #fff;
  padding: 8px 28px;
  margin: 0 3px;
  cursor: pointer;
}
.active{
  border-bottom: 2px solid rgb(83, 168, 243);
  color: rgb(83, 168, 243);
}
.btn{
  width: 100%;
}
</style>