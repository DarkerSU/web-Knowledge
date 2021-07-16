## JS数据类型

**基本数据类型**（值类型）：

::: tip 基本类型

String 字符串

Number 数值JS

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

## let var const 的区别

var: 解析器在对js解析时，会将脚本扫描一遍，将变量的声明提前到代码块的顶部，赋值还是在原先的位置，若在赋值前调用，就会出现暂时性死区，值为 undefined

let const：不存在在变量提升，且作用域是存在于块级作用域下，所以这两个的出现解决了变量提升的问题，同时引用块级作用域。

注：变量提升的原因是为了解决函数互相调用的问题。

## null和undefined的区别

null 空值

underfind：未定义，声明了但是未初始化（为赋值）。

## typeof和 instanceof 的区别

typeof(a) 用于返回值的类型；

instanceof 用于判断该对象是否是目标实例，根据原型链 `__proto__` 逐层向上查找，通过 instanceof 也可以判断一个实例是否是其父类型或者祖先类型的实例。

```js
function person() {
    this.name = 10
}
console.log(person instanceof person)
//结果是 false ，看下 person 函数的原型链 person.proto_ => Function.proto=> Object.proto=> null ，所以在原型链上是找不到 person 的
```

## class 和 function 的区别

class 也是一个语法糖，本质还是基于原型链，class 语义化和编码上更加符合面向对象的思维。

对于 function 可以用 call apply bind 的方式来改变他的执行上下文，但是 class 却不可以。

::: tip **class**

class 虽然本质上也是一个函数，但在转成 es5 （babel）做了一层代理，来禁止了这种行为。

class 中定义的方法不可用 Object.keys() 遍历

class 不可以定义私有的属性和方法， function 可以，只要不挂载在 this 作用域下就行

class 只能通过类名调用

class 的静态方法，this 指向类而非实例

:::

## toString 和 valueOf 有什么区别

**toString**   方法返回一个表示该对象的字符串，如果是对象会toString() 返回 “[object type]”,其中type是对象类型。

**valueOf **  方法返回指定对象的原始值，JS会利用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串和布尔值）

例如：

```js
var array = ['aa','bb','cc'];
console.log(array.toString());	 //aa,bb,cc
console.log(array.valueOf());	//["aa","bb","cc"]

var  boolean= new Boolean();
console.log(boolean.toString());	//false
console.log(boolean.valueOf());	//true

var today = new Date();
console.log(today.toString());	//标准时间
console.log(today.valueOf())	//毫秒数

var num = 123;
console.log(num.toString());	//123
console.log(num.valueOf());	//123

var x = 'hello';
console.log(x.toString());	//hello
console.log(x.valueOf());	//hello

var fn= function(){ console.log(1) };
console.log(fn.toString());	//function(){ console.log(1) };
console.log(fn.valueOf());	//f(){console.log(1)}

var obj={};
console.log(obj.toString());	//[object object]
console.log(obj.valueOf());	//{}
```



## generator 和 async区别

Generator和async是ES6提供的新的异步解决方案。

Generator函数可以理解为一个可以输出多个值的状态机。它的返回值是一个遍历器对象（Iterator），每次调用该遍历器的next方法就会输出一个值。当有多个异步操作需要按序执行时，只要在完成一个时调一次next方法即可执行下一个。不过想要自动化执行Generator函数则需要借助一些工具。

async函数则是Generator函数的语法糖，它为Generator函数内置了自动执行器。用async函数写出的异步代码几乎与同步代码没有什么差别，使用async函数，不需要任何外部工具，即可写出格式优雅的异步代码。

总的来说，Generator函数定义了一种新的异步模型，而async函数通过对该模型的再封装，提供了一种优雅的异步解决方案。

## 判断数组的几种方法

- Array.isArray() ES6 api
- obj instanceof Array 原型链查找
- obj.constructor === Array 构造函数类型判断
- Object.prototype.toString.call(obj) === '[object Array]'    toString返回表示该对象的字符串，若这个方法没有被覆盖，那么默认返回 "[object type]" ，其中 type 是对象的类型。需要准确判断类型的话，建议使用这种方法.

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

## 为何for of不能遍历对象?

​	因为能够被for...of正常遍历的，都需要实现一个遍历器Iterator（迭代器）。而数组、字符串、Set、Map结构，早就内置好了Iterator，它们的原型中都有一个Symbol.iterator方法，而Object对象并没有实现这个接口，使得它无法被for...of遍历。

```javascript
Array.prototype[Symbol.iterator];
// ƒ values() { [native code] }
 
String.prototype[Symbol.iterator];
// ƒ [Symbol.iterator]() { [native code] }
 
Set.prototype[Symbol.iterator];
// ƒ values() { [native code] }
 
Map.prototype[Symbol.iterator];
// ƒ entries() { [native code] }
 
Object.prototype[Symbol.iterator];
// undefined
```

## Set、Map、WeakSet、WeakMap 的区别?

> Set 和 Map 主要的应用场景在于 数据重组 和 数据储存

### 1、Set和weakSet

#### 1.1、Set

Set 本身是一种构造函数，用来生成 Set 数据结构。

(1)成员不能重复

(2)只有键值对，没有键名，有点类似数组。

(3)可以遍历，方法有add, delete,has.

```js
// 去重数组的重复对象
let arr = [1, 2, 3, 2, 1, 1]
[... new Set(arr)]	// [1, 2, 3]
```

::: tip 方法

size: 返回集合的元素个数。（类似数组的长度length）

add(value): 向集合中添加一个元素value。注意：如果向集合中添加一个已经存在的元素，不报错但是集合不会改变。

delete(value): 从集合中删除元素value。

has(value): 判断value是否在集合中，返回true或false.

clear(): 清除所有成员，没有返回值。

:::

::: tip set应用

```js
//数组去重
let arry = [1, 2, 3, 4, 4,1,2,3,2];
var mySet = new Set(arry);
let newArry = [...mySet]; // [1, 2, 3, 4]

//set求并集
let arryA= [2,3,4,5,6],arryB = [3,4,5,6,7,8];
let setAB = new Set([...arryA,...arryB]);
let newArryAB = [...setAB];
console.log(newArryAB); //[2,3,4,5,6,7,8]

//求交集
let arryC= [2,3,4,5,6],arryD = [3,4,5,6,7,8];
let setC = new Set(arryC);
let setD = new Set(arryD);
let newArryC_D = arryA.filter(x=>setD.has(x));
console.log(newArryC_D); //[3,4,5,6]

//求差集
let newArryD_C = arryA.filter(x=>!setD.has(x));
let newArryD_D = arryB.filter(x=>!setC.has(x));
let newArryCD = [...newArryD_C,...newArryD_D];
console.log(newArryCD); //[2,7,8]

```

:::

#### 1.2、WeakSet

和Set结构类似，也是不重复的值的集合，但WeakSet的成员只能是对象。

WeakSet的API：add() //增 ；delete() //删； has() //是否存在

注意：ws没有size属性，不可遍历。因为WeakSet的成员都是弱引用，随时可能消失，成员是不稳定的。

::: tip **用处**

（1）使用ws储存DOM节点，就不用担心节点从文档移除时，会引发内存泄漏（即在被移除的节点上绑定的click等事件）。

（2）下面代码保证了Foo的实例方法，只能在Foo的实例上调用。这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。

:::

### 2、Map和weakMap

#### 2.1、Map

Map解决的是Object的键值对中键只能是字符串的问题。

Map本质上是键值对的集合，类似集合；

(1)成员都是对象

(2)成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏

(3)不能遍历，方法有add, delete,has

```js
let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]); 
```

::: tip 方法

size: 属性，取出字典的长度

set(key, value)：向字典中添加新元素

get(key)：通过键查找特定的数值并返回

has(key)：判断字典中是否存在键key

delete(key)：通过键 key 从字典中移除对应的数据

clear()：将这个字典中的所有元素删除

:::

::: error **Object的区别：**

一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。

Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。

Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。

Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突,而map健不可重复，如果键名冲突则会覆盖对应的值。

:::

map的遍历

```js
let map=new Map([['F','no'],['T','yes']]);
for(let key of map.keys()){
    console.log(key);
} 
//F
//T
map.keys();
//MapIterator {"F", "T"}
map.values()
//MapIterator {"no", "true"}
for(let value of map.values()){
    console.log(value);
}
//no
//yes
for(let [key,value] of map.entries()){
    console.log(key,value);
}
//F no
//T yes

map.forEach((value,key)=>{
      console.log("key:"+JSON.stringify(key)+"-------value:"+JSON.stringify(value))
  })
```

#### 2.2、WeakMap

WeakMap结构与Map结构基本类似，唯一的区别就是WeakMap只接受对象作为键名（null除外），而且键名所指向的对象不计入垃圾回收机制。

(1)直接受对象作为键名（null除外），不接受其他类型的值作为键名

(2)键名所指向的对象，不计入垃圾回收机制

(3)不能遍历，方法同get,set,has,delete



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

## ES6模块化

| 暴露方式 | 引入方式                  |
| -------- | ------------------------- |
| 分别暴露 | `import {} from '/xx/xx'` |
| 统一暴露 | `import {} from '/xx/xx'` |
| 默认暴露 | `import a from '/xx/xx'`  |



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

## 构造函数

构造函数与普通函数在编码上没有区别，只要可以通过 new 来调用的就是构造函数。

::: error  注：

箭头函数不可以作为构造函数。

:::

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

## Array方法

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



## Object方法

#### 1、freeze()

Object.freeze() 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。

## Javascript异步编程的4种方法

### 1、回调函数

```js
function f1(callback){
    setTimeout(function () {
        // f1的任务代码
        callback();
    }, 1000);
}

f1(f2);
```

采用这种方式，我们把同步操作变成了异步操作，f1不会堵塞程序运行，相当于先执行程序的主要逻辑，将耗时的操作推迟执行。

优点：简单、容易理解和部署，

缺点：不利于代码的阅读和维护，各个部分之间高度[耦合](https://en.wikipedia.org/wiki/Coupling_(computer_programming))（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。

### 2、事件监听

```js
f1.on('done', f2);
//当f1发生done事件，就执行f2。
function f1(){
    setTimeout(function () {
        // f1的任务代码
        f1.trigger('done');
    }, 1000);
}
//f1.trigger('done')表示，执行完成后，立即触发done事件，从而开始执行f2。
```

优点：比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以["去耦合"](https://en.wikipedia.org/wiki/Decoupling)（Decoupling），有利于实现[模块化](https://www.ruanyifeng.com/blog/2012/10/javascript_module.html)。

缺点：整个程序都要变成事件驱动型，运行流程会变得很不清晰。

### 3、发布/订阅

```js
function f1(){
    setTimeout(function () {
        // f1的任务代码
        jQuery.publish("done");
    }, 1000);
}
//jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。
//此外，f2完成执行后，也可以取消订阅（unsubscribe）。
jQuery.unsubscribe("done", f2);
```

这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

### 4、Promise对象

