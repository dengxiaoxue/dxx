<template>
    <div class="detail-header">
      <div class="username">乌乌龟大师</div>
      <div class="useritem">
        <span>卖家小站</span>
        <span>卖家小站</span>
        <span>卖家小站</span>
        <span>卖家小站</span>
      </div>
  </div>
</template>
<script>
export default {
  name:"DetailHeader"
}
</script>
<style scoped>
.detail-header{
  background-color: black;
  color: #fff;
  height: 100px;
  position: relative;
}
.username, .useritem{
  position: absolute;
}
.username{
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.useritem{
  left: 50%;
  transform: translate(-50%,0);
  bottom: 2px;
  display: flex;
  flex-wrap: nowrap;
}
.useritem span{
  margin: 0 10px;
}
</style>