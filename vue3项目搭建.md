## 创建vue3项目

1.初始化项目
`npm init -y`
2.局部安装vuecli脚手架 全局安装加-g
`npm/cnpm i -D @vue/cli`

### 切换vuecli版本 npx vue -V查看

`npm/cnpm i -D @vue/cli@版本号`
3.创建vue项目 命令行模式   ui 界面
`npx vue create 项目名`
`npx ui`

***

## vite创建

```
//创建工程
npm init vite -app 项目名称
//且换工程目录
cd 项目文件名
//安装项目依赖
npm install --registry=https://registry.npm.taobao.org
//运行
npm run dev
```

<br/>

***

<br/>

<br/>

### 配置自动打开浏览器  

-vue.config,js文件下设置devserver open: true;

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
     open: true,
     host: '112.27.203.71',
    //  lintOnSave: false, //关闭语法检查
    

  }
  
})
```

***

## mian.js 文件配置

```
//导入createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 导入ElementPlus 和样式 默认为英文导入中文包
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
//导入axios挂载到原型对象上全局使用
import axios from 'axios'

//导入路由配置文件
import router from './router'
// 引入图标文件
// import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)

//axios挂载到原型对象使用
app.config.globalProperties.$https = axios

//将路由挂载到app中使用 ElementPlus, 中文

app.use(router).use(ElementPlus, {locale}).mount('#app')

```