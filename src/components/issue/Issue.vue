<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="电池类别">
          <el-select v-model="cell.classify" placeholder="请选择电池类别">
              <el-option label="三元电池" value="sy"></el-option>
              <el-option label="磷酸铁磷电池" value="ls"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标题">
          <el-input v-model="cell.title"></el-input>
        </el-form-item>

        <el-form-item label="上门时间">
          <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="cell.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="cell.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="上门地址">
          <el-input v-model="cell.address"></el-input>
        </el-form-item>

        <el-form-item label="数量">
          <el-input v-model="cell.count"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input type="textarea" v-model="cell.desc"></el-input>
        </el-form-item>

        <el-form-item label="上传图片">
          <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              >
              <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
  name:"Issue",
  data(){
    return{
      cell:{
        classify:'三元电池',
        title:'三元聚合物锂电池',
        date1:'',
        date2:'',
        address:'北京',
        count:19,
        desc:'三元材料做正极的电池相对于钴酸锂电池安全性高，但是电压太低，用在手机上会有明显的容量不足的感觉',
        images:['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
      }
    }
  }
}
</script>
<style scoped>

</style>