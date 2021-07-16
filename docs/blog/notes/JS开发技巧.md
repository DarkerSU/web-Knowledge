## 防抖节流-图片懒加载

```js
var num = document.getElementsByTagName('img').length;
var img = document.getElementsByTagName('img');
var n = 0;    //存储图片加载的位置，避免每次都从第一张图片开始遍历
var isLoading = false;
var _clientHeight = document.documentElement.clientHeight //可见区域高度
var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop  //滚动条距离顶部高度


// 监听窗口变化重新计算可视区域
function computedClientHeight() {
    _clientHeight = document.documentElement.clientHeight //可见区域高度
}
// 页面载入完毕加载可视区域的图片
lazyload()
function lazyload() {
    // 滚动条距离顶部高度
    isLoading = n >= num
    _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = n; i <= num; i++) {
        console.log(img[i].offsetTop)
        if (img[i].offsetTop < _clientHeight + _scrollTop) {
            if (img[i].getAttribute('src') == '') {
                img[i].src = img[i].getAttribute('data-src')
            }
            n = i + 1
        }
    }
}

/**
         * 简单的节流函数throttle
         * @param {}
         */
function throttle(func, wait, flag) {
    var timer;
    return function () {
        if (flag) {
            return
        }
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                func()
            }, wait)
        }
    }
}

/**
         * 简单的防抖函数debounce
         * 
        */
function debounce(callback, wait) {
    var timer;
    return function (arg) {
        clearTimeout(timer)
        timer = setTimeout(function () {
            callback(arg)
        }, wait)
    }
}

// 使用节流函数--实现性能较好的懒加载
window.addEventListener('scroll', throttle(lazyload, 100, isLoading));

// 使用防抖函数--优化不断触发窗口变化
window.addEventListener('resize', debounce(computedClientHeight, 800))
```

## 插件封装原理

```js
 ; (function () {
     var Compute = function (opt) {
         this.x = opt.firstNum || 0;
         this.y = opt.secondNum || 0;
     }

     Compute.prototype = {
         plus: function () {
             return this.x + this.y
         },
         minus: function () {
             return this.x - this.y
         },
         mul: function () {
             return this.x * this.y
         },
         div: function () {
             return this.x / this.y
         }
     }

     window.Compute=Compute
 })()

var compute=new Compute({
    firstNum:20,
    secondNum:5
});

console.log(compute.plus())
console.log(compute.minus())
console.log(compute.mul())
console.log(compute.div())
```

## 瀑布流实现

```js
var box = document.getElementById('box')
var items = box.children;
var gap = 10;

window.onload = function () {
    waterFall();

    function waterFall() {
        var parentWidth = getClient().width;
        var itemWidth = items[0].offsetWidth;
        var col = parseInt(parentWidth / (itemWidth + gap))

        var firstColArr = [];
        for (var i = 0; i < items.length; i++) {
            if (i < col) {
                // 确定第一行
                items[i].style.top = 0;
                items[i].style.left = (itemWidth + gap) * i + 'px';
                firstColArr.push(items[i].offsetHeight)
            } else {
                // 其他行
                // 找其他行的最小高度和最小索引
                var minHeight = firstColArr[0]

                var index = 0;

                //找出最小值及索引
                for (var j = 0; j < firstColArr.length; j++) {
                    if (minHeight > firstColArr[j]) {
                        minHeight = firstColArr[j]
                        index = j
                    }
                }

                items[i].style.top = firstColArr[index] + gap + 'px';
                items[i].style.left = items[index].offsetLeft + 'px';

                // 改变最小高度
                firstColArr[index] = firstColArr[index] + items[i].offsetHeight + gap;

            }
        }
    }
    window.addEventListener('resize', function () {
        waterFall();
    })
}

// 兼容性
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
```

## 请实现一个 Event 类，继承自此类的对象都会拥有四个方法 on, off, once 和 trigger？

- \- ES6 创建类
-  \- 自定义事件机制 
-  \- on 添加事件监听
-  \- off 取消事件监听
-  \- once 事件只执行一次
-  \- trigger 执行事件

代码实现：

```js
class Event{
    constructor(){
        //记录所有的事件及处理函数
        this.handler = {};
    }
        /**
     * on 添加事件监听
     * @param type 事件类型
     * @param handler 事件处理函数
     */
    on=(type,handler,once=false)=>{
        if(!(handler instanceof Function)){
            throw new Error('handler must be a function');
        }
        if(!this.handler[type]){
            this.handler[type] = [];
        }
 
        if(!this.handler[type].includes(handler)){
            this.handler[type].push(handler);
            if(once){
                handler.once = true;
            }
        }
        
    }
    /**
     * off 取消事件监听
     * @param type 要取消的事件类型
     * @param handler 要取消的事件函数,如果不传则清除该类型所有函数
     */
    off=(type,handler)=>{
        
        if(!handler){
            this.handler[type] = [];
            return false;
        }
        this.handler[type]=this.handler[type].filter(fn=>handler !== fn);
        
    }
    /**
     * trigger  执行函数
     * @param type 要执行哪个类型的函数
     * @param eventData 事件对象
     * @param point this执行
     */
    trigger=(type,eventData={},_this=this)=>{
        this.handler[type].forEach(fn=>{
            fn.call(_this,eventData);
            if(fn.once){
                this.off(type,fn);
            }
        })
    }
    /**
     * once 该函数只执行一次
     * @param type 事件类型
     * @param handler 事件处理函数
     */
    once=(type,fn)=>{
        this.on(type,fn,true);
    }
}
```

测试用例：

```js
//测试用例
class Click extends Event{
    constructor(el){
        super();
        this.el = el;
        this.el.addEventListener('click',this.click);
    }
    click=(event)=>{
        console.log(666);
        //必须要在相应的事件函数中调用执行函数
        this.trigger('click',event,this.el);
    }
}
let box = document.getElementById('box');
let m = new Click(box);
m.on('click',function(event){
    console.log('on',event,this)
})
m.once('click',function(){
    console.log('once');
})
 
 
//补充：原生的addEventListener方法也是有once属性的，即方法只执行一次,在func后面参数对象中设置属//性once:true即可
box.addEventListener('click',function(){
    console.log(123);
},{once:true})
```

