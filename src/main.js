import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false //构建的时候的一些提示信息

Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')