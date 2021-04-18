<template>
  <div id="order"
            <list slot="tabs">
               <list-item v-for="(item,index) in orders.all" :key="index">
                <div slot="img"><img :src="item.img" alt=""></div>
                <div slot="title">{{item.title}}</div>
                <div slot="desc">{{item.desc}}</div>
                <div slot="date">{{item.date|showDate}}</div>
                <span slot="price">￥{{item.benefit}}</span>
                <div slot="status">{{item.condition==='finish'?'已完成':'进行中'}}</div>
                <div slot="opt">
                  <el-button type="danger" plain>删除</el-button>
                </div>
               </list-item>
           </list> 
  </div>
</template>
<script>
import List from 'components/list/List.vue'
import ListItem from 'components/list/ListItem.vue'

import {formaDate} from 'common/utils.js'
export default {
  components: {List,ListItem },
  name: 'Order',
  data(){
    return{
      orders:{
        all:[{
          id:1,
          title:'三元电池',
          desc:'轻轻的，我将离开你，请将眼角的泪拭去',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:298,
          condition:'finish',
        },{
          id:2,
          title:'磷酸铁锂电池',
          desc:'轻轻的，我将离开你，请将眼角的泪拭去',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:228,
          condition:'working',
        },{
           id:3,
           title:'三元电池',
           desc:'一闪一闪亮晶晶，满天都是小星星，挂在天上发光明，好像好像小眼睛',
           img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
           date:1618554445,
           count:2,
           benefit:97,
           condition:'finish',
        },{
           id:4,
           title:'磷酸铁锂电池',
           desc:'鹅鹅鹅，曲项向天歌，白毛浮绿水，红掌拨清波',
           img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
           date:1618554445,
           count:2,
           benefit:100,
           condition:'working',
        },{
          id:5,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:6,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
            },{
          id:7,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:8,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:9,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:1,
          title:'三元电池',
          desc:'轻轻的，我将离开你，请将眼角的泪拭去',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:298,
          condition:'finish',
        },{
          id:2,
          title:'磷酸铁锂电池',
          desc:'轻轻的，我将离开你，请将眼角的泪拭去',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:228,
          condition:'working',
        },{
           id:3,
           title:'三元电池',
           desc:'一闪一闪亮晶晶，满天都是小星星，挂在天上发光明，好像好像小眼睛',
           img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
           date:1618554445,
           count:2,
           benefit:97,
           condition:'finish',
        },{
           id:4,
           title:'磷酸铁锂电池',
           desc:'鹅鹅鹅，曲项向天歌，白毛浮绿水，红掌拨清波',
           img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
           date:1618554445,
           count:2,
           benefit:100,
           condition:'working',
        },{
          id:5,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:6,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:7,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:8,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        },{
          id:9,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
          }
       ],
        finish:[{
          id:1,
          title:'三元电池',
          desc:'轻轻的，我将离开你，请将眼角的泪拭去',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:298,
          condition:'finish',
        },{
          id:3,
          title:'三元电池',
          desc:'一闪一闪亮晶晶，满天都是小星星，挂在天上发光明，好像好像小眼睛',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:97,
          condition:'finish',
        }],
        working:[{
          id:2,
          title:'磷酸铁锂电池',
          desc:'轻轻的，我将离开你，请将眼角的泪拭去',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:228,
          condition:'working',
        },{
          id:4,
          title:'磷酸铁锂电池',
          desc:'鹅鹅鹅，曲项向天歌，白毛浮绿水，红掌拨清波',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:100,
          condition:'working',
        },{
          id:5,
          title:'磷酸铁锂电池',
          desc:'春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少',
          img:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          date:1618554445,
          count:2,
          benefit:28,
          condition:'working',
        }]
      },
      
    }
  },
   filters:{
    showDate(value){
      const date=new Date(value*1000)
      return formaDate(date,'yyyy/MM/dd hh:mm:ss')
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
#order{
  display: flex;
  justify-content: center;
}
.login{
  position: fixed;
  top:60px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: -999;
}
.img{
  width: 100%;
}
.order-container{
  width: 100%;
  display: flex;
}
.right{
  margin-left: 210px;
  background-color: rgb(255, 255, 255,.8);
  width: 100%;
  color: #fff;
}
.tabs{
  height: 100%;
  overflow: hidden;
}
</style>