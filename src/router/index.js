import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/vuex'
Vue.use(Router);

//解决重复点击报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {  return originalPush.call(this, location).catch(err => err) }


const Home = () =>
    import ('../views/home/Home.vue')
const Login = () =>
    import ('../views/login/Login.vue')
const Order = () =>
    import ('../views/order/Order.vue')
const Personal = () =>
    import ('../views/personal/Personal.vue')
const Shop = () =>
    import ('../views/shop/Shop.vue')


const routes = [{
        path: '',
        redirect: '/home', //缺省重定向，默认首页
        component: Home
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/order',
        component: Order,
        meta: {
            isLogin: true
        }
    }, {
        path: '/personal',
        component: Personal,
        meta: {
            isLogin: true
        }
    }, {
        path: '/shop',
        component: Shop
    }
]


const router = new Router({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) { //为true则需要权限
        // let user = JSON.parse(sessionStorage.getItem('user'))
        // console.log(store.state.user.token) //刷新就无了

        console.log(store.getters.getToken)
        if (store.getters.getToken) {
            next()
        } else {
            next({
                path: '/login',
                // query: {
                //     redirect: to.fullPath //将该路由path传入login页面，登陆成功后跳转到该页面
                // }
            })
        }
    } else {
        next()
    }
})

export default router