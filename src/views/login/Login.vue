<template>
  <div id="login">
    <el-form :model="user" :rules="rules" label-position="left" label-width="100px" status-icon>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name" placeholder="请输入用户名..."></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" placeholder="请输入密码..."></el-input>
      </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="submitForm(user)">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {reqLogin} from '../../network/login'
export default {
  name: 'Login',
  data(){
    return{
      user:{
        name:'',
        password:''
      },
      rules:{
        name:[{required: true,message:'请输入用户名',trigger:'blur'}],
        password:[{required: true,message:'请输入密码',trigger:'blur'}]
      }
    }
  },
  methods:{
    submitForm(user){
      reqLogin(user).then(response=>{
        console.log(response)
      })
    }
  }
}
</script>

<style>
#login{
  width: 100%;
  display: flex;
  padding: 0;/*屏幕占满整个高度 */
   margin: 0;
   position: absolute;
   left: 0;
   top: 60px;
   bottom: 0;
   right: 0;
   background-image: url('~assets/img/login.jpg');
}
#login .el-form{
  width: 400px;
  background-color: rgba(227, 231, 229, 0.2);
  padding: 40px;
  border-radius: 5%;
  margin: auto;
}
#login .el-form .el-form-item__label{
  color: #fff;
}
</style>