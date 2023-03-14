## 学习Vue之前要掌握的JavaScript:基础知识？

### ES6语法规范/ES6模块化

```
1.默认导入与默认导出（一个文件只能使用一次默认导出）
export default
import 别名(随意符合规范) from '文件地址'
2.按需导入和按需导出（一个文件可以使用多次按需导出）
export let a = 'aaa'
export function say() {
console.log('222222222222')
}
import {a, say} from '文件地址'
3.直接导入并执行模块代码
import '文件地址'
```

## 包管理器webpack

```
1.在webpack的配置文件中，初始化如下基本配置：
module.exports =
mode:'development'//mode用来指定构建模式'development开发模式编译速度快
production 为生产模式压缩体积小


2.在package,json
配香文件中的scripts节点下，新增dev脚本如下：
"scripts":
"dev”6”webpack"/∥script节点下的脚本，可以通过npm run执行

在终端中运行npm run dev命令，启动webpack进行项目打包。

3.配置打包的入口与出口文件
const path=require('path')//导入node.js中专门操作路径的模块
module.exports =
entry:path.join(dirname,'./src/index.js'),//打包入口文件的路径
output:
path:path.join(dirname,·./dist'),//输出文件的存放路径
filename:'bundle.js'//输出文件的名称
```

```
原型、原型链
数组常用方法
axios
promise
```