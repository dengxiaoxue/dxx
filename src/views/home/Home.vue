<template>
  <div id="home">
    <div class="strawberry"><img class="img" src="~assets/img/strawberry.jpg" alt=""/></div>
    <div class="home-container">
      <div>内容</div>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data(){
    return{}
  },
  methods:{
    
  }
}
</script>

<style>
.strawberry{
  position: absolute;
  top:60px;
  left: 0;
  right: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.img{
  width: 100%;
}
.home-container{
  margin-top: 500px;
}
</style>