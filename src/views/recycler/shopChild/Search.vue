<template>
  <div id="search" style="margin-top: 15px;">
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择" class="options">
         <el-option label="磷酸铁锂电池" value="1"></el-option>
         <el-option label="三元电池" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
 </div>
</template>
<script>
export default {
  name: 'Search',
  data(){
    return{
      input3:'',
      select:''
    }
  }
}
</script>

<style scoped>
#search{
  transform: translate(-50%,0);
  z-index: 999;
  position: relative;
  top: -100px;
  right: -50%;
  width: 80vw;
  max-width: 760px;
}
.options{
  width: 200px;
}
</style>