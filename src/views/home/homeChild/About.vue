<template>
  <div class="about">
        <div class="about-item">
          <div class="about-item-building"><i class="el-icon-office-building"></i></div>
          <div class="about-item-text">正规渠道</div>
          <div class="about-item-describe">安全有保障</div>  
        </div>
        <div class="about-item">
          <div class="about-item-place"><i class="el-icon-place"></i></div>
          <div class="about-item-text">上门回收</div>
          <div class="about-item-describe">上门服务，省心省力</div>  
        </div>
        <div class="about-item">
          <div class="about-item-bicycle"><i class="el-icon-bicycle"></i></div>
          <div class="about-item-text">绿色环保</div>
          <div class="about-item-describe">变废为宝</div>  
        </div>
        <div class="about-item">
          <div class="about-item-refresh"><i class="el-icon-refresh"></i></div>
          <div class="about-item-text">再生利用</div>
          <div class="about-item-describe">梯次利用，循环再生</div>  
        </div>
  </div>
</template>
<script>
export default {
  name:'About'
}
</script>
<style scoped>
.about{
  display: flex;
  justify-content: space-around;
}
.about-item{
  text-align: center;
}
.about-item i{
  font-size: 44px;
}
.about-item-building{
  color: rgb(245, 140, 41);
}
.about-item-place{
  color: rgb(130, 133, 5);
}
.about-item-bicycle{
  color: rgb(13, 138, 2);
}
.about-item-refresh{
  color: rgb(8, 102, 156);
}
.about-item-text{
  font-size: 24px;
  padding: 5px;
}
.about-item-describe{
  font-size: 12px;
  color: rgb(168, 168, 168);
}
</style>