<template>
  <tabs :labels="labels">
    <div slot="tabs">
      <list>
          <list-item v-for="(item,index) in user" :key="index">
              <div slot="img"><img :src="item.avatar" alt=""></div>
              <div slot="title">{{item.name}}</div>
              <div slot="desc">{{item.content}}</div>
              <div slot="date">{{item.date|showDate}}</div>
              <div slot="opt">
                <el-button type="primary">回复</el-button>
              </div>
          </list-item>
      </list>
    </div>
  </tabs>
</template>
<script>
import {formaDate} from 'common/utils.js'

import Tabs from 'components/tabs/Tabs.vue'
import List from 'components/list/List.vue'
import ListItem from 'components/list/ListItem.vue'

export default {
  components: { Tabs,List,ListItem, },
  name:"Message",
  data(){
    return{
      labels:['我的消息','回复我的'],
      user:[{
        name:'邓小雪',
        content:'鹅鹅鹅，曲项向天歌，白毛浮绿水，红张博墙壁',
        date:'1618554445',
        avatar:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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