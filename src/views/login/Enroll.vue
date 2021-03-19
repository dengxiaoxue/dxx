<template>
  <div id="enroll">
    <el-form :model="user" :rules="rules" label-position="right" label-width="80px" status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username" placeholder="请输入用户名..."></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" placeholder="请输入密码..."></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Enroll',
  data(){
    let validatePass=(rule, value, callback)=>{
      if(value==='dxx'){
        callback(new Error('用户名已存在'))
      }
    };
    return{
      user:{
        userId:0,
        username:'',
        password:''
      },
      rules:{
        username:[
          {required: true,message:'请输入用户名',trigger:'blur'},
          {validator: validatePass,trigger:'blur'}
        ],
        password:[{required: true,message:'请输入密码',trigger:'blur'}]
      }
    }
  },
  methods:{
  }
}
</script>

<style>
#login{
  width: 50%;
}
#login .el-input{
  margin: 10px 10px;
}
</style>