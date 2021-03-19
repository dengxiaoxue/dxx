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




