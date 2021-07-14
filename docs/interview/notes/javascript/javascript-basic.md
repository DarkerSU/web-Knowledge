## 数据类型

**基本数据类型**（值类型）：

::: tip 基本类型

String 字符串

Number 数值

Boolean 布尔值

Null 控制

Undefined 未定义

:::

**引用数据类型**（引用类型） 注：出5种基本类型外，其他的称之为Object类型

::: tip 引用类型

Object

Function

Array

:::

```javascript
var a='123456';
var b='hsduifb';
var c=''
console.log(typeof a) //string
console.log(typeof b) //string
console.log(typeof c) //string
```

## null 和 undefined区别

null 空值

underfind：未定义，声明了但是未初始化（为赋值）。

## for、forEach 、for in、for of循环详解

#### 1、for循环

for循环，通过累加数组索引，来输出数组中的值。

#### 2、forEach循环

forEach循环，跟for循环有点相似，不过会更优美，可通过参数直接获取到值，arr.forEach(function(item,index,arr){})，

其中item为该索引下的值，index为索引，arr为数字本身，参数名可改变，但是顺序不能改变。

#### 3、for in循环

相较于for循环，for in的功能会更加强大一些，使用范围也会更广，不但可以循环遍历数组，还可以循环遍历对象。

#### 4、for of

遍历数组里的每一项。

因为能够被for...of正常遍历的，都需要实现一个遍历器Iterator。而数组、字符串、Set、Map结构，早就内置好了Iterator（迭代器），它们的原型中都有一个Symbol.iterator方法，而Object对象并没有实现这个接口，使得它无法被for...of遍历。例如：
如下

## ES6新特性

#### 1、const 与 let 变量

- 使用`let`声明的变量可以重新赋值,但是不能在同一作用域内重新声明
- 使用`const`声明的变量必须赋值初始化,但是不能在同一作用域类重新声明也无法重新赋值.

#### 2、模板字符串

#### 3、数组和对象的解构

#### 4、函数箭头

#### 5、数组新增Map和Reduce

#### 6、扩展运算符（...）

#### 7、Promise

#### 8、Set和Map

`Set`本质与数组类似。不同于Set中只能保存不同的元素，如果元素相同会被忽略。

构造函数：

```javascript
let set = new Set();
set.add(1);	// [1]

let set2 = new Set([1,2,3,4,5])	// [1,2,3,4,5]
```

方法：

```javascript
// 添加，元素内容不可重复，重复会被忽略
set.add()
// 清空
set.clear()
// 删除指定元素，删除的是元素内容，而不是下标
set.delete(value)
// 判断指定元素是否存在
set.has(value)
// 遍历
set.forEach(function(){})
// 元素个数
set.size
```

`Map`本质是与Object类似的结构。不同在于Object强制规定key值只能是字符串。而`Map`对象的key可以是任意对象

```javascript
// map接收一个数组，数组中的元素是键值对数组
const map = new Map([
    ['key1','value1'],
    ['key2','value2']
]);
// 或者接收一个set
const set = new Set([
    ['key3','value3'],
    ['key4','value4']
]);
const map1 = new Map(map);
const map2 = new Map(set);

```

```javascript
map.set(key,value)
map.clear()
map.delete(key)
map.has(key)
map.forEach(function(key,value){})
map.size

map.values()
map.keys()
map.entries()
for(let key of map.keys()){
    console.log(key);
}
console.log(...map.values())

```

#### 9、class（类）

## 立即执行函数

立即执行函数：函数定义完，立即被调用，

立即执行函数往往只会执行一次

```javascript
(function(){
	//函数体
})();

//或者

!function(){
	//函数体
}();
```

## 创建自定义对象的几种方法

### 1、对象字面量模式

```javascript
var stu = {
    name: 'student1',
    age: 13,
    school: '学校1',
    like: function () {
        console.log(this.name + '喜欢打篮球')
    }
}	
```

### 2、工厂函数模式

```javascript
function student(name,age,likename) {
    var stu = {
        name: name,
        age: age,
        school: '学校1',
        like: function () {
            console.log(this.name + '喜欢'+likename)
        }
    }
    return stu
}
var s1=student('小红',12,'sing')
var s2=student('小米',17,'drink')
```

### 3、构造函数模式

> **new 对象()**          // new创建一个对象，将函数内部的this指向新的对象

```javascript
//构造函数
function Teacher(name,age,likename){
     console.log(this)
     this.name=name;
     this.age=age;
     this.like=function(){
         console.log(this.name+'喜欢'+likename)    //为了节约内存，构造函数中的函数可以定义成一个外部函数
     }
 }
// new创建一个对象，将函数内部的this指向新的对象
var t1= new Teacher('小黑',56,'mv')
console.log(t1.name)
```

## 原型对象，原型链

### 1、原型对象

**prototype**

1. 我们所创建的每一个函数。解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是所谓的原型对象;

```
如果函数作为普通函数调用，prototype没有任何作用，当函数以构造函数（
```

**new 函数()**）的形式调用时，他所创建的实例对象中都会有一个隐含的属性，这个属性指向该构造函数的原型，我们可以通过proto来访问该属性

```javascript
//定义构造函数
function Person(){},

var per1=new Person();
var per2=new Person();

console.log(Person.prototype);   //[object,object]

console.log(per1._proto_==Person.prototype);  //true
```

2. 原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。
3. 使用**in**检查对象中是否含有某个对象的属性时，如果对象中没有，但是**原型中有**，也会返回**true**。

::: tip

’属性‘  in 对象

:::

```
可以使用对象的hasOwnProperty()来检查
```

**对象自身中**是否含有该属性

### 2、原型链

- 每个构造函数都有一个prototype属性指向原型对象。
- 原型对象通过constructor属性指向构造函数。
- 通过实例对象的__proto__属性可以访问原型对象。
- Object的原型对象的__proto__属性为null。

## 闭包

当函数内部的变量被另外一个函数引用，那么这个函数的变量将不会在执行完毕之后销毁

## this指向问题

根据函数调用的方式不同，this会指向不同的对象**【重要】**

::: tip

- 以函数的形式调用时   ------    this永远都是window，比如fun(),相当于window.fun()

- 以方法的形式调用时   ------    this是调用方法的那个对象；

- 以构造函数的形式调用时   ------    this是创建的那个对象；

- 使用call和apply调用时   ------    this指向那个对象

```javascript
var stu={
    name:'小明',
    like:function(){
        console.log(this);
        console.log(this.name);
        console.log(this.name+'111')
    }

}
var fn=stu.like  
stu.like()	//其中的 this 指向stu对象
fn();	//其中的 this 指向 window

//注意：
//如果是下面的写法则this指向stu对象
var fn=stu.like()
fn;	//其中的 this 指向 stu对象
```


:::

### 1、改变this的指向

#### call/apply改变this指向

::: tip **call/apply**

通过call/apply可以使得在调用函数的时候修改this指向

:::

```javascript
var stu={
 name:'11',
 like:function(){
     console.log(this)
     console.log( this.name+'打蜡前')
 }
}
var teacher={
 name:'老师'
}
var fn=stu.like 
fn()  //this指向window

fn.call(teacher) //修改this指向teacher对象

var parent={
 name:'mama'
}
fn.apply(parent) //修改this指向parent对象
```

::: tip **call和apply区别**

- 参数传值方式不同

fn.call(对象,val1,val2,val3,....)    --->参数以次传入

fn.apply(对象,[val1,val2,val3,...])   --->以参数数组形式传入

:::

#### bind改变this指向

```javascript
var teacher={
    name:'老师'
}  
var stu = {
    name: '学生',
    like:function(){
        console.log(this.name+'喜欢打篮球')
    }.bind(teacher)   //bind(teacher)绑定到stu对象上，所以this指teacher对象
}

stu.like()  //bind(teacher)绑定到stu对象上，所以this指teacher对象,

//结果为：老师喜欢打篮球



var fn = function () {
    console.log(this)
    console.log(this.name + '111')
    for (var i = 0; i < arguments.length; i++) {
        console.log(this.name + '喜欢：' + arguments[i])
    }
}.bind(stu)
fn('唱歌','跳舞','睡觉') //bind(stu)绑定到stu对象上，所以this指stu对象
```

### 2、箭头函数中this的指向

ES6中的箭头函数并不会使用上述规则，而是继承外层函数调用的this绑定

```javascript
var stu = {
    name: '学生',
    like:()=>{
        console.log(this.name+'喜欢打篮球')
    }  
}

stu.like()  //this指向window
```

## 浅拷贝、深拷贝

::: tip **赋值**、**浅拷贝**、**深拷贝**的区别：

**赋值**：当我们把一个对象赋值给一个新的变量时，赋的其实是该对象在栈中的地址。而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是对象的存储空间的内容。因此两个对象是联动的。

**浅拷贝**：重新再堆中创建内存，拷贝前后对象内的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会互相影响。

**深拷贝**：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝，拷贝前后的两个对象互不影响。

:::


### 1、堆、栈

**栈内存**主要用于存储各种**基本类型**的变量

**堆内存**主要负责存储各种**引用类型**的变量

如下图：

[![RzdeXj.png](https://z3.ax1x.com/2021/07/10/RzdeXj.png)](https://imgtu.com/i/RzdeXj)

### 2、浅拷贝

::: tip  实现方式：

- Object.assign()
- loadsh 中的 _.clone
- ...扩展运算符
- Array.protype.concat
- Array.protype.slice

:::

### 3、深拷贝

::: tip 实现方式

- JSON.parse(JSON.stringify())
- 递归
- cloneDeep
- Jquery.extend()

:::

## 数组方法

### 1、四种基本方法


| 方法 | 描述 | 备注 | 语法 |
| - | - | - | - |
| push() | 向数组的**末尾**插入一个或多个元素，返回结果为该**数组新的长度** | 改变原来数组 | arr.push(val ,val2,val3,...) |
| pop() | 删除数组**最后一个**元素，返回**被删除的元素** | 改变原来数组 | arr.pop() |
| unshift() | 在数组**最前面**插入一个或者多个元素，返回为该**数组新的长度** | 改变原来数组 | arr.unshift(val ,val2,val3,...) |
| shift() | 删除数组中的**第一个**元素，返回**被删除的元素** | 改变原来数组 | arr.shift() |

### 2、常见方法


| 方法 | 描述 | 备注 | 语法 |
| - | - | - | - |
| slice() | 从数组中**提取**指定的一个或者多个元素，返回**新的数组** | 不改变原数组 | arr.**slice**(val1,val2)     提取从val1-val2的值（不包含val2） |
| splice() | 从数组中**删除**指定一个或多个元素，返回**新数组** | 会改变原数组 | arr.**splice**(索引值，删除的数量，添加的内容)，可作为删除，也可作为替换 |
| concat() | 链接两个或者多个数组，返回**新数组** | 不改变原数组 |   |
| join() | 将数组转为字符串，返回结果为**转换后的字符串** | 不会改变原数组 |   |
| reverse() | 反转数组，返回**反转后的数组** | 不改变原数组 |   |
| sort() | 对数组中的元素，默认**按照Unicode编码**，**从小到大**排序 | 会改变原数组 | arr.sort() 或arr.sort(callback)   //callback回调函数，可以设置排序方式 |

::: tip slice()

slice()可以将**伪数组**转化成真数组

array=**Array.prototype.slice.call**(arrLike)

或

array=**[].slice.call**(arrLike)

:::

### 3、数组遍历方法


| 方法 | 描述 | 备注 |
| - | - | - |
| for循环 |   |   |
| forEach() |   |   |
| map() | 对原数组中的每一项进行加工，将**组成新的数组** | 不会改变原数组 |
| filter() | 对数组中的每一项进行回调函数，该函数返回结果是true的项将组成新的数组，返回结果为**新的数组**。起到过滤的左右 | 不会改变原数组 |
| every() | 如果有一项为false，则停止遍历，此方法返回true | 要求每一项都返回true，最终的经过才返回false |
| some() | 只要有一项为true，则停止遍历，此方法返回true | 要求每一项都返回false，最终的结果才会返回false |
| reduce | 为数组中的每一个元素，执行回调函数 |   |

### 4、其他方法


| 方法 | 描述 | 备注 |
| - | - | - |
| indexOf(value) | 获取value在数组中**第一个位置**的下标 |   |
| lastIndex(value) | 获取value在数组中**最后一个位置**的下标 |   |
| find(function()) | 找出**第一个满足**【指定条件返回为true】的**元素** | arr.find(fn) |
| findIndex(function()) | 找出**第一个满足**【指定条件返回为true】的元素的**index** |   |
| Array.from(arrayLike) | 将**伪数组**转换成**真数组** |   |
| Array.of(value1,value2,value3) | 将一系列值转换成数组 |   |

### 5、其他

**isArray()** ：判断是否为数组

::: tip

布尔值=**Array.isArray**(被检测的值)

:::

**toString()** ：数组转换成字符串

::: tip

字符串=数组.**toString()**

把数组转换成字符串，每一项用,分割

:::

**valueOf()**：返回数组本身

::: tip

数组本身=数组.**valueOf()**

:::
