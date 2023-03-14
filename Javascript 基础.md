## 数组方法

### 字符串转换

```

1.toString() 把数组转换为数组值（逗号分隔）的字符串
eg:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); 

2.join() 方法也可将所有数组元素结合为一个字符串.(用*进行分割)
eg：
const fruits = ["Banana", "Orange","Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); 

3.自动toString()当在在页面展示时结果与上面一致 自动转换
const fruits = ["Banana", "Orange","Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```

### 删除数组元素

```
1.pop() 方法从数组中删除最后一个元素：
// 从 fruits 删除最后一个元素（"Mango"）
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  
console.log(fruits);

2.shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。
//从 fruits 删除第一个元素 "Banana"
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();   

3.delete()方法 被删除元素是一个空值empty 不建议使用
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);

4.使用 splice() 来删除元素  splice() 在数组中不留“空洞”的情况下移除元素：
第一个参数（0）定义新元素应该被添加（接入）的位置。
第二个参数（1）定义应该删除多个元素。
其余参数被省略。没有新元素将被添加。
// splice() 方法返回一个包含已删除项的数组：
    const dynasty = ["隋朝","唐朝","宋朝","元朝","明朝","清朝"];
    // dynasty.splice(2, 0, "北宋", "南宋");
    // console.log(dynasty);
//使用splice()删除数组
//删除第一个元素
// dynasty.splice(0, 1);
// 规律: 删除第n个元素   splice(n-1 ,n)
//删除第二个元素 
dynasty.splice(1, 1);
console.log(dynasty);


```

### 添加数组元素

```
1.push() 方法（在数组结尾处）向数组添加一个新的元素：
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  
console.log(fruits);

2.unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift();  
console.log(fruits);

3. splice() 方法可用于向数组添加新项：
第一个参数（3）定义了应添加新元素的位置（拼接）。

第二个参数（0）定义应删除多少元素。

其余参数（“高一”，“”）定义要添加的新元素。

splice() 方法返回一个包含已删除项的数组：

const Class= ["初一","初二","初三","高二","高三",];
Class.splice(3, 0, "高一");
console.log(Class);
```

## 修改数组元素

```
1.通过索引号来修改数组的值
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";  

2.
```

## 数组拼接

```
1.splice() 方法可用于向数组添加新项：

2.concat() 方法通过合并（连接）现有数组来创建一个新数组：
concat() 方法不会更改现有数组。它总是返回一个新数组。
concat() 方法可以使用任意数量的数组参数：

合并多个数组
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys, '要连接的数组名');   // 连接 myGirls 和 myBoys

//concat() 合并连接多个数组，中间用,分割
const Food =["热干面","安徽板面","重庆小面","过桥米线","油泼面"];
const citys = ["武汉","安徽","重庆","云南","河南"];
const idol = ["吴亦凡","李易峰","陈飞宇","王一博","肖战"];
let Pasta =  Food.concat(citys, idol);
console.log(Pasta);
concat() 方法也可以将值作为参数：
let Pasta =  Food.concat(["吴亦凡","李易峰","陈飞宇","王一博","肖战"]);

3.
```

## 剪切数组

```
1.slice() 方法用数组的某个片段切出新数组 slice()不会改变源数组的值
eg:
从索引值1 开始剪切数组
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); 
也可以传两个参数
slice(3,7)
从索引值为3开始 7结束新数组不包含7的值
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 7);
console.log(citrus);

```

## 数组排序

```
1. sort() 方法是最强大的数组方法之一。
sort() 方法以字母顺序对数组进行排序：
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

2.reverse() 方法反转数组中的元素。 您可以使用它以降序对数组进行排序：
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

3.数字排序
默认地，sort() 函数按照字符串顺序对值进行排序。

该函数很适合字符串（"Apple" 会排在 "Banana" 之前）。

不过，如果数字按照字符串来排序，则 "25" 大于 "100"，因为 "2" 大于 "1"。

正因如此，sort() 方法在对数值排序时会产生不正确的结果。

我们通过一个比值函数来修正此问题：
从小到大
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); 

从大到小
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a}); 

4.比值函数 比较函数的目的是定义另一种排序顺序。
比较函数应该返回一个负，零或正值，这取决于参数：
eg：
当比较 40 和 100 时，sort() 方法会调用比较函数 function(40,100)。

该函数计算 40-100，然后返回 -60（负值）。

排序函数将把 40 排序为比 100 更低的值。

5.排序对象数组
eg：
const cars = [
        {type: 'Volvo', year: 2016},
        {type: 'Saab', year: 2001},
        {type: 'BWM', year: 2010}
     ];

     displayCars();

     function MyFunction () {cars.sort(function (a,b) {
      return a.year - b.year
      
      });
      displayCars();
        } 
     function displayCars () {
        document.getElementById('result').innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year;
    }
```

## 查找最高（或最低）的数组值

```
1.sort（）方法
eg：
const point = [1, 10, 46, 30, 79, 50, 2];
        // 升序 最小值：[0] 最大值 [length -1]
        point.sort(function(a,b){ return (a - b)} );
        document.getElementById('result').innerHTML = point;
        document.getElementById('max').innerHTML = point[point.length - 1];
        document.getElementById('min').innerHTML = point[0];
        
        
const point = [1, 10, 46, 30, 79, 50, 2];
        // 降序 最大值：[0] 最小值 [length -1]
        point.sort(function(a,b){ return (a - b)} );
        document.getElementById('result').innerHTML = point;
        document.getElementById('min').innerHTML = point[point.length - 1];
        document.getElementById('max').innerHTML = point[0];
2.使用 Math.max.apply 来查找数组中的最高值： Math.min.apply 来查找数组中的最低值：
eg：

 const point = [1, 10, 46, 30, 79, 50, 2];
        document.getElementById('demo').innerHTML = MyArrayMax(point);
        function MyArrayMax(arr) {
            return Math.max.apply(null, arr)
        };
        
        function MyArrayMin(arr) {
            return Math.min.apply(null, arr)
        };
        document.getElementById('demos').innerHTML = MyArrayMin(point);

3.自制方法
此函数遍历数组，用找到的最高值与每个值进行比较：
eg：
const point = [1, 10, 46, 30, 79, 50, 2];
       function MyArrayMax (arr) {
          let len = arr.length
          let max = -Infinity;
          while (len--) {
            if(arr[len] > max) {
                max = arr[len];
            }
          }
          return max;
       } 
      
       document.getElementById('demo').innerHTML = MyArrayMax(point);   

       function MyArrayMin (arr) {
          let len = arr.length
          let min = Infinity;
          while (len--) {
            if(arr[len] < min) {
                min = arr[len];
            }
          }
          return min;
       } 
      
       document.getElementById('demos').innerHTML = MyArrayMin(point);   
    
```

## 数组迭代

```
数组迭代方法对每个数组项进行操作。
1.forEach() 方法为每个数组元素调用一次函数（回调函数）。
：该函数接受 3 个参数：

项目值
项目索引
数组本身
  let txt = '';
        const num = [12,334,32134,4234,435,53535];
        num.forEach(Function);
        document.getElementById('result').innerHTML = txt;
        
        function Function (value, index, array) {
                txt = txt + value + "<br>"
        }

2.Array.map()
map() 方法通过对每个数组元素执行函数来创建新数组。
map() 方法不会对没有值的数组元素执行函数。
map() 方法不会更改原始数组。
eg：
const num = [12,334,32134,4234,435,53535];
        let newNum = num.map(MyFunction);

       function  MyFunction (value, index, array) {
                return value * 2;
        }
        document.getElementById('result').innerHTML = newNum;

3.Array.filter() 创建一个通过测试的元素组成的新数组
eg：
返回值大于46547的新数组
    const figures = [1231,4132,41254123,23154235,235634,23554];
    let NewFigures = figures.filter(MyFunction);
    function MyFunction (value, index, array) {
            return value > 46547;
    }
    document.getElementById('result').innerHTML = NewFigures;
    
4.Array.reduce()
reduce() 方法在每个数组元素上运行函数，以生成（减少它）单个值。
reduce() 方法在数组中从左到右工作。
reduce() 方法不会减少原始数组。
函数接受4个参数
总数（初始值/先前返回的值）
项目值
项目索引
数组本身
eg:
//数组求和
const num = [48364923,432423,4235,56346,7654,754,7547,54754,7745,754];
    let sum = num.reduce(MyFunction, 100);//可设置初始值
    function MyFunction (total, value, index, array)  {
           return total + value;
    };
    document.getElementById('result').innerHTML = sum;
    
5.Array.reduceRight()
reduceRight() 方法在每个数组元素上运行函数，以生成（减少它）单个值。
reduceRight() 方法在数组中从右到左工作。
reduceRight() 方法不会减少原始数组。
// reduceRight() 
    //数组值相加
    const num = [48364923,432423,4235,56346];
    let sum = num.reduceRight(MyFunction);
    
    function MyFunction (total, value, index, array) {
        return total + value;
    };
    document.getElementById('result').innerHTML = sum;

6.Array.every()
every() 方法检查所有数组值是否通过测试。
eg：
 //判读数组所有元素是否都大于500 返回布尔值
    const num = [34123,4123,423,423,53,425,345];
    let newNum = num.every(MyFunction);
    function MyFunction (value, index, array) {
          return value > 500
    }
    document.getElementById('result').innerHTML = newNum;
 
7.Array.some() some() 方法检查某些数组值是否通过了测试。 
检查数组中是否有元素大于 500 返回布尔值
     const num = [3213412,423,5634,6,7,856,8967,876,9];
     let Newnum = num.some(MyFunction);
     function MyFunction (value, index, array) {
        return value > 90;

     }
      document.getElementById('result').innerHTML = Newnum;

8.Array.indexOf()方法在数组中搜索元素值并返回其位置。
语法
array.indexOf(item, start)
item	必需。要检索的项目。
start	可选。从哪里开始搜索。负值将从结尾开始的给定位置开始，并搜索到结尾。
如果未找到项目，Array.indexOf() 返回 -1。
如果项目多次出现，则返回第一次出现的位置。
eg：
const num = [3213412,423,423,423,4325,34,63467547,54785];
    let index = num.indexOf(423);
    document.getElementById('result').innerHTML = index;

9.Array.lastIndexOf()与indexOf()方法相似不过是从结尾开始搜索
   const num = [3213412,423,423,423,4925,34,63467547,54785];
    let index = num.lastIndexOf(423);

10.Array.find() 方法返回通过测试函数的第一个数组元素的值。
 const num = [3213412,423,234523,523,563464567547658658,568658,65];
    let first = num.find(MyFunction);
    function MyFunction (value, index, array) {
        return value > 4235;
    }
    document.getElementById('result').innerHTML = first;
    
11. findIndex() 方法返回通过测试函数的第一个数组元素的索引
    const num = [3213412,423,234523,523,56346456];
    let index = num.findIndex(MyFunction);
    function MyFunction (value, index, array) {
        return value > 42523;
    }
    document.getElementById('result').innerHTML = index;
```

## JavaScript日期

```
创建 Date 对象
Date 对象由新的 Date() 构造函数创建。
有 4 种方法创建新的日期对象：
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

eg:
1. 输出当前时间
     let d = new Date();
     document.getElementById('result').innerHTML = d
     toDateString() 方法将日期转换为更易读的格式：
    document.getElementById('result').innerHTML = d.toDateString();
2.日期格式
类型	实例
ISO 日期	"2018-02-19" （国际标准）
短日期	"02/19/2018" 或者 "2018/02/19"
长日期	"Feb 19 2018" 或者 "19 Feb 2019"
完整日期	"Monday February 25 2015"

```

|类型|示例|
|:--:|:--:|
|ISO日期|"2018-02-19" （国际标准）|
|短日期|"02/19/2018" 或者 "2018/02/19"|
|长日期|"Feb 19 2018" 或者 "19 Feb 2019"|
|完整日期|"Monday February 25 2015"|

## 日期输入格式

## 日期获取方法

|方法                |描述|
|:--|:--|
|getDate()        |以数值返回天（1-31）|
|getDay()          |以数值获取周名（0-6）|
|getFullYear()     |获取四位的年（yyyy）|
|getHours()            |获取小时（0-23）|
|getMilliseconds()     |获取毫秒（0-999）|
|getMinutes()            |获取分（0-59）|
|getMonth()        |获取月（0-11）|
|getSeconds()      |获取秒（0-59）|
|getTime()            |获取时间（从 1970 年 1 月 1 日至今）|

```
// getTime() 方法  返回毫秒数
    let d = new Date();
    document.getElementById('result').innerHTML = d.getTime();

    //getFullYear() 方法  返回年
    document.getElementById('result').innerHTML = d.getFullYear();
 
    //getMonth() 方法 在 JavaScript 中，第一个月（1 月）是月号 0，因此 12 月返回月号 11。
    //要获取正确的月份需要加一
    document.getElementById('result').innerHTML = d.getMonth() + 1;
   
    //getDate() 方法 以数字（1-31）返回日期的日
    document.getElementById('result').innerHTML = d.getDate();
   
    //getHours() 方法 以数字(0-23)返回日期的小时数
    document.getElementById('result').innerHTML = d.getHours();
    
    //getMinutes() 返回 （0-59）返回分钟
    document.getElementById('result').innerHTML = d.getMinutes();
    
    // getSeconds()方法 返回秒
    document.getElementById('result').innerHTML = d.getSeconds();
     
    //getMilliseconds() 方法 返回日期的毫秒数
    document.getElementById('result').innerHTML = d.getMilliseconds();

    // getDay()方法 返回（0-6）日期的星期名
    document.getElementById('result').innerHTML = d.getDay();

```