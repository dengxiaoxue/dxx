<template>
    <div class="goods-item" @click="itemClick">
      <div class="img"><img :src="goodsItem.img" @load="imageLoad"/></div>
      <div class="goods-info">
        <p class="title">{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.collect}}</span>
      </div>
    </div>
</template>
<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  methods:{
    itemClick(){
      console.log('/detail/'+this.goodsItem.id)
      this.$router.push('/detail/'+this.goodsItem.id) 
    },
    imageLoad(){
      console.log('imageLoad')
    }
  }
}
</script>
<style scoped>
.goods-item{
  /* border: 1px solid pink; */
  /* padding: 15px 15px 40px 15px; */
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
  flex: 1;

  cursor: pointer;
}
.goods-item .img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.goods-item .img img {
    width: 100%;
    border-radius: 5px;
    transition: all .4s;
}
.goods-item img:hover{
    transform: scale(1.1);
    transition: all .5s ease 0s;
    /* 兼容 */
    -webkit-transform: scale(1.1);
    -webkit-transform: all 1s ease 0s;
}
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    padding: 0 10px;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: rgb(167, 8, 8);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>