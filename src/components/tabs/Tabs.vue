<template>
  <el-tabs id="tabs" type="card" v-model="activeName" @tab-click="handleClick" tab-position="top">
    <el-tab-pane :label="lab" :name="`${index}`"  v-for="(lab,index) in labels" :key="index">
      <slot name="tabs"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name:"Tabs",
  props:{
    labels:{
      type:Array,
      default:[]
    },
    tabsIndex:''
  },
  data() {
      return {
        activeName: '0', 
      }
  },
  watch:{
    tabsIndex(val){
      this.activeName=val
    },
  },
  mounted(){
    // console.log(this.labels)
  },
  methods: {
    handleClick(tab) {
      this.$emit('clickTabs',tab.index) //将index传给order父组件
   }
  }
}
</script>
<style scoped>

</style>