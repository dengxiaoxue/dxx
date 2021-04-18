<template>
  <div id="slider">
    <el-menu background-color="rgba(248, 248, 248, 0.4)" 
             text-color="black" 
             active-text-color="rgb(10, 116, 238)" 
             @select="handleSelect" 
              :default-active="activeIndex">
      <el-menu-item v-for="(title,index) in titles" :index="`${index}`" :key="index">
        <i class="el-icon-setting"></i>
        <span slot="title">{{title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Slider',
  props:{
    titles:{
      type:Array,
      default:[]
    },
    tabsIndex:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      activeIndex:'0',
      paths:['index','send','message','userinfo','account']
    }
  },
  mounted(){
    // console.log(this.titles)
  },
  watch:{
    tabsIndex(val){
      this.activeIndex=val
    }
  },
  methods:{
    handleSelect(index){
      // console.log(this.$route.path) 通过路由改变组件
      if(this.$route.path.indexOf('personal')===1){
        this.$router.push(this.paths[index])
      }
      //通过自定义事件改变组件
      if(this.$route.path.indexOf('order')===1){
        this.$emit('selectIndex',index)
      }
    }
  }
}
</script>

<style scoped>
#slider .el-menu{
  width: 200px;
  position: fixed;
  top: 60px;
  bottom: 0;
  /* color: rgb(10, 116, 238); */
}
</style>