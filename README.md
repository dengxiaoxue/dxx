# dxx

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## note
### 说明
本项目使用cli4创建
后端采用node.js，使用koa

### 踩坑
#### 记得加波浪号~
```
background-image: url('~assets/img/login.jpg');
```

#### 跨域
后端：
下载并导入koa2-cors
```
npm install koa2-cors //下载
const cors = require('koa2-cors');  //导入
```
在**所有请求前**设置跨域
```
app.use(cors({
    origin: function(ctx) { //设置允许来自指定域名请求
        if (ctx.url === '/test') {
            return '*'; // 允许来自所有域名请求
        }
        return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
```
#### 登录
1. 发送数据，返回结果
2. 将结果提交到mutation，保存到本地与state里

#### state里的数据刷新了就无了，所以需保存到本地一份

#### vuex state中的this.$state.XXX和data的this.XXX区别
this.$state.XXX赋值给data，当state改变时，data并不会改变，data只是一个简单的赋值操作，若要监听state的改变，可以使用computed或者使用watch监听
1. 使用computed属性去获取state中的数据
```
computed: {
  userInfo(){
   return this.$store.state.userInfo;
  }
}
```
2. 使用watch监听state中的数据
```
watch: {
  "this.$store.state.userInfo"() {
     this.userInfo = this.$store.getters.getUserInfo; 
    //按照规范在这里应该去使用getters来获取数据
   }
 }
```
#### 登录完成
1.通过提交到vuex里，将token本地保存一份，state里保存一份
```
login(state, payload) {
            //获取window.sessionStorage.getItem('user')
            window.sessionStorage.setItem('user', JSON.stringify(payload))
            state.logined = true
            state.user.id = payload.id
            state.user.name = payload.name
            state.user.token = payload.token
        },
```
2.每次获取的时候通过vuex的getters获取：
  判断state里是否有token，没有就从本地取出赋值给state
  ```
getToken(state) {
            if (!state.user.token) {
                let user = JSON.parse(sessionStorage.getItem('user'))
                if (user) {
                    state.user.token = user.token
                } else {
                    return false
                }
            }
            return state.user.token
        }
  ```