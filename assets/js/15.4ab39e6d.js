(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{369:function(t,s,e){"use strict";e.r(s);var a=e(42),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),e("p",[t._v("MVVM分为Model、View、ViewModel三者。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("MVVM")]),t._v(" "),e("p",[t._v("Model 代表数据模型，数据和业务逻辑都在Model层中定义；")]),t._v(" "),e("p",[t._v("View 代表UI视图，负责数据的展示；")]),t._v(" "),e("p",[t._v("ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；")])]),t._v(" "),e("p",[t._v("Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触view 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。")]),t._v(" "),e("p",[t._v("这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 dom。")]),t._v(" "),e("h2",{attrs:{id:"vue单页面的优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue单页面的优缺点"}},[t._v("#")]),t._v(" Vue单页面的优缺点")]),t._v(" "),e("p",[t._v("优点：前后端分离用户体验好一个字快内容改变不需要重新加载整个页面")]),t._v(" "),e("p",[t._v("缺点：不利于seo，初次加载时耗长（浏览器一开始就要加载htmlcssjs，所有的页面内容都包含在主页面中），页面复杂度提高了，导航不可用")]),t._v(" "),e("h2",{attrs:{id:"什么是双向绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是双向绑定"}},[t._v("#")]),t._v(" 什么是双向绑定？")]),t._v(" "),e("p",[e("code",[t._v("Vue")]),t._v(" 是数据双向绑定的框架，双向绑定由三个重要部分构成")]),t._v(" "),e("ul",[e("li",[t._v("数据层（Model）：应用的数据及业务逻辑")]),t._v(" "),e("li",[t._v("视图层（View）：应用的展示效果，各类UI组件")]),t._v(" "),e("li",[t._v("业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来")])]),t._v(" "),e("p",[t._v("ViewModel理解")]),t._v(" "),e("ul",[e("li",[t._v("数据变化后更新视图")]),t._v(" "),e("li",[t._v("视图变化后更新数据")])]),t._v(" "),e("p",[e("code",[t._v("Vue")]),t._v("中的双向绑定流程是什么的")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("new Vue()")]),t._v("首先执行初始化，对"),e("code",[t._v("data")]),t._v("执行响应化处理，这个过程发生"),e("code",[t._v("Observe")]),t._v("中")]),t._v(" "),e("li",[t._v("同时对模板执行编译，找到其中动态绑定的数据，从"),e("code",[t._v("data")]),t._v("中获取并初始化视图，这个过程发生在"),e("code",[t._v("Compile")]),t._v("中")]),t._v(" "),e("li",[t._v("同时定义⼀个更新函数和"),e("code",[t._v("Watcher")]),t._v("，将来对应数据变化时"),e("code",[t._v("Watcher")]),t._v("会调用更新函数")]),t._v(" "),e("li",[t._v("由于"),e("code",[t._v("data")]),t._v("的某个"),e("code",[t._v("key")]),t._v("在⼀个视图中可能出现多次，所以每个"),e("code",[t._v("key")]),t._v("都需要⼀个管家"),e("code",[t._v("Dep")]),t._v("来管理多个"),e("code",[t._v("Watcher")])]),t._v(" "),e("li",[t._v("将来data中数据⼀旦发生变化，会首先找到对应的"),e("code",[t._v("Dep")]),t._v("，通知所有"),e("code",[t._v("Watcher")]),t._v("执行更新函数")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgtu.com/i/ciaIaT",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://z3.ax1x.com/2021/03/30/ciaIaT.png",alt:"ciaIaT.png"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"v-if-和-v-show-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-有什么区别"}},[t._v("#")]),t._v(" v-if 和 v-show 有什么区别？")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("二者区别")]),t._v(" "),e("ul",[e("li",[t._v("v-if 是真正的条件渲染，会控制这个 DOM 节点的存在与否。因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),t._v(" "),e("li",[t._v("v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。")])])]),t._v(" "),e("h2",{attrs:{id:"v-if和v-for为何不建议一起用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for为何不建议一起用"}},[t._v("#")]),t._v(" v-if和v-for为何不建议一起用?")]),t._v(" "),e("p",[e("code",[t._v("v-if")]),t._v(" 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 "),e("code",[t._v("true")]),t._v("值的时候被渲染；")]),t._v(" "),e("p",[e("code",[t._v("v-for")]),t._v(" 指令基于一个数组来渲染一个列表。"),e("code",[t._v("v-for")]),t._v(" 指令需要使用 "),e("code",[t._v("item in items")]),t._v(" 形式的特殊语法，其中 "),e("code",[t._v("items")]),t._v(" 是源数据数组或者对象，而 "),e("code",[t._v("item")]),t._v(" 则是被迭代的数组元素的别名。在 "),e("code",[t._v("v-for")]),t._v(" 的时候，建议设置"),e("code",[t._v("key")]),t._v("值，并且保证每个"),e("code",[t._v("key")]),t._v("值是独一无二的，这便于"),e("code",[t._v("diff")]),t._v("算法进行优化")]),t._v(" "),e("p",[t._v("总结：")]),t._v(" "),e("ol",[e("li",[t._v("永远不要把 "),e("code",[t._v("v-if")]),t._v(" 和 "),e("code",[t._v("v-for")]),t._v(" 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）")]),t._v(" "),e("li",[t._v("如果避免出现这种情况，则在外层嵌套"),e("code",[t._v("template")]),t._v("（页面渲染不生成"),e("code",[t._v("dom")]),t._v("节点），在这一层进行v-if判断，然后在内部进行v-for循环")])]),t._v(" "),e("h2",{attrs:{id:"computed-和-watch-比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-比较"}},[t._v("#")]),t._v(" computed 和 watch 比较？")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("区别")]),t._v(" "),e("ul",[e("li",[t._v("computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；")]),t._v(" "),e("li",[t._v("watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("运用场景")]),t._v(" "),e("ul",[e("li",[t._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),t._v(" "),e("li",[t._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")])])]),t._v(" "),e("h2",{attrs:{id:"父、组件生命周期执行顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父、组件生命周期执行顺序"}},[t._v("#")]),t._v(" 父、组件生命周期执行顺序？")]),t._v(" "),e("p",[t._v("Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：")]),t._v(" "),e("ul",[e("li",[t._v("加载渲染过程 :\n父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted")]),t._v(" "),e("li",[t._v("子组件更新过程 :\n父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated")]),t._v(" "),e("li",[t._v("父组件更新过程 :\n父 beforeUpdate -> 父 updated")]),t._v(" "),e("li",[t._v("销毁过程 :\n父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed")])]),t._v(" "),e("h2",{attrs:{id:"keep-alive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),e("p",[t._v("keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：")]),t._v(" "),e("ul",[e("li",[t._v("一般结合路由和动态组件一起使用，用于缓存组件；")]),t._v(" "),e("li",[t._v("提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；")]),t._v(" "),e("li",[t._v("对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。")])]),t._v(" "),e("h2",{attrs:{id:"vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),e("p",[t._v("Vuex是一个专为vue.js应用程序开发的状态管理模式，通过创建一个集中的数据存储，方便程序中的所有组件进行访问，简单来说vuex就是vue的状态管理工具")]),t._v(" "),e("p",[t._v("Vuex有五个属性state、getters、mutations、actions、modules。")]),t._v(" "),e("p",[t._v("State就是数据源存放地，对应一般vue对象的data，state里面存放的数据是响应式的，state数据发生改变，对应这个数据的组件也会发生改变用this.$store.state.xxx调用；")]),t._v(" "),e("p",[t._v("Getters相当于store的计算属性，主要是对state中数据的过滤，用this.$store.getters.xxx调用；")]),t._v(" "),e("p",[t._v("Mutations处理数据逻辑的方法全部放在mutations中，当触发事件想改变state数据的时候使用mutations，用this.$store.commit调用，给这个方法添加一个参数，就是mutation的载荷（payload）；")]),t._v(" "),e("p",[t._v("Actions异步操作数据，但是是通过mutation来操作用this.$store.dispatch来触发，actions也支持载荷")]),t._v(" "),e("p",[t._v("使用场景：组件之间的状态，登录状态，加入购物车，音乐播放")]),t._v(" "),e("h2",{attrs:{id:"组件间通信有哪几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件间通信有哪几种方式"}},[t._v("#")]),t._v(" 组件间通信有哪几种方式？")]),t._v(" "),e("p",[t._v("Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。")]),t._v(" "),e("p",[t._v("Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。")]),t._v(" "),e("p",[e("strong",[t._v("（1）"),e("code",[t._v("props / $emit")]),t._v("适用 父子组件通信")])]),t._v(" "),e("p",[e("strong",[t._v("（2）"),e("code",[t._v("ref")]),t._v("与 "),e("code",[t._v("$parent / $children")]),t._v("适用 父子组件通信")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("$parent / $children")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ref")]),t._v("：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例")]),t._v(" "),e("li",[e("code",[t._v("$parent / $children")]),t._v("：访问父 / 子实例")])])]),t._v(" "),e("p",[e("strong",[t._v("（3）"),e("code",[t._v("EventBus （$emit / $on）")]),t._v("适用于 父子、隔代、兄弟组件通信")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。")])]),t._v(" "),e("p",[e("strong",[t._v("（4）"),e("code",[t._v("$attrs/$listeners")]),t._v("适用于 隔代组件通信")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("$attrs")]),t._v("：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 "),e("code",[t._v('v-bind="$attrs"')]),t._v("传入内部组件。通常配合 inheritAttrs 选项一起使用")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("$listeners")]),t._v("：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 "),e("code",[t._v('v-on="$listeners"')]),t._v("传入内部组件")])])])]),t._v(" "),e("p",[e("strong",[t._v("（5）"),e("code",[t._v("provide / inject")]),t._v("适用于 隔代组件通信")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。"),e("code",[t._v("provide / inject API")]),t._v("主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。")])]),t._v(" "),e("p",[e("strong",[t._v("（6）"),e("code",[t._v("Vuex")]),t._v("适用于 父子、隔代、兄弟组件通信")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。")]),t._v(" "),e("li",[t._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),e("li",[t._v("改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。")])])]),t._v(" "),e("h2",{attrs:{id:"vue-router-路由模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-路由模式"}},[t._v("#")]),t._v(" vue-router 路由模式？")]),t._v(" "),e("p",[t._v("vue-router 有 3 种路由模式：hash、history、abstract，对应的源码如下所示：")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTML5History")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hash'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashHistory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fallback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abstract'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractHistory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("invalid mode: ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mode"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("p",[t._v("其中，3 种路由模式的说明如下：")]),t._v(" "),e("ul",[e("li",[t._v("hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；")]),t._v(" "),e("li",[t._v("history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；")]),t._v(" "),e("li",[t._v("abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.")])]),t._v(" "),e("h2",{attrs:{id:"nexttick是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexttick是什么"}},[t._v("#")]),t._v(" $NextTick是什么？")]),t._v(" "),e("h2",{attrs:{id:"data属性详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data属性详解"}},[t._v("#")]),t._v(" data属性详解？")]),t._v(" "),e("p",[e("code",[t._v("vue")]),t._v("实例的时候定义"),e("code",[t._v("data")]),t._v("属性既可以是一个对象，也可以是一个函数，但是组件中定义"),e("code",[t._v("data")]),t._v("属性，只能是一个函数")]),t._v(" "),e("ul",[e("li",[t._v("根实例对象"),e("code",[t._v("data")]),t._v("可以是对象也可以是函数（根实例是单例），不会产生数据污染情况")]),t._v(" "),e("li",[t._v("组件实例对象"),e("code",[t._v("data")]),t._v("必须为函数，目的是为了防止多个组件实例对象之间共用一个"),e("code",[t._v("data")]),t._v("，产生数据污染。采用函数的形式，"),e("code",[t._v("initData")]),t._v("时会将其作为工厂函数都会返回全新"),e("code",[t._v("data")]),t._v("对象")])]),t._v(" "),e("h2",{attrs:{id:"vue响应式原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue响应式原理"}},[t._v("#")]),t._v(" vue响应式原理")]),t._v(" "),e("p",[e("strong",[t._v("vue2.x")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Vue2.x")]),t._v(" "),e("p",[t._v("当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。")]),t._v(" "),e("p",[t._v("每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。")]),t._v(" "),e("p",[t._v("一句话总结：")]),t._v(" "),e("p",[t._v("vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调。")])]),t._v(" "),e("p",[e("strong",[t._v("Vue3.x")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Vue3.x")]),t._v(" "),e("p",[t._v("Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。")]),t._v(" "),e("p",[t._v("Vue 2.x 里,是通过 递归 + 遍历 data 对象来实现对数据的监控的,如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。")]),t._v(" "),e("p",[t._v("Proxy 可以劫持整个对象,并返回一个新的对象。Proxy 不仅可以代理对象,还可以代理数组。还可以代理动态增加的属性。")])]),t._v(" "),e("h2",{attrs:{id:"vue与react虚拟dom对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue与react虚拟dom对比"}},[t._v("#")]),t._v(" vue与react虚拟dom对比")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("相同点")]),t._v(" "),e("p",[t._v("vue和react都采用了虚拟dom算法，以最小化更新真实DOM，从而减小不必要的性能损耗。")]),t._v(" "),e("p",[t._v("按颗粒度分为tree diff, component diff, element diff. tree diff 比较同层级dom节点，进行增、删、移操作。如果遇到component， 就会重新tree diff流程。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("不同点")]),t._v(" "),e("p",[t._v("react 会自顶向下全diff.")]),t._v(" "),e("p",[t._v("vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树。")]),t._v(" "),e("ol",[e("li",[t._v("在react中，当状态发生改变时，组件树就会自顶向下的全diff, 重新render页面， 重新生成新的虚拟dom tree, 新旧dom tree进行比较， 进行patch打补丁方式，局部跟新dom. 所以react为了避免父组件跟新而引起不必要的子组件更新， 可以在shouldComponentUpdate做逻辑判断，减少没必要的render， 以及重新生成虚拟dom，做差量对比过程.")]),t._v(" "),e("li",[t._v("在 vue中， 通过Object.defineProperty 把这些 data 属性 全部转为 getter/setter。同时watcher实例对象会在组件渲染时，将属性记录为dep, 当dep 项中的 setter被调用时，通知watch重新计算，使得关联组件更新。")])])]),t._v(" "),e("h2",{attrs:{id:"对-vue-项目进行哪些优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对-vue-项目进行哪些优化"}},[t._v("#")]),t._v(" 对 Vue 项目进行哪些优化？")]),t._v(" "),e("p",[t._v("（1）代码层面的优化")]),t._v(" "),e("ul",[e("li",[t._v("v-if 和 v-show 区分使用场景")]),t._v(" "),e("li",[t._v("computed 和 watch 区分使用场景")]),t._v(" "),e("li",[t._v("v-for 遍历必须为 item 添加 key，且避免同时使用 v-if")]),t._v(" "),e("li",[t._v("长列表性能优化")]),t._v(" "),e("li",[t._v("事件的销毁")]),t._v(" "),e("li",[t._v("图片资源懒加载")]),t._v(" "),e("li",[t._v("路由懒加载")]),t._v(" "),e("li",[t._v("第三方插件的按需引入")]),t._v(" "),e("li",[t._v("优化无限列表性能")]),t._v(" "),e("li",[t._v("服务端渲染 SSR（将SPA应用打包到服务器上，在服务器上渲染出HTML，发送到浏览器） or 预渲染")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("（2）Webpack 层面的优化")]),t._v(" "),e("ul",[e("li",[t._v("Webpack 对图片进行压缩")]),t._v(" "),e("li",[t._v("减少 ES6 转为 ES5 的冗余代码")]),t._v(" "),e("li",[t._v("提取公共代码")]),t._v(" "),e("li",[t._v("模板预编译")]),t._v(" "),e("li",[t._v("提取组件的 CSS")]),t._v(" "),e("li",[t._v("优化 SourceMap")]),t._v(" "),e("li",[t._v("构建结果输出分析")]),t._v(" "),e("li",[t._v("Vue 项目的编译优化")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("（3）基础的 Web 技术的优化")]),t._v(" "),e("ul",[e("li",[t._v("开启 gzip 压缩")]),t._v(" "),e("li",[t._v("浏览器缓存")]),t._v(" "),e("li",[t._v("CDN 的使用")]),t._v(" "),e("li",[t._v("使用 Chrome Performance 查找性能瓶颈")])])])}),[],!1,null,null,null);s.default=v.exports}}]);