## JS时间循环机制（event-loop）

时间循环机制由三部分组成

**调用栈** **微任务队列** **消息队列**

::: tip 注：

event-loop开始时，会从全局一行一行的执行，遇到函数调用，会压入到调用栈中，被压入的函数被称为帧，当函数返回后回从调用栈中弹出

js中异步操作，比如fetch、setTimeout、setInterval压入调用栈中的时候里面的消息会进入到消息队列中，消息队列中的会等到调用栈清空之后再执行

promise、async、await的异步操作的时候会加入到微任务队列中去，会在调用栈清空的时候立即执行，调用栈中加入的微任务会立马执行

:::

## JavaScript 事件循环机制

​		JavaScript 事件循环机制分为浏览器和 Node 事件循环机制，两者的实现技术不一样，浏览器 Event Loop 是 HTML 中定义的规范，

Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。

- JS 调用栈

  JS 调用栈是一种后进先出的数据结构。当函数被调用时，会被添加到栈中的顶部，执行完成之后就从栈顶部移出该函数，直到栈内被清空。

- 同步任务、异步任务

  JavaScript 单线程中的任务分为同步任务和异步任务。同步任务会在调用栈中按照顺序排队等待主线程执行，异步任务则会在异步有了结果后将注册的回调函数添加到任务队列(消息队列)中等待主线程空闲的时候，也就是栈内被清空的时候，被读取到栈中等待主线程执行。任务队列是先进先出的数据结构。

- Event Loop

  调用栈中的同步任务都执行完毕，栈内被清空了，就代表主线程空闲了，这个时候就会去任务队列中按照顺序读取一个任务放入到栈中执行。每次栈内被清空，都会去读取任务队列有没有任务，有就读取执行，一直循环读取-执行的操作，就形成了事件循环。

  - 定时器

  定时器会开启一条定时器触发线程来触发计时，定时器会在等待了指定的时间后将事件放入到任务队列中等待读取到主线程执行。

  定时器指定的延时毫秒数其实并不准确，因为定时器只是在到了指定的时间时将事件放入到任务队列中，必须要等到同步的任务和现有的任务队列中的事件全部执行完成之后，才会去读取定时器的事件到主线程执行，中间可能会存在耗时比较久的任务，那么就不可能保证在指定的时间执行。

  - 宏任务(macro-task)、微任务(micro-task)

    除了广义的同步任务和异步任务，JavaScript 单线程中的任务可以细分为宏任务和微任务。

    macro-task包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。

    micro-task包括：process.nextTick, Promises, Object.observe, MutationObserver。

## 浏览器渲染流程

::: tip 流程：

DNS解析：把域名解析成IP地址

TCP 建立连接：TCP三次握手

发送HTTP请求

服务器处理并响应报文

浏览器解析并渲染页面

断开连接：TCP 结束连接

:::

## HTTP的请求方式及用途

**GET方法**

发送一个请求来取得服务器上的某一资源

**POST方法**

向URL指定的资源提交数据或附加新的数据

**PUT方法**

跟POST方法很像，也是想服务器提交数据。但是，它们之间有不同。PUT指定了资源在服务器上的位置，而POST没有

**HEAD方法**

只请求页面的首部

**DELETE方法**

删除服务器上的某资源

**OPTIONS方法**

它用于获取当前URL所支持的方法。如果请求成功，会有一个Allow的头包含类似“GET,POST”这样的信息

**TRACE方法**

TRACE方法被用于激发一个远程的，应用层的请求消息回路

**CONNECT方法**

把请求连接转换到透明的TCP/IP通道

## 简单请求&复杂请求

**简单请求**：

1. 请求方式是以下三种方式之一：HEAD、GET、POST
2. HTTP的头信息不超出以下几种字段

::: tip

Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type

但是Content-Type的值，只限于三个值： application/x-www-form-urlencoded、multipart/form-data、text/plain

:::

> Content-Type: **application/json** ： json 字符串
>
> Content-Type: **application/x-www-form-urlencoded** ： & 将 key=value 进行拼接， jquery 默认使用这个
>
> Content-Type: **multipart/form-data** ： 常用于文件上传

**复杂请求** ：

复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为“预检”请求（preflight）。预检请求为OPTIONS请求，用于向服务器请求权限信息。预检请求被成功响应后，才会发出真实请求，携带真实数据。

## 前端性能优化

::: tip 优化方案

1.压缩 css, js, 图片

2.减少 http 请求次数， 合并 css、js 、合并图片（雪碧图）

3.使用 CDN

4.减少 dom 元素数量

5.图片懒加载

6.静态资源另外用无 cookie 的域名

7.减少 dom 的访问（缓存 dom）

8.巧用事件委托

9.样式表置顶、脚本置低

:::

## 跨域

### 1、webpack proxy（前端方式）

```javascript
devServer:{
    proxy:{ //代理
        '/api':{
            target:'http://localhost:3000/',
            pathRewrite:{'/api':''}
        }
    }
}
```

### 2、cors（后端方式）

```javascript
const allowCorssDomain=function(req,res,next){
    // 请求源
    res.header('Access-Control-Allow-Origin','*')
    // 请求头
    res.header('Access-Control-Allow-Headers',"*")
    // 请求方法 get/post/delete/put
    res.header('Access-Control-Allow-Methods',"*");
    next()
}
app.use(allowCorssDomain)
```

### 3、中间件（nginx）

### 4、webpack plugin （前端方式 ）

webpack-dev-middleware设置在服务端。是客户端和服务端在用一个文件下

```javascript
const webpack =require('webpack')
const middleware=require('webpack-dev-middleware')
const compiler =webpack(require('./webpack.config.js'))
app.use(middleware(compiler))
```

### 5、Vue proxy

```javascript
devServer: {
    // 配置后台数据请求代理 
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:5055',//代理的目标服务器
            changeOrigin: true,
            ws: true,
            pathRewrite: { //路径重写
                '^/api': '/api'
            }
        },
    } 
},
```

## cookie和session

cookie和session都是用来跟踪浏览器用户身份的会话方式。

区别：

1. 保持状态：cookie保存在浏览器端，session保存在服务器端
2. 使用方式：

（1）cookie机制：如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。

Cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它

（2）session机制：当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含sessionid。如果有sessionid，服务器将根据该id返回对应session对象。如果客户端请求中没有sessionid，服务器会创建新的session对象，并把sessionid在本次响应中返回给客户端。通常使用cookie方式存储sessionid到客户端，在交互中浏览器按照规则将sessionid发送给服务器。如果用户禁用cookie，则要使用URL重写，可以通过response.encodeURL(url) 进行实现；API对encodeURL的结束为，当浏览器支持Cookie时，url不做任何处理；当浏览器不支持Cookie的时候，将会重写URL将SessionID拼接到访问地址后。

3. 存储内容：cookie只能保存字符串类型，以文本的方式；session通过类似与Hashtable的数据结构来保存，能支持任何类型的对象(session中可含有多个对象)
4. 存储的大小：cookie：单个cookie保存的数据不能超过4kb；session大小没有限制。
5. 安全性：cookie：针对cookie所存在的攻击：Cookie欺骗，Cookie截获；session的安全性大于cookie。

　　　　　　原因如下：（1）sessionID存储在cookie中，若要攻破session首先要攻破cookie；

　　　　　　　　　　　（2）sessionID是要有人登录，或者启动session_start才会有，所以攻破cookie也不一定能得到sessionID；

　　　　　　　　　　　（3）第二次启动session_start后，前一次的sessionID就是失效了，session过期后，sessionID也随之失效。

　　　　　　　　　　　（4）sessionID是加密的

　　　　　　　　　　　（5）综上所述，攻击者必须在短时间内攻破加密的sessionID，这很难。

6. 应用场景：

cookie：（1）判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除cookie，则每次登录必须从新填写登录的相关信息。

　　　　（2）保存上次登录的时间等信息。

　　　　（3）保存上次查看的页面

　　　　（4）浏览计数

![img](https://images2018.cnblogs.com/blog/1287779/201804/1287779-20180404062350828-745185789.png)

session：Session用于保存每个用户的专用信息，变量的值保存在服务器端，通过SessionID来区分不同的客户。

　　（1）网上商城中的购物车

　　（2）保存用户登录信息

　　（3）将某些数据放入session中，供同一用户的不同页面使用

　　（4）防止用户非法登录

7. 缺点：cookie：（1）大小受限

　　　　　　　　（2）用户可以操作（禁用）cookie，使功能受限

　　　　　　　　（3）安全性较低

　　　　　　　　（4）有些状态不可能保存在客户端。

　　　　　　　　（5）每次访问都要传送cookie给服务器，浪费带宽。

　　　　　　　　（6）cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下。

　　　session：（1）Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。

　　　　　　　　（2）依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全

　　　　　　　　（3）创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。

## cookies sessionStorage和localstorage区别

- cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
- cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递
- sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存
- **存储大小：**
  - cookie数据大小不能超过4k
  - sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
- **有期时间：**
  - localStorage存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
  - sessionStorage`数据在当前浏览器窗口关闭后自动删除
  - cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

## http 和 https 比较

http是HTTP协议运行在TCP之上。所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。

https是HTTP运行在SSL/TLS之上，SSL/TLS运行在TCP之上。所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。此外客户端可以验证服务器端的身份，如果配置了客户端验证，服务器方也可以验证客户端的身份

## 浏览器缓存机制

浏览器缓存分为强缓存和协商缓存

- **强缓存**：利用http的返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源的缓存时间
- **协商缓存**：客户端向服务器端发出请求，服务端会检测是否有对应的标识，如果没有对应的标识，服务器端会返回一个对应的标识给客户端，客户端下次再次请求的时候，把该标识带过去，然后服务器端会验证该标识，如果验证通过了，则会响应304，告诉浏览器读取缓存。如果标识没有通过，则返回请求的资源。

**Cache-Control**

::: tip cache-control取值

Cache-Control 可以由多个字段组合而成，主要有以下几个取值：

**max-age**：定一个时间长度，在这个时间段内缓存是有效的，单位是s。

**public** ：表明响应可以被任何对象（发送请求的客户端、代理服务器等等）缓存。

**private** ：表明响应只能被单个用户（可能是操作系统用户、浏览器用户）缓存，是非共享的，不能被代理服务器缓存。

**no-cache** ：强制所有缓存了该响应的用户，在使用已缓存的数据前，发送带验证器的请求到服务器。不是字面意思上的不缓存。

**no-store** ：禁止缓存，每次请求都要向服务器重新获取数据。

:::

## 输入url到显示页面发生过程

一般会经历以下几个过程：

::: warning 详细流程

1. 首先，在浏览器地址栏中输入url
2. **查缓存**：浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。
3. **域名解析**：在发送http请求前，需要域名解析(DNS解析)(DNS（域名系统，Domain Name System）是互联网的一项核心服务，它作为可以将域名和IP地址相互映射的一个分布式数据库，能够使人更方便的访问互联网，而不用去记住IP地址。)，解析获取相应的IP地址。
4. **建立连接**：浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。（TCP即传输控制协议。TCP连接是互联网连接协议集的一种。）
5. 握手成功后，浏览器向服务器发送http请求，请求数据包。
6. **发送数据**：服务器处理收到的请求，将数据返回至浏览器
7. 浏览器收到HTTP响应
8. **渲染页面**：读取页面内容，浏览器渲染，解析html源码
9. 生成Dom树、解析css样式、js交互

10、客户端和服务器交互

11、ajax查询

:::

## CDN

CDN (全称 Content Delivery Network)，即内容分发网络，简单来讲，CDN就是根据用户位置分配最近的资源

#### 1、原理

没有应用CDN时，使用域名访问某一个站点时的路径为

> 用户提交域名→浏览器对域名进行解释→DNS 解析得到目的主机的IP地址→根据IP地址访问发出请求→得到请求数据并回复

应用CDN后，DNS返回的不再是IP地址，而是一个CNAME(Canonical Name ) 别名记录，指向CDN的全局负载均衡。

CNAME实际上在域名解析的过程中承担了中间人（或者说代理）的角色，这是CDN实现的关键。

#### 2、总结

CDN 目的是为了改善互联网的服务质量，通俗一点说其实就是提高访问速度

CDN 构建了全国、全球级别的专网，让用户就近访问专网里的边缘节点，降低了传输延迟，实现了网站加速。

通过CDN的负载均衡系统，智能调度边缘节点提供服务，相当于CDN服务的大脑，而缓存系统相当于CDN的心脏，缓存命中直接返回给用户，否则回源。

## XSS和CSRF

### XSS

**XSS**（Cross Site Scripting）：跨站脚本攻击。XSS的重点不在于跨站点，而在于脚本的执行。

#### 攻击原理

​		XSS攻击的核心原理是：恶意攻击者在web页面中会插入一些恶意的script代码。当用户浏览该页面的时候，那么嵌入到web页面中script代码会执行，因此会达到恶意攻击用户的目的。

分类：反射型、存储型、及 DOM-based型。

反射性和DOM-baseed型可以归类为非持久性XSS攻击。存储型可以归类为持久性XSS攻击。

#### 防御方法：

- HTML转义

  防范XSS攻击最主要的方法是对用户输入的内容进行HTML转义，转义后可以确保用户输入的内容在浏览器中作为文本显示，而不是作为代码解析。

- 验证用户输入

  XSS攻击可以在任何用户可定制内容的地方进行，例如图片引用、自定义链接。仅仅转义HTML中的特殊字符并不能完全规避XSS攻击，因为在某些HTML属性中，使用普通的字符也可以插入javaScript代码。除了转义用户输入外，我们还需要对用户的输入数据进行类型验证。在所有接收到用户输入的地方做好验证工作。

### CSRF

**CSRF**（Cross-site request forgery）：跨站请求伪造。

#### 攻击原理

跨站请求伪造，简单的说，完成CSRF需要两个步骤：
1）登陆受信任的网站A，在本地生成COOKIE。
2）在不登出A的情况下，或者本地COOKIE没有过期的情况下，访问危险网站B。

#### 防御方法

**方法一**、Token 验证：（用的最多）

（1）服务器发送给客户端一个token；

（2）客户端提交的表单中带着这个token。

（3）如果这个 token 不合法，那么服务器拒绝这个请求。

**方法二**：隐藏令牌：

把 token 隐藏在 http 的 head头中。

方法二和方法一有点像，本质上没有太大区别，只是使用方式上有区别。

**方法三**、Referer 验证：

Referer 指的是页面请求来源。意思是，只接受本站的请求，服务器才做响应；如果不是，就拦截。