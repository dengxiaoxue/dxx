<template>
    <div class="detail-info">
      <images/>
      <info :goods="goods"/>
    </div>
</template>
<script>
import Info from './Info.vue'
import Images from './Images.vue'
export default {
  components: {Images, Info  },
  name:"DetailInfo",
  props:{
    goods:{
      type:Object,
      default:{}
    }
  },
  data(){
    return{
    }
  }
}
</script>
<style scoped>
.detail-info{
  height: 500px;
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
</style>