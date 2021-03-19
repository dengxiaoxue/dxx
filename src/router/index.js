import Vue from 'vue'
import Router from 'vue-router'
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
    path: '/home',
    component: Home
}, {
    path: '/login',
    component: Login
}, {
    path: '/order',
    component: Order
}, {
    path: '/personal',
    component: Personal
}, {
    path: '/shop',
    component: Shop
}]


export default new Router({
    routes,
    mode: 'history'
})