<template>
  <div id="personal">
    <div class="image-box"><img class="img" src="~assets/img/student.jpg" alt=""/></div>
    <div class="personal-container">
      <slider :titles="titles"/> 
      <div class="right">
        <keep-alive><router-view/></keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from 'components/slider/Slider.vue'
import Card from './per/Card'
export default {
  components: { Slider,Card },
  name: 'Personal',
  data(){
    return{
      titles:['首页','我发布的','留言','我的信息','我的账户']
    }
  }
}
</script>

<style scoped>
.image-box{
  position: fixed;
  top:60px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: -999;
}
.img{
  width: 100%;
}
.personal-container{
  display: flex;
}
.right{
  margin-left: 210px;
  background-color: rgba(248, 248, 248, 0.8);
  width: 100%;
}
</style>