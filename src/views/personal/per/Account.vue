<template>
  <el-card class="account">
    <div slot="header" class="clearfix">
        <span>我的账户</span>
        <el-button style="float: right; padding: 3px 0" type="text">常见问题</el-button>
    </div>
    <div class="account-main">
        <div>
          <div>账户余额</div>
          <div class="price">￥118</div>
        </div>
        <el-button type="primary">去充值</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  name:"Account"
}
</script>
<style scoped>
.account{
  background-color: rgb(239, 247, 167,.2);
}
.account-main{
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  font-size: 24px;
}
.price{
  margin-top: 10px;
  color: rgb(139, 4, 4);
}
</style>