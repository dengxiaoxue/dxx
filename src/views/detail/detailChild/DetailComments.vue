<template>
    <div class="detail-comments" v-if="Object.keys(commentInfo).length!==0">
      <div class="box">
        <div class="info-header">
          <div class="header-title">用户留言</div>
          <div class="header-more">
            更多
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="info-user"  v-for="(item,index) in commentInfo" :key="index">
          <img :src="item.user.avater" />
          <span class="name">{{item.user.name}}</span>
          <div class="content">{{item.content}}</div>
          <div class="date">
            <span class="da">{{item.created|showDate}}</span>
            <span class="reply">回复</span>
          </div>
          <el-divider></el-divider>
        </div>
      </div>
    </div>
</template>
<script>
import {formaDate} from 'common/utils.js'
export default {
  components: {  },
  name:"DetailComments",
  props:{
    commentInfo:{
      type:Array,
      default:[]
    }
  },
  filters:{
    showDate(value){
      const date=new Date(value*1000)
      return formaDate(date,'yyyy/MM/dd hh:mm:ss')
    }
  }
}
</script>
<style scoped>
.detail-comments{
  height: 505px;
  padding-bottom: 10px;
}
.box{
  margin: auto;
  width: 1000px;
  height: 100%;
  border: 1px solid rgb(184, 229, 157,.6);
}
.info-header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  background-color: rgb(184, 229, 157,.6)
}
.header-title{
  float: left;
  font-size: 15px;
  padding-left: 2px;
}
.header-more{
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.info-user{
  padding: 10px 0 5px;
  background-color: #fff;
  overflow: hidden;
}
.info-user img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.info-user .name{
  position: relative;
  font-size: 18px;
  font-weight: 700;
  top: -15px;
  margin-left: 10px;
}
.info-user .content, .date{
  position: relative;
  left: 60px;
}
.date{
  font-size: 12px;
  color: #ccc;
  padding: 5px;
}
.da{
  margin-right: 20px;
}
.reply{
  position: relative;
}
.reply::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
  .el-divider{
    margin: 0 60px;
  }
</style>