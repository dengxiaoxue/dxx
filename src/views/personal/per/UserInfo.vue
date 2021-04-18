<template>
  <el-form id="user-info" ref="form" :model="form" label-width="80px">
      <el-form-item label="头像">
          <div  class="item">
            <el-avatar size="large" :src="form.avatar"></el-avatar>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/">
              <el-button type="primary" plain>上传</el-button>
            </el-upload>
          </div>
      </el-form-item>
      <el-form-item label="用户名">
          <div  class="item">
            <div>{{form.name}}</div>
            <el-button type="primary" refs="name" @click="change" plain>修改</el-button>
          </div>
      </el-form-item>
      <el-form-item label="生日">
          <div  class="item">
            <div>{{form.birthday}}</div>
            <el-button type="primary" @click="dialogTableVisible = true" plain>修改</el-button>
          </div>
      </el-form-item>
      <el-form-item label="性别">
          <div  class="item">
            <div>{{form.sex}}</div>
            <el-button type="primary" refs="sex" @click="changeSex" plain>修改</el-button>
          </div>
      </el-form-item>


      <el-dialog title="修改日期" :visible.sync="dialogTableVisible">
        <change-date></change-date>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
         </div>
      </el-dialog>
  </el-form>
</template>
<script>
import ChangeDate from 'components/dialog/ChangeDate.vue';
export default {
  components: { ChangeDate, },
  name:"UserInfo",
  data(){
    return{
      form:{
        avatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name:'乌乌龟大师',
        birthday:'2021/4/16',
        sex:'女'
      },
      dialogTableVisible:false,
      title:['请输入新的用户名','修改性别']
    }
  },
  methods:{
    change(){
      this.$prompt('请输入新的用户名','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value})=>{
        this.$message({
          type:'success',
          message:'修改成功'+value
        });
      }).catch(()=>{
        this.$message({
          type:'info',
          message:'取消输入'
        });
      });
    },
    changeSex(){
      this.$prompt('修改性别','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value})=>{
        this.$message({
          type:'success',
          message:'修改成功'+value
        });
      }).catch(()=>{
        this.$message({
          type:'info',
          message:'取消输入'
        });
      });
    },
  }
}
</script>
<style scoped>
#user-info{
  padding-top: 50px;
  z-index: 9999;
}
.item{
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>