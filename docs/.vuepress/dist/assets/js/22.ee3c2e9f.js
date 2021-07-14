(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{376:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"js时间循环机制-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js时间循环机制-event-loop"}},[s._v("#")]),s._v(" js时间循环机制（event-loop）")]),s._v(" "),a("p",[s._v("时间循环机制由三部分组成")]),s._v(" "),a("p",[a("strong",[s._v("调用栈")]),s._v(" "),a("strong",[s._v("微任务队列")]),s._v(" "),a("strong",[s._v("消息队列")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注：")]),s._v(" "),a("p",[s._v("event-loop开始时，会从全局一行一行的执行，遇到函数调用，会压入到调用栈中，被压入的函数被称为帧，当函数返回后回从调用栈中弹出")]),s._v(" "),a("p",[s._v("js中异步操作，比如fetch、setTimeout、setInterval压入调用栈中的时候里面的消息会进入到消息队列中，消息队列中的会等到调用栈清空之后再执行")]),s._v(" "),a("p",[s._v("promise、async、await的异步操作的时候会加入到微任务队列中去，会在调用栈清空的时候立即执行，调用栈中加入的微任务会立马执行")])]),s._v(" "),a("h2",{attrs:{id:"浏览器渲染流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染流程"}},[s._v("#")]),s._v(" 浏览器渲染流程")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("流程：")]),s._v(" "),a("p",[s._v("DNS解析：把域名解析成IP地址")]),s._v(" "),a("p",[s._v("TCP 建立连接：TCP三次握手")]),s._v(" "),a("p",[s._v("发送HTTP请求")]),s._v(" "),a("p",[s._v("服务器处理并响应报文")]),s._v(" "),a("p",[s._v("浏览器解析并渲染页面")]),s._v(" "),a("p",[s._v("断开连接：TCP 结束连接")])]),s._v(" "),a("h2",{attrs:{id:"http的请求方式及用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http的请求方式及用途"}},[s._v("#")]),s._v(" HTTP的请求方式及用途")]),s._v(" "),a("p",[a("strong",[s._v("GET方法")])]),s._v(" "),a("p",[s._v("发送一个请求来取得服务器上的某一资源")]),s._v(" "),a("p",[a("strong",[s._v("POST方法")])]),s._v(" "),a("p",[s._v("向URL指定的资源提交数据或附加新的数据")]),s._v(" "),a("p",[a("strong",[s._v("PUT方法")])]),s._v(" "),a("p",[s._v("跟POST方法很像，也是想服务器提交数据。但是，它们之间有不同。PUT指定了资源在服务器上的位置，而POST没有")]),s._v(" "),a("p",[a("strong",[s._v("HEAD方法")])]),s._v(" "),a("p",[s._v("只请求页面的首部")]),s._v(" "),a("p",[a("strong",[s._v("DELETE方法")])]),s._v(" "),a("p",[s._v("删除服务器上的某资源")]),s._v(" "),a("p",[a("strong",[s._v("OPTIONS方法")])]),s._v(" "),a("p",[s._v("它用于获取当前URL所支持的方法。如果请求成功，会有一个Allow的头包含类似“GET,POST”这样的信息")]),s._v(" "),a("p",[a("strong",[s._v("TRACE方法")])]),s._v(" "),a("p",[s._v("TRACE方法被用于激发一个远程的，应用层的请求消息回路")]),s._v(" "),a("p",[a("strong",[s._v("CONNECT方法")])]),s._v(" "),a("p",[s._v("把请求连接转换到透明的TCP/IP通道")]),s._v(" "),a("h2",{attrs:{id:"前端性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[s._v("#")]),s._v(" 前端性能优化")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("优化方案")]),s._v(" "),a("p",[s._v("1.压缩 css, js, 图片")]),s._v(" "),a("p",[s._v("2.减少 http 请求次数， 合并 css、js 、合并图片（雪碧图）")]),s._v(" "),a("p",[s._v("3.使用 CDN")]),s._v(" "),a("p",[s._v("4.减少 dom 元素数量")]),s._v(" "),a("p",[s._v("5.图片懒加载")]),s._v(" "),a("p",[s._v("6.静态资源另外用无 cookie 的域名")]),s._v(" "),a("p",[s._v("7.减少 dom 的访问（缓存 dom）")]),s._v(" "),a("p",[s._v("8.巧用事件委托")]),s._v(" "),a("p",[s._v("9.样式表置顶、脚本置低")])]),s._v(" "),a("h2",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[s._v("#")]),s._v(" 跨域")]),s._v(" "),a("h3",{attrs:{id:"_1、webpack-proxy-前端方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、webpack-proxy-前端方式"}},[s._v("#")]),s._v(" 1、webpack proxy（前端方式）")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//代理")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:3000/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2、cors-后端方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、cors-后端方式"}},[s._v("#")]),s._v(" 2、cors（后端方式）")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("allowCorssDomain")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求源")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求头")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Headers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求方法 get/post/delete/put")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Methods'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("allowCorssDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_3、中间件-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、中间件-nginx"}},[s._v("#")]),s._v(" 3、中间件（nginx）")]),s._v(" "),a("h3",{attrs:{id:"_4、webpack-plugin-前端方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、webpack-plugin-前端方式"}},[s._v("#")]),s._v(" 4、webpack plugin （前端方式 ）")]),s._v(" "),a("p",[s._v("webpack-dev-middleware设置在服务端。是客户端和服务端在用一个文件下")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" middleware"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-dev-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compiler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("webpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./webpack.config.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compiler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_5、vue-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、vue-proxy"}},[s._v("#")]),s._v(" 5、Vue proxy")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置后台数据请求代理 ")]),s._v("\n    proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:5055'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//代理的目标服务器")]),s._v("\n            changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//路径重写")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"cookie和session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session"}},[s._v("#")]),s._v(" cookie和session")]),s._v(" "),a("p",[s._v("cookie和session都是用来跟踪浏览器用户身份的会话方式。")]),s._v(" "),a("p",[s._v("区别：")]),s._v(" "),a("ol",[a("li",[s._v("保持状态：cookie保存在浏览器端，session保存在服务器端")]),s._v(" "),a("li",[s._v("使用方式：")])]),s._v(" "),a("p",[s._v("（1）cookie机制：如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。")]),s._v(" "),a("p",[s._v("Cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它")]),s._v(" "),a("p",[s._v("（2）session机制：当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含sessionid。如果有sessionid，服务器将根据该id返回对应session对象。如果客户端请求中没有sessionid，服务器会创建新的session对象，并把sessionid在本次响应中返回给客户端。通常使用cookie方式存储sessionid到客户端，在交互中浏览器按照规则将sessionid发送给服务器。如果用户禁用cookie，则要使用URL重写，可以通过response.encodeURL(url) 进行实现；API对encodeURL的结束为，当浏览器支持Cookie时，url不做任何处理；当浏览器不支持Cookie的时候，将会重写URL将SessionID拼接到访问地址后。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("存储内容：cookie只能保存字符串类型，以文本的方式；session通过类似与Hashtable的数据结构来保存，能支持任何类型的对象(session中可含有多个对象)")]),s._v(" "),a("li",[s._v("存储的大小：cookie：单个cookie保存的数据不能超过4kb；session大小没有限制。")]),s._v(" "),a("li",[s._v("安全性：cookie：针对cookie所存在的攻击：Cookie欺骗，Cookie截获；session的安全性大于cookie。")])]),s._v(" "),a("p",[s._v("原因如下：（1）sessionID存储在cookie中，若要攻破session首先要攻破cookie；")]),s._v(" "),a("p",[s._v("（2）sessionID是要有人登录，或者启动session_start才会有，所以攻破cookie也不一定能得到sessionID；")]),s._v(" "),a("p",[s._v("（3）第二次启动session_start后，前一次的sessionID就是失效了，session过期后，sessionID也随之失效。")]),s._v(" "),a("p",[s._v("（4）sessionID是加密的")]),s._v(" "),a("p",[s._v("（5）综上所述，攻击者必须在短时间内攻破加密的sessionID，这很难。")]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("应用场景：")])]),s._v(" "),a("p",[s._v("cookie：（1）判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除cookie，则每次登录必须从新填写登录的相关信息。")]),s._v(" "),a("p",[s._v("（2）保存上次登录的时间等信息。")]),s._v(" "),a("p",[s._v("（3）保存上次查看的页面")]),s._v(" "),a("p",[s._v("（4）浏览计数")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1287779/201804/1287779-20180404062350828-745185789.png",alt:"img"}})]),s._v(" "),a("p",[s._v("session：Session用于保存每个用户的专用信息，变量的值保存在服务器端，通过SessionID来区分不同的客户。")]),s._v(" "),a("p",[s._v("（1）网上商城中的购物车")]),s._v(" "),a("p",[s._v("（2）保存用户登录信息")]),s._v(" "),a("p",[s._v("（3）将某些数据放入session中，供同一用户的不同页面使用")]),s._v(" "),a("p",[s._v("（4）防止用户非法登录")]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[s._v("缺点：cookie：（1）大小受限")])]),s._v(" "),a("p",[s._v("（2）用户可以操作（禁用）cookie，使功能受限")]),s._v(" "),a("p",[s._v("（3）安全性较低")]),s._v(" "),a("p",[s._v("（4）有些状态不可能保存在客户端。")]),s._v(" "),a("p",[s._v("（5）每次访问都要传送cookie给服务器，浪费带宽。")]),s._v(" "),a("p",[s._v("（6）cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下。")]),s._v(" "),a("p",[s._v("session：（1）Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。")]),s._v(" "),a("p",[s._v("（2）依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全")]),s._v(" "),a("p",[s._v("（3）创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。")]),s._v(" "),a("h2",{attrs:{id:"cookies-sessionstorage和localstorage区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies-sessionstorage和localstorage区别"}},[s._v("#")]),s._v(" cookies sessionStorage和localstorage区别")]),s._v(" "),a("ul",[a("li",[s._v("cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）")]),s._v(" "),a("li",[s._v("cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递")]),s._v(" "),a("li",[s._v("**"),a("code",[s._v("sessionStorage")]),a("strong",[s._v("和")]),a("code",[s._v("localStorage")]),s._v("**不会自动把数据发给服务器，仅在本地保存")]),s._v(" "),a("li",[a("strong",[s._v("存储大小：")]),s._v(" "),a("ul",[a("li",[s._v("cookie数据大小不能超过4k")]),s._v(" "),a("li",[s._v("**"),a("code",[s._v("sessionStorage")]),a("strong",[s._v("和")]),a("code",[s._v("localStorage")]),s._v("**虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大")])])]),s._v(" "),a("li",[a("strong",[s._v("有期时间：")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("localStorage")])]),s._v(" 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("sessionStorage")])]),s._v(" 数据在当前浏览器窗口关闭后自动删除")]),s._v(" "),a("li",[s._v("cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭")])])])]),s._v(" "),a("h2",{attrs:{id:"http-和-https-比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-和-https-比较"}},[s._v("#")]),s._v(" http 和 https 比较")]),s._v(" "),a("p",[s._v("http是HTTP协议运行在TCP之上。所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。")]),s._v(" "),a("p",[s._v("https是HTTP运行在SSL/TLS之上，SSL/TLS运行在TCP之上。所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。此外客户端可以验证服务器端的身份，如果配置了客户端验证，服务器方也可以验证客户端的身份")]),s._v(" "),a("h2",{attrs:{id:"浏览器缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[s._v("#")]),s._v(" 浏览器缓存机制")]),s._v(" "),a("p",[s._v("浏览器缓存分为强缓存和协商缓存")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("强缓存")]),s._v("：利用http的返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源的缓存时间")]),s._v(" "),a("li",[a("strong",[s._v("协商缓存")]),s._v("：客户端向服务器端发出请求，服务端会检测是否有对应的标识，如果没有对应的标识，服务器端会返回一个对应的标识给客户端，客户端下次再次请求的时候，把该标识带过去，然后服务器端会验证该标识，如果验证通过了，则会响应304，告诉浏览器读取缓存。如果标识没有通过，则返回请求的资源。")])]),s._v(" "),a("p",[a("strong",[s._v("Cache-Control")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("cache-control取值")]),s._v(" "),a("p",[s._v("Cache-Control 可以由多个字段组合而成，主要有以下几个取值：")]),s._v(" "),a("p",[a("strong",[s._v("max-age")]),s._v("：定一个时间长度，在这个时间段内缓存是有效的，单位是s。")]),s._v(" "),a("p",[a("strong",[s._v("public")]),s._v(" ：表明响应可以被任何对象（发送请求的客户端、代理服务器等等）缓存。")]),s._v(" "),a("p",[a("strong",[s._v("private")]),s._v(" ：表明响应只能被单个用户（可能是操作系统用户、浏览器用户）缓存，是非共享的，不能被代理服务器缓存。")]),s._v(" "),a("p",[a("strong",[s._v("no-cache")]),s._v(" ：强制所有缓存了该响应的用户，在使用已缓存的数据前，发送带验证器的请求到服务器。不是字面意思上的不缓存。")]),s._v(" "),a("p",[a("strong",[s._v("no-store")]),s._v(" ：禁止缓存，每次请求都要向服务器重新获取数据。")])]),s._v(" "),a("h2",{attrs:{id:"输入url到显示页面发生过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入url到显示页面发生过程"}},[s._v("#")]),s._v(" 输入url到显示页面发生过程")]),s._v(" "),a("p",[s._v("一般会经历以下几个过程：")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("详细流程")]),s._v(" "),a("ol",[a("li",[s._v("首先，在浏览器地址栏中输入url")]),s._v(" "),a("li",[a("strong",[s._v("查缓存")]),s._v("：浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。")]),s._v(" "),a("li",[a("strong",[s._v("域名解析")]),s._v("：在发送http请求前，需要域名解析(DNS解析)(DNS（域名系统，Domain Name System）是互联网的一项核心服务，它作为可以将域名和IP地址相互映射的一个分布式数据库，能够使人更方便的访问互联网，而不用去记住IP地址。)，解析获取相应的IP地址。")]),s._v(" "),a("li",[a("strong",[s._v("建立连接")]),s._v("：浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。（TCP即传输控制协议。TCP连接是互联网连接协议集的一种。）")]),s._v(" "),a("li",[s._v("握手成功后，浏览器向服务器发送http请求，请求数据包。")]),s._v(" "),a("li",[a("strong",[s._v("发送数据")]),s._v("：服务器处理收到的请求，将数据返回至浏览器")]),s._v(" "),a("li",[s._v("浏览器收到HTTP响应")]),s._v(" "),a("li",[a("strong",[s._v("渲染页面")]),s._v("：读取页面内容，浏览器渲染，解析html源码")]),s._v(" "),a("li",[s._v("生成Dom树、解析css样式、js交互")])]),s._v(" "),a("p",[s._v("10、客户端和服务器交互")]),s._v(" "),a("p",[s._v("11、ajax查询")])]),s._v(" "),a("h2",{attrs:{id:"xss和csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss和csrf"}},[s._v("#")]),s._v(" XSS和CSRF")]),s._v(" "),a("p",[a("strong",[s._v("XSS")]),s._v("（Cross Site Scripting）：跨域脚本攻击。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("攻击原理及防御")]),s._v(" "),a("p",[s._v("XSS攻击的核心原理是：不需要你做任何的登录认证，它会通过合法的操作（比如在url中输入、在评论框中输入），向你的页面注入脚本（可能是js、hmtl代码块等）")]),s._v(" "),a("p",[s._v("XSS：将一些隐私数据像cookie，session发给攻击者，将受害者重定向到一个有攻击者控制的网站")])]),s._v(" "),a("p",[a("strong",[s._v("CSRF")]),s._v("（Cross-site request forgery）：跨站请求伪造。")]),s._v(" "),a("p",[s._v("CSRF如何防御：")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("防御方法")]),s._v(" "),a("p",[a("strong",[s._v("方法一")]),s._v("、Token 验证：（用的最多）")]),s._v(" "),a("p",[s._v("（1）服务器发送给客户端一个token；")]),s._v(" "),a("p",[s._v("（2）客户端提交的表单中带着这个token。")]),s._v(" "),a("p",[s._v("（3）如果这个 token 不合法，那么服务器拒绝这个请求。")]),s._v(" "),a("p",[a("strong",[s._v("方法二")]),s._v("：隐藏令牌：")]),s._v(" "),a("p",[s._v("把 token 隐藏在 http 的 head头中。")]),s._v(" "),a("p",[s._v("方法二和方法一有点像，本质上没有太大区别，只是使用方式上有区别。")]),s._v(" "),a("p",[a("strong",[s._v("方法三")]),s._v("、Referer 验证：")]),s._v(" "),a("p",[s._v("Referer 指的是页面请求来源。意思是，只接受本站的请求，服务器才做响应；如果不是，就拦截。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);