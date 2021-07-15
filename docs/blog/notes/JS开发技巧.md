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

