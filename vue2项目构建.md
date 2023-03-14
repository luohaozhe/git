## 创建vue2项目

1.初始化项目
`npm init -y`
2.局部安装vuecli脚手架 全局安装加-g
`npm/cnpm i -D @vue/cli`
### 切换vuecli版本 npx —V查看
`npm/cnpm i -D @vue/cli@版本号`
3.创建vue项目 命令行模式   ui 界面
`npx vue create 项目名`
`npx ui`
### 配置自动打开浏览器  
-vue.config,js文件下设置devserver open: true;
### 安装elementui 查看官网 在main.js中引入 导入样式 vue.use 使用
---

### 安装element-ui 按需引入借助 babel-plugin-component，

-`npm install babel-plugin-component -D`
-配置babel 
-在main中按需引入相应的element-ui组件
-新建element文件模块在里面进行引入

### css预处理器sass和样式重置 https://www.sass.hk/css2sass/

-安装sass 
-`npm i sass-loader node-sass --registry=https"//registry.npm.taobao.org`
-安装less
`npm i less-loader less --registry=https"//registry.npm.taobao.org`
-样式重置 https://meyerweb.com/eric/tools/css/reset/
-在assets文件夹中创建css文件存放reset.css
-在APP.vue style中引入

```
<style lang="scss">
@import url('@/assets/css/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 图标库安装使用 https://fontawesome.com/

-安装
-`npm i -D font-awesome `
-在main中引入样式文件

```
// 引入图标文件
import './font-awesome/css/font-awesome.min.css'
```

### 安装axios 和路由

-`npm i axios vue-router`
-导入main 挂载到原型对象 全局使用

```
导入axios和路由挂载到原型对象上全局使用
import axios from 'axios'
vue.prototype.axios = axios
vue.config.productionTip = false //
```

-新建router 文件夹配置路由js文件

```
export default new Routet({
    router: [
        {
            path: '/',
            component: Home
        }
    ],
    // 模式
    mode: 'history'
})

```

### 路由懒加载 在路由挂载时使用箭头函数形式挂载不需要额外导入

### 异步路由懒加载 

```
routes: [
        {
            path: '/home',
            // component: HoMe
            // component: () => import('@/components/HoMe') //路由懒加载
            component: resolve => require(['@/components/HoMe'], resolve) //异步组件懒加载
        },
        
    ],
```

### 登录页面与404页面的制作

### 登录验证简单验证 和 复杂

### 登录表单校验封装

1.在src下新建utils文件夹新建vaildate.js文件
2.对外暴露书写用户名和密码验证函数
3.在对应的组件文件中引入方法模块使用

### 登录token的封装

### 接口地址  https://www.showdoc.com.cn/jinducasey/8309065269806678

### axios 封装

1. src目录下新建 server.js文件配置。对外暴露
2. vue.config文件配置代理跨域
3.在main.js 中导入 挂载到原型对象中 全局使用 
4.在需要使用的组件中导入 使用

### API 请求方法的封装 

1.在src 文件新建api文件夹封装请求方法函数 对外暴露
2.在要使用的组件导入 使用

### 菜单页通过路由渲染

1.在路由中书写要展示的信息 一级二级路由对应一级二级菜单
2.在menu组件中获取路由传递的数据 赋值给menus数组 可通过在路由中添加hidden属性控制路由显示与隐藏。
3.遍历数组，在相应的位置动态绑定展示数据。
4.动态路由展示 在el-menu 上添加router属性 在home.vue 上 el-main中使用路由出口 router-view

### 面包屑

1.在common中新建面包屑组件element 找到模板
2.利用$route.matched在相应位置动态遍历item.name

### 表格数据渲染 数据格式转换

1.在组件中书写element表格模板
2.在api中封装请求方法
3.在组件相应位置发送请求(创建getData（）方法 和tableData[]数组)

### 分页器制作

1.使用element分页模板和方法
2.使用动态绑定数据
3.利用数组slice()方法计算分页数据 实现前端分页

### 数据删除操作

1.在按钮中增加删除事件 del(row) 传递每一条数据信息
2.在api中封装删除学生信息请求方法
3.在学生列表组件调用 
4.删除成功后重新调用getData()刷新数据

### 查询操作

```
//数据查询方法
    find () {
      console.log(this.formInline)
      this.getData(this.formInline);
    },
    //数据重置方法
    reset() {
      console.log(this.formInline)
      this.formInline = {}
      this.getData(this.formInline);
    },
```

### 学生信息列表

### 属性控件 路由分析

1.权限管理和动态路由思路
1.1 根据不同用户登陆上来返回对应的路由权限菜单
1.2 一般可以通过树形控件达到权限的精准控制
1.3 根据不同的角色勾选不同的菜单权限，将菜单数据提交到后端进行保存
1.4 后端保存之后在用户登录的时候就会查询该用户所拥有的菜单数据最终进行动态展示
1.5 动态路由添加使用addRouter方法
2.路由导航守卫

### 项目重构搭建

1. 新建vue自定义项目
2. 安装苏需要的依赖
3. vue.config文件配置迁移 
4. main.js 文件配置迁移
5. 解决引入报错问题
5.1 引入导入的相关文件
5.2 在shims-vue.d.ts文件中进行相应配置
6.assets components文件替换
7.router文件重写
