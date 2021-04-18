import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false //构建的时候的一些提示信息

Vue.use(ElementUI)

//发射事件：this.$bus.$emit('login',titles[1]) navbar组件里
//监听navbar的点击，切换登录组件
//发射到login组件里切换标题
Vue.prototype.$bus = new Vue() //vue实例可以作为事件总线 

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')