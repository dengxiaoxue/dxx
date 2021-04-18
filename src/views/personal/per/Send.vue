<template>
    <tabs :labels="labels">
      <div slot="tabs">
        <list>
          <list-item v-for="(item,index) in sends" :key="index">
            <div slot="img"><img :src="item.img" alt=""></div>
            <div slot="title">{{item.title}}</div>
            <div slot="desc">{{item.desc}}</div>
            <div slot="date">{{item.date|showDate}}</div>
            <span slot="price">￥{{item.benefit}}</span>
            <div slot="opt">
              <el-button type="success" plain>编辑</el-button>
              <el-button type="danger" plain>删除</el-button>
            </div>
          </list-item>
        </list>
      </div>
    </tabs>
</template>
<script>
import Tabs from 'components/tabs/Tabs.vue'
import List from 'components/list/List.vue'
import ListItem from 'components/list/ListItem.vue'

import {formaDate} from 'common/utils.js'
export default {
  components: { Tabs, List, ListItem},
  name:"Send",
  data(){
    return{
      labels:['我发布的','测试'],
      sends:[{
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
    }
  },
  filters:{
    showDate(value){
      const date=new Date(value*1000)
      return formaDate(date,'yyyy/MM/dd hh:mm:ss')
    }
  },
}
</script>
<style scoped>

</style>