<template>
  <el-card class="card">
    <div class="user">
      <div class="user-avatar">
        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
      </div>
      <div class="user-info">
        <div class="user-name">乌乌龟大师</div>
        <div class="user-desc">保护环境，人人有责</div>
      </div> 
    </div>
    <div class="datas">
      <div class="text">
        <div class="wallet"><i class="el-icon-wallet"></i></div>
        <div>累计收益<span>900元</span></div>   
      </div>
      <div class="text">
        <div class="sell"><i class="el-icon-sell"></i></div>
        <div>我发布的 2</div>
      </div>
      <div class="text">
        <div class="book"><i class="el-icon-notebook-1"></i></div>
        <div>订单量 18</div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name:"Card"
}
</script>
<style  scoped>
.card{
  background-color: rgb(239, 247, 167,.2);
}
.user{
  display: flex;
}
.user-avatar{
  padding: 35px 20px;
}
.user-avatar img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid rgb(231, 231, 230,.6);
  /* display: block; */
}
.user-info{
  font-size: 24px;
  color: rgb(0, 0, 0);
  padding: 35px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user-info .user-name{
  font-weight: 500;
}
.user-info .user-desc{
  font-size: 12px;
  color: rgb(15, 15, 15);
  margin-top: 15px;
}

.datas{
 display: flex;
 justify-content: space-around;
 padding: 20px;
 border-radius: 10px;
 background-color: rgba(221, 224, 219, 0.8);
}
.text{
  text-align: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
}
.text i{
  font-size: 50px;
  margin: 10px;
}
.wallet{
  color: rgb(6, 121, 31);
}
.sell{
  color: rgb(114, 88, 3);
}
.book{
  color: rgb(20, 4, 109);
}
</style>