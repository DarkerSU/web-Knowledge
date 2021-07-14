## JS 6种继承方式比较

[6种继承方式]: https://m.html.cn/qa/javascript/10937.html

#### 1、原型链继承

#### 2、构造函数继承

#### 3、组合继承

#### 4、原型式继承

#### 5、寄生式继承

#### 6、寄生组合式继承

## JS多态实现





## 防抖节流

```javascript
<div id="box" class="box"></div>

let num = 1;
let boxDom = document.getElementById('box');
function count() {
	boxDom.innerHTML = num++
}
boxDom.addEventListener('mousemove', debounce(count, 500))
boxDom.addEventListener('mousemove', debounce1(count, 500))
boxDom.addEventListener('mousemove', throttle(count, 500))
boxDom.addEventListener('mousemove', throttle1(count, 500))
```

### 1、防抖（debounce）

**触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。**

当持续触发事件时，debounce 会合并事件且不会去触发事件，当一定时间内没有触发再这个事件时，才真正去触发事件。

::: tip 防抖类型

1. 先等待n秒，再执行方法（如下拉刷新）
2. 立即执行，在等待输入（如输入完毕立即查询）

:::

```javascript
/* 防抖函数 */
// 1.先等待，再执行。如下拉刷新
function debounce(fn, wait) {
    let time;
    return function () {
        if (time) clearTimeout(time);
        time = setTimeout(function () {
            fn.apply(this, arguments)
        }, wait)
    }
}

// 2.立即执行，再等待； 如输入完毕立即查询
function debounce1(fn, wait) {
    let time;
    return function () {
        if (time) clearTimeout(time);
        let callNow = !time;
        time = setTimeout(function () {
            time=null;  
        }, wait)
        if (callNow) fn.apply(this, arguments)
    }
}

```

### 2、节流（throttle）

**高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。**

```javascript
/* 节流函数 */
// 1.固定时间发送请求
function throttle(cb,wait){
    let timer;  //定义定时器句柄
    return function(){
        if(!timer){ //是够存在定时器
            timer=setTimeout(()=>{
                timer=null;
                cb.apply(this, arguments)
            },wait)
        }
    }
}

// 时间戳方式
function throttle1(cf, wait) {
    let prev = 0;
    return function () {
        let now = Date.now();
        if (now - prev > wait) {
            cb.apply(this, arguments);
            prev = now;
        }
    }
}
```

### 3、区别

函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。

## 数据方法详解

#### reduce()详解

::: tip

`**arr.reduce**((previousValue, currentValue, currentIndex, array) => {}, initialValue)`

**previousValue**：表示上一次调用回调时的返回值，或者初始值init

**currentValue**：表示当前正在处理的数组元素；

**currentIndex**：表示当前正在处理的数组元素的索引，若提供init值，则索引为0，否则索引为1

**array**：表示当前操作的数组

**initialValue**：表示初始值

:::

应用场景：

- 数组求和，求乘积
- 计算数组中每个元素出现的次数
- 数组去重
- 将二位数组转成一维
- 将多维数组转成一维
- 对象的属性求和

#### map()方法重写

```javascript
var arr1=[1,2,3,4,5,6];
var newArr=arr1.map(function(item,index){
	item++;
	return item;
})

//map()方法原理实现
arr._proto_.forMap=function(fn){
    var arr=[];
    for(var i=0;i<this.length;i++){
        arr[i]=fn(this[i],i,this)
    }
}
```

#### filter()方法重写

```javascript
var arr1 = [21, 12, 321, 42, 15, 6];

var fn1 = function (item, i, arr) {
    if (item > 20) {
        return true
    } else {
        return false
    }
}

arr1.__proto__.forFilter = function (callback) {
    var temArr = [];
    for (var i = 0; i < this.length; i++) {
        var isSave = callback(this[i], i, this);
        if (isSave) {
            temArr.push(this[i])
        }
    }
    return temArr
}

var NewArr3 = arr1.forFilter(fn1)
console.log(NewArr3)
```

### 4、其他方法

[代码件仓库WebDemoLibrary-面试题]: https://gitee.com/darkersu/WebDemoLibrary/tree/master/.%E9%9D%A2%E8%AF%95%E9%A2%9

## CommonJS和ES6的module的区别

#### CommonJS

`CommonJS` 模块加载过程是同步阻塞性地加载，在模块代码被运行前就已经写入了 `cache`，同一个模块被多次 `require` 时只会执行一次，重复的 `require` 得到的是相同的 `exports` 引用。

#### ES6 模块

使用 `import`, `export` 关键字来进行模块输入输出。`ES6` 不再是使用闭包和函数封装的方式进行模块化，而是从语法层面提供了模块化的功能。

ES6模块中不存在 `require`, `module.exports`, `__filename` 等变量，`CommonJS` 中也不能使用 `import`。

两种规范是不兼容的，一般来说平日里写的 `ES6` 模块代码最终都会经由 `Babel`, `Typescript` 等工具处理成 CommonJS 代码。



