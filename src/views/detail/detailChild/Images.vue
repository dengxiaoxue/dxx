<template>
    <div class="images">
      <div class="big-image">
        <el-image
          style="width: 380px; height: 380px"
          class="" :src="url"
          fit="fill">
        </el-image>
      </div>
      <div class="small-imgs">
        <el-image 
        v-for="(item,index) in imgs" 
        :src="item.url" :key="index"
        style="width: 80px; height: 100px"
        fit="contain">
        </el-image>
      </div>
    </div>
</template>
<script>
export default {
  components: {  },
  name:"Images",
  data(){
    return{
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      imgs:[
        {
          id:0,
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
          id:1,
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
          id:2,
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
          id:3,
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }
      ]
    }
  }
}
</script>
<style scoped>
.images{
  width: 400px;
}
.big-image{
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.small-imgs{
  display: flex;
  justify-content: space-around;
}
</style>