<template>
  <el-form class="info" :model="goods" label-position="left" label-width="80px">
    <div class="title">{{goods.title}}</div>
    <el-form-item label="价格" class="price-box">
      <div class="price">{{goods.price}}</div>
    </el-form-item>
    <el-form-item label="发布地址">
      <div class="">{{goods.address}}</div>
    </el-form-item>
    <el-form-item label="数量">
      <div class="">{{goods.count}}</div>
    </el-form-item>
    <el-form-item label="商品详情">
      <div class="">{{goods.describe}}</div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="btn" @click="dialogFormVisible = true">去发布</el-button>
      <el-button type="warning" class="btn" @click="">去留言</el-button>
    </el-form-item>

    <el-dialog title="上传废旧电池" :visible.sync="dialogFormVisible">
      <issue></issue>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-form>
</template>
<script>
import Issue from 'components/issue/Issue.vue'
export default {
  components: {Issue  },
  name:"Info",
  props:{
    goods:{
      type:Object,
      default:{}
    }
  },
  data(){
    return{
      dialogFormVisible:false,
    }
  },
  created(){
    console.log('info组件')
    console.log(this.goods) 
  }
}
</script>
<style scoped>
.info{
  width: 600px;
  margin: 10px;
}
.title{
  width: 100%;
  height: 40px;
}
.price-box{
  background-color: rgb(167, 167, 167,.6);
  border-radius: 1%;
}
.price{
  font-size: 24px;
  color: rgb(153, 12, 12);
}
</style>