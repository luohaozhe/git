# ES6语法

## let关键字

```
1.申明变量与赋值
eg：let a = 100
2.特性:不能重复申明
3.作用域（let：块级作用域在代码块里面有效）
4.不影响作用域链
```

## const 关键字

```
const定义常量(值不发生改变的量)
eg：const name = 'luochaoyue';
1.一定要赋初始值
2.常量的值不能修改
3.块级作用域
4.对于数组和对象元素的修改不算做对常量的修改

```

## 解构赋值

```
ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值
数组解构
eg：
const F4 = ["吴亦凡", "李易峰", "王一博", "陈飞宇"];
      let [wu, li, wang, chen] = F4;
      console.log(wu, li, wang, chen);
对象解构
eg：
// 对象结构
    const F4 ={
        name: '吴亦凡',
        age: '30',
        music: function () {
            console.log('大碗宽面');
        }
    };
    let {name, age, music} = F4;
    console.log(name);
    console.log(age);
    console.log(music);
    music();
```

## 模板字符串

```
eg：
let str `我是一个字符串`
1.内容中可以直接出现换行符
2.字符串拼接
eg：
let iode = `肖战`;
        let msfg = `${iode}是我的偶像`
        console.log(msfg);
3.
```

## 简化对象写法

```
let name = '蔡徐坤'
        let change = function() {
            console.log('唱跳, RAP 篮球')
        }
        
        const ideo = {
             name,
             change,
             imporve() {
                console.log('我们一起打篮球');

             }
        }
        console.log(name, change);
```

## 箭头函数

```
#eg：
 let sun = (a,b)=> {
           return a + b;

      }
      let result = fn(1,2)
      console.log(result);
1.this是静态的(this始终指向函数声明时所在作用域下this的值)
 eg：
 //普通函数
    let getname = function () {
          console.log(this.name);
    };
    //箭头函数
    let getname2 = () => {
        console.log(this.name);
    }
    // 设置window对象的name属性
    window.name = '罗超越';
    //设置对象的name属性
    const school = {
        name: '洛昊哲'
    }
    // 直接调用
    // getname();
    // getname2();
    //  call 调用
    getname.call(school);
    getname2.call(school);
  
  2.不能作为构造函数实例化对象
  eg：
    let person = (name, age) => {
        this.name = name;
        this.age = age;

    } 
    let me = new person('xaio',30);
    console.log(me)
    
3.不能使用arguments变量

4.箭头函数适合于this无关的回调 如定时器，数组的方法回调
不适合与this有关的回调如 点击事件回调 对象的方法
```

## 允许给函数参数赋值初始值

```
 let sun = (a = 1,b = 2) =>{
             return a + b;
        }
        let result = sun();
        console.log(result);
```

## rest参数

```
ES6 引入rest参数用函数的实参，用来代替argumnet
 //返回对象
       function date() {
       console.log(arguments);
       }
       date('zhangbaizhi', 'lingzujxian', 'zhanaas');

  //返回数组  可调用数组方法
      function date(...args){
        console.log(args);   //filte some every map 
    }
       date('冰冰','白芷','傲娇');
       
注意: rest参数必须放到参数的最后

```

## 扩展运算符

```
[...]
const colors = ['red', 'blue', 'black', 'pink'];
    const andomon = ['你的名字', '天气之子', '千与千寻', '龙猫'];
    const hebin =colors.concat(andomon);
    console.log(hebin);
    //扩展运算符的使用 
    // 1.数组的合并
    const hebins = [...colors, ...andomon];
    console.log('hebins');
    //2.数组的克隆
    const an = [...andomon];
    console.log(an);
    // 将伪数组转化为真正的数组
  const divs = document.querySelectorAll('div')
  console.log(divs);
  const divss = [...divs];
  console.log(divss);
```

## symbol

```
ES6引入的一种新的原始数据类型 表示独一无二的值
创建
let s1 = Symbol();
1.值是唯一的---用来解决命名冲突的问题
2.值不能与其他数据进行运算
3.定义的对象属性不能用for....in遍历循环但可以使用Reflect.ownKEys
来获取对象的所用键名

 //创建函数
        let s1 = Symbol();
        console.log(s1, typeof s1);
        let s2 = Symbol('罗超越');
        let s3 = Symbol('罗超越');
       console.log(s2 === s3);
       //创建对象
       let s4 = Symbol.for('罗超越')
       let s5 = Symbol.for('罗超越')

       console.log(s4 === s5);
4.使用(向对象添加属性和方法)
eg：
 let youxi = {
        name: '狼人杀',
        [Symbol('say')]: function () {
            console.log('我可以说话');
        },
        [Symbol('zibao')]: function() {
            console.log('我可以自爆');
        }
      }
        console.log(youxi);
5.Symbol内置值
class person{
   satatic[Symbol.hasInstance(){
   console.log('我被用来检测类型了')];2
}
```

## 数据类型(记忆)

```
USONB   you are so niubility
U  undefined
S  string Symbol
O 　object
N　number
B boolean

```

## 迭代器

```
（Iterator）是一种接口,为不同的数据结构提供统一的访问机制

任何数据结构只要部署iterator接口(对象里面的一个属性)，就可以完成遍历操作
1.新的遍历命令 for ...of 循环
原生具备iterator接口的数据可使用for....of(遍历)
Array
Arguments
Set
Map
String
TypedArray
NodeLIst
```

## 自定义遍历数据

## 生成器

```
//模拟数据 用户数据 => 订单数据 =>商品数据 依次一秒后输出
        function getUser() {
             setTimeout(()=> {
                let data = '用户数据';
                //调用next() 方法并将data传入
                iterator.next(data);
             } ,1000);
        }

        function getOrder() {
            setTimeout(() => {
                let data  = '订单数据';
                iterator.next(data);
            }, 1000);
        }

        function getGoods() {
            setTimeout(() => {
                let data = '商品数据';
                iterator.next(data);
            }, 1000);
        }

        function * gen () {
          let user = yield getUser();
          console.log(user);
          let order =  yield getOrder();
          console.log(order);
           let goos = yield getGoods()
           console.log(goos);
        }

        // 调用生成器函数
        let iterator = gen();
        iterator.next();  //运行第一段代码

```

## Promise

```
Promise是ES6引入的异步编程的新解决方案
语法上它是一个构造函数
用来封装异步操作并可以获取其成功或失败的结果
eg：
 let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code"（可能需要一些时间）
    setTimeout(() => {
    let data = '数据库中的用户数据';  
    // console.log(data); 
    myResolve(data);
    }, 1000);
    setTimeout(() => {
    let err = '数据出错了';
    // console.log(err);
    myReject(err);
    },1000);
});

// "Consuming Code" （必须等待一个兑现的承诺）
myPromise.then(
  function(value) { console.log(value);},
  function(error) { console.log(error);}
);

2.读取文件
eg：
//引入fs规则
const fs = require('fs');

//调用方法读取文件
fs.readFile('./resuorces/suiji.md',(err,data) => {
    //如果失败则抛出错误
    if(err) throw err;
    //如果没有出错则输出这个内容
    console.log(data.toString());
});

```

## 使用Promise封装AJAX请求

```
// 使用Promise封装AJAx请求
        //创建promise对象
        const p = new Promise((resolve, reject) => {
        
             // 创建对象AJAX请求对象
        const xhr = new XMLHttpRequest();
        //初始化
        xhr.open("GET", 'https://api.apiopen/getJoke');
        //发请求
        xhr.send();
        //绑定事件 回调函数
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status  >= 200 && xhr.status > 300){
                    resolve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }       
        }); 
        // 指定成功失败的回调
        p.then(function(value){
            console.log(value);
        },function(reason){
            console.error(reason);
        });
```

## Promise.prototype.then方法

```
// 创建Promise对象
        const P = new Promise ((resolve, reject) => {
            setTimeout(() => {
                //成功的数据
                resolve('成功的数据');
                
            },1000);
            setTimeout(() => {
               //失败的数据
               reject('失败的数据');
            },2000)
        });
           //通过p.then()方法处理回调
        //    P.then(function(value) {
        //          console.log(value);
        //    },function(reason) {
        //          console.error(reason);
        //    });
        //   1. p.then() 的返回结果也是一个Promise 他的状态结果由回调函数里面执行结果决定
        //   2.如果回调函数中返回的结果 为非Promise类型的属性， 状态为成功 放回值为对象中成功的值
        //   3.抛出错误 状态也为reject 值为抛出错误里面的值
        //   所以Promise是可以链式调用的
        // const result = P.then(value => {
        //     console.log(value);
        //     //2.非Promise的情况
        //     // return 'i love you'
        //     //返回的值是一个Promise值
        //     // return new Promise((resolve, reject) => {
        //     //     resolve('ok'); //决定外面Promise的状态为resolve 值为ok
        //     // });
        //     // 3.抛出错误
        //     // throw new Error('出错啦!!!')

        // }, reason => {
        //     console.error(reason);
        // });


        // 链式调用 失败回调可省略
        p.then(value => {

        }).then(value => {

        });
        console.log(result);
```

## promise 链式调用

```
//基础方法  实现多个文件读取合并输出
//    fs.readFile('./resuorces/剑来.md', (err, data1) => {
//       fs.readFile('./resuorces/烽火戏诸侯.md', (err, data2) => {
//          fs.readFile('./resuorces/大奉打更人.md', (err, data3) => {
//             let result = data1 + '\r\n' + data2 +'\r\n' + data3;
//              console.log(result);
//           });
//       });
//  });

//使用 promise 实现
const p = new Promise((resolve, reject) => {
   fs.readFile("./resuorces/剑来.md", (err, data) => {
      resolve(data);
   });
});

p.then(value => {
   return new Promise((resolve,reject) => {

 
    fs.readFile("./resuorces/大奉打更人.md", (err,data) => {
        resolve([value, data]);
        
    });
//    console.log(value.toString());
});
}).then(value => {
   return new Promise((resolve,reject) => {

  
   fs.readFile("./resuorces/烽火戏诸侯.md",(err,data) => {
      value.push(data);
      resolve(value);
   })
});
}).then(value => {
   console.log(value.join('\r\n'));
})

```

## promise catch() 方法

```
const p  = new  Promise((resolve, reject) => {
            //定时器
            setTimeout(() => {
                //设置p对象的状态为失败 并设置失败的值
                 reject('出错啦！！！');
            }, 1000);
        });
        //p.then()方法
        p.then(value => {

        }, reason => {
            console.error(reason);
        });

        // p.catch() 方法
        p.catch(function(reason){
            console.warn(reason);
        })
```

## Set 数据结构

```
set(集合)它类似于数组，但成员的值都是唯一的
实现了iteration 可使用扩展运算符[...] 和 for of 遍历
1.size  返回结合的元素个数
2.add 增加一个新元素 返回当前集合
3.delete 删除元素 返回boolean值
4.has 检测集合中是否包含某个元素  返回boolean值
5.clear 清空内容
eg：
 <!-- 声明一个Set()  -->
    <script>
      let s = new Set();
      //参数 --可迭代数据 --一般为数组 不可重複 自動去重
      let s2 = new Set(["秀倩", "杨千幻", "秀新年", "秀倩"]);
      //添加集合元素
      s2.add('威亞是你');
      //刪除元素
       s2.delete('秀倩');
    
     
      console.log(s, typeof s);
      console.log(s2);
      //元素個數
      console.log(s2.size);
    //has
    console.log(s2.has('秀新年'));
    //clear
    
     //for of 遍歷
    for(let v of s2){
        console.log(v);
    }
    
    s2.clear();
    console.log(s2);
```

## Set实践

```
let arr = [12,34,1,4123,523,65,34,1,34,523];
        //數組去重
        let s = [...new Set(arr)];
        console.log(s);
        //交集
        let arr2 = [12, 34, 1, 423,542356346,];
        let result = [...new Set(arr)].filter(item => {
            let s2 = new Set(arr2);
            if (s2.has(item)) {
                return true;
            }else{
                return false;
            }
        });
        console.log(result);
        //並集
        let union = [...new Set([...arr, ...arr2])];
        console.log(union);
        //差集
        let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
       console.log(diff);
```

## Map

```
Map数据结构类似于对象 也是键值对的集合。
iterator 接口 所以可以使用 [...] 拓展运算符 和 [for...of...]进行遍历
size：返回元素个数
set 添加一个新元素 返回当前的Map
get 返回键名对象的键值
has 检测Map中是否包含某个元素 放回boolean值
clear 清空集合 返回undifing 
eg： 
//声明 Map
          let m = new Map();
          
          //添加元素
          m.set('name','罗超越');
          m.set('change', function() {
            console.log('五毛恶意该比啊');
          });
          let key = {
            school: '合肥八中'
          };
          m.set(key,['北','南','东','西']);

          //size
        console.log(m.size);
        //delete
        m.delete('key');
        //获取get
        console.log(m.get(key));
        //m.clear();
        m.clear();
        //遍历
        for(let v of m) {
            console.log(v);
        }
        console.log(m);
```

## class

```
//创建函数
        // function Phone (brand , price) {
        //     //初始化
        //     this.brand = brand;
        //     this.price = price;
        // };

        // // 添加方法
        // Phone.prototype.call = function () {
        //     console.log('我可以打电话');
        // }


        // //实例化对象
        // let HUAWEI = new Phone('华为', '5999');
        //  HUAWEI.call();
        // console.log(HUAWEI);
    
       //class实现
       class Phone {
        // 构造方法名字不能修改
        constructor(brand ,price){
            this.brand = brand;
            this.price = price;
        }
        //方法必须使用该语法 ，不能使用ES5的完整形式
        call() {
            console.log("我可以电话");
        } 
       }
       let onePlus = new Phone("1+", 1999);
       console.log(onePlus);
```

## class静态成员

```
  class Phone {
        //对于static 标注的属性和方法属于class类不属于实例对象
        static name = '手机';
        static change () {
            console.log("我可以改变世界");
        }
       }
       let noKia = new Phone ();
       //返回undefine
       console.log(noKia.name);
      console.log(Phone.name); 
```

## 类继承

```
  //创建父类
         class Phone {
            //构造方法
            constructor(brand, price) {
                this.brand = brand;
                this.price = price;

            }
            // 父类的成员属性
            call (){
                console.log("我可以打电话");
            }
         }
        //    子类创建与 extends继承
         class SmartPone extends Phone{
                //  构造方法
                constructor (brand, price, color, size) {
                    //super继承父类   类似 Phone.call(this, brand, price)
                    super(brand, price);  
                    this.color = color;
                    this.size = size;
                } 
                //添加子类方法
                photo () {
                    console.log('拍照');
               }
               playGame () {
                console.log('玩游戏');
               }
               //可重写与父类同名方法，但子类不可以调用父类同名方法方法
               call() {
                console.log("我可以进行视频通话");
               }
         }

         const xiaomi = new SmartPone('小米', 3999, '红色', '5.51ncr');
         console.log(xiaomi.call());
         console.log(xiaomi);
```

## class 里面的get和set

```
//get 和 set
        class Phone {
            get price () {
                console.log("价格属性被读取了");
                return 'i love you';
            }

            set price(NewVal) {
                console.log("价格属性被修改了");
            }
        }
        //实例化对象
        let s = new Phone();
        // console.log(s.price);
        s.price = 'free';
```

## 数值拓展

```
// 1.二进制和八进制
    // 2.Number.isFinite  校验一个数值是否为有限数
    //  console.log(Number.isFinite(100));
    //  console.log(number.isFinite(100/0));
    //  console.log(number.isFinite(Infinity));
    //3.Number.isNaN用来检测数字是否为NaN
    console.log(Number.isNaN(123));
    
    //4. Number.parseInt Number.parFloat 字符串转整数
    console.log(Number.parseInt('52143252love'));
    console.log(Number.parseFloat('3.1415926你好'));
    
    //5.Number.isInteger 判读一个数值是否为一个整数

    console.log(Number.isInteger(5));
    console.log(Number.isInteger(5.5));

    //6.Math.trunc 将数字的小数部分抹掉
    console.log(Math.trunc(34234.5345345));
    //7.Math.sign 判断一个数到底为正数，负数，还是零
    console.log(Math.sign(0));
```

## 对象方法扩展

```
// Object.js 判断两个值是否完全相等
    // console.log(Object.is(NaN, NaN));
    //Object.assign 对象的合并
    //有相同的参数会进行覆盖
    //不同的参数添加
    const config1 = {
        host: 'localhost',
        port: 8080,
        name: 'root',
        pass: 'root'
    };
    const config2 = {
        host: 'http://luohaozhe',
        port: 3030,
        name: 'luo hao zhe',
        pass: 'luo@123'
    }
    console.log(Object.assign(config1, config2));
     //Object.setPrototypeOf 设置原型对象 
    const school = {
        name: '蔡徐坤'
    }
    const cities = {
       xiaoqu: ['北京', '上海', '深圳']
    }
    Object.setPrototypeOf(school, cities);
    console.log(Object.getPrototypeOf(school));
    console.log(school);

```

## 模块化

```
优势：
1.防止命名冲突
2.代码复用
3.高维护性
```

## 暴露汇总

```

1，分别暴露
export let job = '前端开发工程师';

2.统一暴露
let job = '前端开发工程师';
function jobs () {
    console.log("我们可以帮你找到好工作");
}
export {job, jobs};

3.默认暴露
export default {
    job: '前端开发工程师',
    Change: function () {
        console.log('我们可以帮助你');
    }
}
```

## 引入汇总

```
//1.通用方式
        //  import * as 模块化 from './模块化.js';
// 2.解构赋值 引入统一暴露
        // import {work, jobs} from "./模块化.js"
        // console.log(work);
        // console.log(jobs());
//2.1解构赋值引入默认暴露
        // import {default as m3} from "./模块化.js"
        //  console.log(m3);
           
//3 简便模式只适用于默认暴露
        import m3 from './模块化.js';
        console.log(m3);
```

## ES7新特性  includes ** 幂运算

```
includes 方法判读数组是否存在对应值  返回布尔值
eg：
const idor = ["蔡徐坤","王一博","肖战","陈飞宇","李易峰"];
        console.log(idor.includes('王一博'));
        console.log(idor.includes('吴亦凡'));
** 幂运算  
        console.log(2 ** 10);  //1024    

```

## ES8 新特性

### async

```
//async函数  1.返回结果由return决定是一个promise对象
   async function fn() {
          //返回一个字符串
           return '蔡徐坤';
          //只要返回的结果不是一个Promise类型的对象则该函数的结果就是一个成功Promise对象
          //返回一个undifind
          return; //输出为成功的Promise
          //抛出一个错误  
          throw new Error('出错了！！'); //输出为失败的Promise
          //返回一个Promise对象
          return new Promise((resolve, reject) => {
                resolve('成功的回调'); //输出一个成功的Promise对象 值为'成功的回调'
                reject('失败的回调');  //输出一个成功的Promise对象 值为'失败的回调'
          });
    }
    const result = fn();
    console.log(result);  //输出一个promise对象
     //调用then方法
    result.then(value => {
         console.log(value);
    },
    reason => {
        console.log(reason);
    });
```

### await

```
1.await 必须写在async函数中
2.wait右侧的表达式一般为Promise对象
3.await 返回的是Promise成功的值
4.await 的Promise失败了就会抛出异常
eg：
    //创建Promise
        const p = new Promise((resolve, reject) => {
            // resolve('成功');
            reject('失败');
        })
        async function main () {
            //使用 try catch捕捉错误
            try {
                let result = await p;
                console.log(result);
            }catch(e){
                  console.log(e);
            }     
        }
        //调用函数
        main();
```

## async和await结合读取文件案例

```
//引入fs模块

const fs = require("fs");

//封装读取文件模块

function readDgr() {
  return new Promise((resolve, reject) => {
    //读取文件 fs.readFile() 传入 文件路径  和function (data,err){}
    fs.readFile("./resuorces/大奉打更人.md", (err, data) => {
      //如果失败
      if (err) reject(err);
      //如果读取失败
      resolve(data);
    });
  });
}

function readJl() {
  return new Promise((resolve, reject) => {
    //读取文件
    fs.readFile("./resuorces/剑来.md", (err, data) => {
      //如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    });
  });
}

function readsuiji() {
  return new Promise((resolve, reject) => {
    fs.readFile("./resuorces/suiji.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

//  创建async函数
async function main() {
  // 获取打更人
  let Dag = await readDgr();
  //  获取剑来
  let JL = await readJl();
  // 获取随机
  let Sui = await readsuiji();

  // 输出
  console.log(Dag.toString());
  console.log(JL.toString());
  console.log(Sui.toString());
}
main();

```

## async+await发送Ajax请求

```
 // 封装函数  发送AJAX请求  返回的结果是Promise对象
      function sendAjax() {
        return new Promise((resolve, reject) => {
          // 定义对象
          const x = new XMLHttpRequest();
          // 初始化
          x.open("GET", "https://imgapi.cn/api.php?zd=zsy&fl=&gs=json");
          //发请求
          x.send();
          //    事件绑定
          x.onreadystatechange = function () {
            if (x.readyState === 4) {
              if (x.status >= 200 && x.status < 300) {
                resolve(x.response);
              } else {
                reject(x.status);
              }
            }
          };
        });
      }
    //   测试
    // sendAjax().then(value => {
    //            console.log(value);
    // },
    // reason => {
    //       console.log(reason);
    // })
    
    // async 和await 测试
    async function main() {
        // 发送Ajax请求
      
      try{
        let result =  await sendAJAX();
        console.log(result);
      }catch(e){
        console.log(e);
          
      }
      
    }
    main();
```

## ES8对象方法拓展

```
 // 声明对象
      const school = {
        name: "合肥八中",
        city: ["北京", "上海", "广州", "深圳"],
        xueke: ["前端", "java", "大数据", "运维"],
      };

1.获取对象所有的键
      console.log(Object.keys(school));
2.获取所有的值
      console.log(Object.values(school));
 3.entries返回一个数据 每一个成员都是一个数组
      // 配合Map使用
      // console.log(Object.entries(school));
      const m = new Map(Object.entries(school));
      console.log(m);
4.对象属性的描述对象  getOwnPropertyDescriptors
      consol
```

## ES9新特性

```
//ES9 为对象引入了Rest参数 和 spread扩展运算符
       function connect ({host, port, ...user}) {

        console.log(host);
        console.log(port);
        console.log(user);
       }

       connect({
        host: '127.0.0.1',
        port: 8080,
        username: 'admin',
        password: 'admin',
        type: 'admin'
       });
      //扩展运算符
      const s = {
        q: '铁砂掌'
      }
      const w = {
        w: '金钟罩'
      }
      const e = {
        e: '铁布衫'
      }
      const r = {
        r: '双节棍'
      }
      let mabaoguo = {...s, ...w, ...e, ...r};
      console.log(mabaoguo);
```

## ES9正则拓展

```
1.正则命名分组
 
  // 声明字符串
        // let str = '<a href="http://www.baidu.com">百度</a>'

        //之前的方法  --提取Url 和 标签文本

        // const reg = /<a href="(.*)">(.*)<\/a>/;

        // 执行
        // const result = reg.exec(str);

        // console.log(result[1]);
        // console.log(result[2]);

       //方法二  
        let str = '<a href="http://www.baidu.com">百度</a>';
        const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
        
            const result = reg.exec(str);
            console.log(result);
2.反向断言

```

## 动态import

```
btn.onclick = function () {
    //   动态import
    import('模块文件地址').then(module => {
        // 调用函数
        module.函数名();
    })
}
```

## globalThis

```
始终指向全局对象
```