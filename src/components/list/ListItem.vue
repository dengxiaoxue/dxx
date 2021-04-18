<template>
  <div class="order-list-item">
    <div class="item-img">
      <slot name="img">
      </slot>
    </div>
    <div class="item-info">
      <div class="item-title"><slot name="title"></slot></div>
      <div class="item-desc"><slot name="desc"></slot></div>
      <div class="info-bottom">
        <span class="item-count right"><slot name="date"></slot></span>
      </div>
    </div> 
    <div class="item-benefit">
      <div class="item-price"><span></span><slot name="price"></slot></div>
    </div>
    <div class="item-status">
      <slot name="status"></slot>
    </div>
    <div class="opt">
      <slot name="opt"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"ListItem",
  props:{
    
  },
  data(){
    return{
    }
  },
  created(){
  }
}
</script>
<style scoped>
.order-list-item{
  display: flex;
  width: 100%;
  background-color: rgba(247, 246, 245, 0.4);
  border-bottom: 1px solid #ccc;
}
.item-title, .item-desc{
  overflow: hidden;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
}
.item-img{
  padding: 15px;
}
.item-img img{
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: rgb(0, 0, 0);
  padding: 15px 10px;
  position: relative;
  overflow: hidden;
  width: 35%;
}
.item-info .item-desc{
  font-size: 12px;
  color: rgb(0, 0, 0);
  margin-top: 15px;
}
.info-bottom{
  font-size: 12px;
  margin-top: 10px;
  position: absolute;
  bottom: 12px;
  left: 10px;
  right: 10px;
  color: rgb(39, 39, 39);
}
.item-benefit,.item-status,.opt{
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}
.item-price span,.item-status{
  font-size: 12px;
  color: rgb(0, 0, 0);
}
</style>