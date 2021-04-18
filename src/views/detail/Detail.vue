<template>
  <div id="detail">
    <detail-header/>
    <div class="detail-container">
      <detail-info :goods="goods"/>
      <detail-comments :commentInfo="goods.commentInfo"/>
    </div>
  </div>
</template>
<script>
import DetailComments from './detailChild/DetailComments.vue'
import DetailHeader from './detailChild/DetailHeader.vue'
import DetailInfo from './detailChild/DetailInfo'
export default {
  components: { DetailHeader, DetailInfo, DetailComments },
  name:"Detail",
  data(){
    return{
      goods:{
          id:0,
          img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'半亩花田樱花冰淇淋身体磨砂膏去角质焕亮女全身疙瘩沐浴露小粉罐',
          collect:25866,
          price:'$56',
          address:'北京',
          count:19,
          describe:'三元电池，原装全新，20w原装充电器，7代以上都可用，因为换新，',
          commentInfo:[
            {
                user:{
                avater:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                name:'dxx'
              },
              content:'可以卖给我吗？',
              created:1618554445
            },
            {
                user:{
                avater:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                name:'hdd'
              },
              content:'可以卖给我吗？',
              created:1618554445
            },
            {
                user:{
                avater:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                name:'hsd'
              },
              content:'可以卖给我吗？',
              created:1618554445
            },
            {
                user:{
                avater:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                name:'yyds'
              },
              content:'可以卖给我吗？',
              created:1618554445
            },
          ]
      }
    }
  },
  created(){
    //根据id发起请求
  }
}
</script>
<style scoped>
#detail{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.detail-container{
  width: 100%;
}
</style>