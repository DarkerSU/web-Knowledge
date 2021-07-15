(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),a("p",[t._v("MVVM分为Model、View、ViewModel三者。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("MVVM")]),t._v(" "),a("p",[t._v("Model 代表数据模型，数据和业务逻辑都在Model层中定义；")]),t._v(" "),a("p",[t._v("View 代表UI视图，负责数据的展示；")]),t._v(" "),a("p",[t._v("ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；")])]),t._v(" "),a("p",[t._v("Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触view 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。")]),t._v(" "),a("p",[t._v("这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 dom。")]),t._v(" "),a("h2",{attrs:{id:"vue响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue响应式原理"}},[t._v("#")]),t._v(" vue响应式原理")]),t._v(" "),a("p",[a("strong",[t._v("vue2.x")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Vue2.x")]),t._v(" "),a("p",[t._v("当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。")]),t._v(" "),a("p",[t._v("每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。")]),t._v(" "),a("p",[t._v("一句话总结：")]),t._v(" "),a("p",[t._v("vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调。")])]),t._v(" "),a("p",[a("strong",[t._v("Vue3.x")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Vue3.x")]),t._v(" "),a("p",[t._v("Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。")]),t._v(" "),a("p",[t._v("Vue 2.x 里,是通过 递归 + 遍历 data 对象来实现对数据的监控的,如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。")]),t._v(" "),a("p",[t._v("Proxy 可以劫持整个对象,并返回一个新的对象。Proxy 不仅可以代理对象,还可以代理数组。还可以代理动态增加的属性。")])]),t._v(" "),a("h2",{attrs:{id:"vue单页面的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue单页面的优缺点"}},[t._v("#")]),t._v(" Vue单页面的优缺点")]),t._v(" "),a("p",[t._v("优点：前后端分离用户体验好一个字快内容改变不需要重新加载整个页面")]),t._v(" "),a("p",[t._v("缺点：不利于seo，初次加载时耗长（浏览器一开始就要加载htmlcssjs，所有的页面内容都包含在主页面中），页面复杂度提高了，导航不可用")]),t._v(" "),a("h2",{attrs:{id:"什么是双向绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是双向绑定"}},[t._v("#")]),t._v(" 什么是双向绑定？")]),t._v(" "),a("p",[a("code",[t._v("Vue")]),t._v(" 是数据双向绑定的框架，双向绑定由三个重要部分构成")]),t._v(" "),a("ul",[a("li",[t._v("数据层（Model）：应用的数据及业务逻辑")]),t._v(" "),a("li",[t._v("视图层（View）：应用的展示效果，各类UI组件")]),t._v(" "),a("li",[t._v("业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来")])]),t._v(" "),a("p",[t._v("ViewModel理解")]),t._v(" "),a("ul",[a("li",[t._v("数据变化后更新视图")]),t._v(" "),a("li",[t._v("视图变化后更新数据")])]),t._v(" "),a("p",[a("code",[t._v("Vue")]),t._v("中的双向绑定流程是什么的")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("new Vue()")]),t._v("首先执行初始化，对"),a("code",[t._v("data")]),t._v("执行响应化处理，这个过程发生"),a("code",[t._v("Observe")]),t._v("中")]),t._v(" "),a("li",[t._v("同时对模板执行编译，找到其中动态绑定的数据，从"),a("code",[t._v("data")]),t._v("中获取并初始化视图，这个过程发生在"),a("code",[t._v("Compile")]),t._v("中")]),t._v(" "),a("li",[t._v("同时定义⼀个更新函数和"),a("code",[t._v("Watcher")]),t._v("，将来对应数据变化时"),a("code",[t._v("Watcher")]),t._v("会调用更新函数")]),t._v(" "),a("li",[t._v("由于"),a("code",[t._v("data")]),t._v("的某个"),a("code",[t._v("key")]),t._v("在⼀个视图中可能出现多次，所以每个"),a("code",[t._v("key")]),t._v("都需要⼀个管家"),a("code",[t._v("Dep")]),t._v("来管理多个"),a("code",[t._v("Watcher")])]),t._v(" "),a("li",[t._v("将来data中数据⼀旦发生变化，会首先找到对应的"),a("code",[t._v("Dep")]),t._v("，通知所有"),a("code",[t._v("Watcher")]),t._v("执行更新函数")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/ciaIaT",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/03/30/ciaIaT.png",alt:"ciaIaT.png"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"v-if-和-v-show-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-有什么区别"}},[t._v("#")]),t._v(" v-if 和 v-show 有什么区别？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("二者区别")]),t._v(" "),a("ul",[a("li",[t._v("v-if 是真正的条件渲染，会控制这个 DOM 节点的存在与否。因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),t._v(" "),a("li",[t._v("v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。")])])]),t._v(" "),a("h2",{attrs:{id:"v-if和v-for为何不建议一起用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for为何不建议一起用"}},[t._v("#")]),t._v(" v-if和v-for为何不建议一起用?")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v(" 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 "),a("code",[t._v("true")]),t._v("值的时候被渲染；")]),t._v(" "),a("p",[a("code",[t._v("v-for")]),t._v(" 指令基于一个数组来渲染一个列表。"),a("code",[t._v("v-for")]),t._v(" 指令需要使用 "),a("code",[t._v("item in items")]),t._v(" 形式的特殊语法，其中 "),a("code",[t._v("items")]),t._v(" 是源数据数组或者对象，而 "),a("code",[t._v("item")]),t._v(" 则是被迭代的数组元素的别名。在 "),a("code",[t._v("v-for")]),t._v(" 的时候，建议设置"),a("code",[t._v("key")]),t._v("值，并且保证每个"),a("code",[t._v("key")]),t._v("值是独一无二的，这便于"),a("code",[t._v("diff")]),t._v("算法进行优化")]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("ol",[a("li",[t._v("永远不要把 "),a("code",[t._v("v-if")]),t._v(" 和 "),a("code",[t._v("v-for")]),t._v(" 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）")]),t._v(" "),a("li",[t._v("如果避免出现这种情况，则在外层嵌套"),a("code",[t._v("template")]),t._v("（页面渲染不生成"),a("code",[t._v("dom")]),t._v("节点），在这一层进行v-if判断，然后在内部进行v-for循环。")])]),t._v(" "),a("h2",{attrs:{id:"vue-中的-key-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-中的-key-的作用"}},[t._v("#")]),t._v(" Vue 中的 key 的作用？")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("key 是给每一个 vnode 的唯一 id,依靠 key,我们的 diff 操作可以更准确、更快速 (对于简单列表页渲染来说 diff 节点也更快,但会产生一些隐藏的副作用,比如可能不会产生过渡效果,或者在某些节点有绑定数据（表单）状态，会出现状态错位。)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("diff 算法的过程中,先会进行新旧节点的首尾交叉对比,当无法匹配的时候会用新节点的 key 与旧节点进行比对,从而找到相应旧节点.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"computed和-watch比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed和-watch比较"}},[t._v("#")]),t._v(" computed和 watch比较？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("区别")]),t._v(" "),a("ul",[a("li",[t._v("computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；")]),t._v(" "),a("li",[t._v("watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("运用场景")]),t._v(" "),a("ul",[a("li",[t._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),t._v(" "),a("li",[t._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")])])]),t._v(" "),a("h2",{attrs:{id:"父、组件生命周期执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父、组件生命周期执行顺序"}},[t._v("#")]),t._v(" 父、组件生命周期执行顺序？")]),t._v(" "),a("p",[t._v("Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：")]),t._v(" "),a("ul",[a("li",[t._v("加载渲染过程 :\n父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted")]),t._v(" "),a("li",[t._v("子组件更新过程 :\n父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated")]),t._v(" "),a("li",[t._v("父组件更新过程 :\n父 beforeUpdate -> 父 updated")]),t._v(" "),a("li",[t._v("销毁过程 :\n父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed")])]),t._v(" "),a("h2",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),a("p",[t._v("keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：")]),t._v(" "),a("ul",[a("li",[t._v("一般结合路由和动态组件一起使用，用于缓存组件；")]),t._v(" "),a("li",[t._v("提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；")]),t._v(" "),a("li",[t._v("对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。")])]),t._v(" "),a("h2",{attrs:{id:"组件间通信有哪几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件间通信有哪几种方式"}},[t._v("#")]),t._v(" 组件间通信有哪几种方式？")]),t._v(" "),a("p",[t._v("Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。")]),t._v(" "),a("p",[t._v("Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。")]),t._v(" "),a("p",[a("strong",[t._v("（1）"),a("code",[t._v("props / $emit")]),t._v("适用 父子组件通信")])]),t._v(" "),a("p",[a("strong",[t._v("（2）"),a("code",[t._v("ref")]),t._v("与 "),a("code",[t._v("$parent / $children")]),t._v("适用 父子组件通信")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("$parent / $children")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ref")]),t._v("：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例")]),t._v(" "),a("li",[a("code",[t._v("$parent / $children")]),t._v("：访问父 / 子实例")])])]),t._v(" "),a("p",[a("strong",[t._v("（3）"),a("code",[t._v("EventBus （$emit / $on）")]),t._v("适用于 父子、隔代、兄弟组件通信")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。")])]),t._v(" "),a("p",[a("strong",[t._v("（4）"),a("code",[t._v("$attrs/$listeners")]),t._v("适用于 隔代组件通信")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$attrs")]),t._v("：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 "),a("code",[t._v('v-bind="$attrs"')]),t._v("传入内部组件。通常配合 inheritAttrs 选项一起使用")]),t._v(" "),a("li",[a("code",[t._v("$listeners")]),t._v("：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 "),a("code",[t._v('v-on="$listeners"')]),t._v("传入内部组件")])])]),t._v(" "),a("p",[a("strong",[t._v("（5）"),a("code",[t._v("provide / inject")]),t._v("适用于 隔代组件通信")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。"),a("code",[t._v("provide / inject API")]),t._v("主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。")])]),t._v(" "),a("p",[a("strong",[t._v("（6）"),a("code",[t._v("Vuex")]),t._v("适用于 父子、隔代、兄弟组件通信")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。")]),t._v(" "),a("li",[t._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),t._v(" "),a("li",[t._v("改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。")])])]),t._v(" "),a("h2",{attrs:{id:"nexttick是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick是什么"}},[t._v("#")]),t._v(" $NextTick是什么？")]),t._v(" "),a("p",[t._v("nextTick()，是将回调函数延迟在下一次dom更新数据后调用，简单的理解是：当数据更新了，在dom中渲染后，自动执行该函数，")]),t._v(" "),a("h4",{attrs:{id:"_1、何时需要vue-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、何时需要vue-nexttick"}},[t._v("#")]),t._v(" 1、何时需要"),a("strong",[t._v("Vue.nextTick()")]),t._v("？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("场景1")]),t._v(" "),a("ol",[a("li",[t._v("Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载已完成。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" that"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不使用this.$nextTick()方法会报错")]),t._v("\n        that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created中更改了按钮内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//写入到DOM元素")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("场景2")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("当项目中你想在"),a("strong",[t._v("改变DOM元素的数据后")]),t._v("基于新的dom做点什么，**对新DOM一系列的js操作都需要放进Vue.nextTick()的回调函数中；**通俗的理解是：更改数据后当你想立即使用js操作新的视图的时候需要使用它")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h3 id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("testMsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      testMsg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"原始值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("changeTxt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" that"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testMsg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"修改后的文本值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vue数据改变，改变dom结构")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" domTxt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后续js对dom的操作")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domTxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出可以看到vue数据修改后DOM并没有立即更新，后续的dom都不是最新的")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domTxt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"原始值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文本data被修改后dom内容没立即更新"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文本data被修改后dom内容被马上更新了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("场景3")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在使用某个第三方插件时 ，希望在vue生成的某些dom动态发生变化时重新应用该插件，也会用到该方法，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。")])])]),t._v(" "),a("h4",{attrs:{id:"_2、vue-nexttick-使用原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、vue-nexttick-使用原理"}},[t._v("#")]),t._v(" 2、Vue.nextTick() 使用原理")]),t._v(" "),a("p",[t._v("原因是，Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。\n当你设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。")]),t._v(" "),a("h2",{attrs:{id:"data属性详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data属性详解"}},[t._v("#")]),t._v(" data属性详解？")]),t._v(" "),a("p",[a("code",[t._v("vue")]),t._v("实例的时候定义"),a("code",[t._v("data")]),t._v("属性既可以是一个对象，也可以是一个函数，但是组件中定义"),a("code",[t._v("data")]),t._v("属性，只能是一个函数")]),t._v(" "),a("ul",[a("li",[t._v("根实例对象"),a("code",[t._v("data")]),t._v("可以是对象也可以是函数（根实例是单例），不会产生数据污染情况")]),t._v(" "),a("li",[t._v("组件实例对象"),a("code",[t._v("data")]),t._v("必须为函数，目的是为了防止多个组件实例对象之间共用一个"),a("code",[t._v("data")]),t._v("，产生数据污染。采用函数的形式，"),a("code",[t._v("initData")]),t._v("时会将其作为工厂函数都会返回全新"),a("code",[t._v("data")]),t._v("对象")])]),t._v(" "),a("h2",{attrs:{id:"为什么vue3-0采用proxy-抛弃-object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么vue3-0采用proxy-抛弃-object-defineproperty"}},[t._v("#")]),t._v(" 为什么Vue3.0采用Proxy,抛弃 Object.defineProperty？")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。Vue 2.x 里,是通过 递归 + 遍历 data 对象来实现对数据的监控的,如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。\n\t\tProxy 可以劫持整个对象,并返回一个新的对象。Proxy 不仅可以代理对象,还可以代理数组。还可以代理动态增加的属性。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"vue与react虚拟dom对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue与react虚拟dom对比"}},[t._v("#")]),t._v(" vue与react虚拟dom对比")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("相同点")]),t._v(" "),a("p",[t._v("vue和react都采用了虚拟dom算法，以最小化更新真实DOM，从而减小不必要的性能损耗。")]),t._v(" "),a("p",[t._v("按颗粒度分为tree diff, component diff, element diff. tree diff 比较同层级dom节点，进行增、删、移操作。如果遇到component， 就会重新tree diff流程。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("不同点")]),t._v(" "),a("p",[t._v("react 会自顶向下全diff.")]),t._v(" "),a("p",[t._v("vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树。")]),t._v(" "),a("ol",[a("li",[t._v("在react中，当状态发生改变时，组件树就会自顶向下的全diff, 重新render页面， 重新生成新的虚拟dom tree, 新旧dom tree进行比较， 进行patch打补丁方式，局部跟新dom. 所以react为了避免父组件跟新而引起不必要的子组件更新， 可以在shouldComponentUpdate做逻辑判断，减少没必要的render， 以及重新生成虚拟dom，做差量对比过程.")]),t._v(" "),a("li",[t._v("在 vue中， 通过Object.defineProperty 把这些 data 属性 全部转为 getter/setter。同时watcher实例对象会在组件渲染时，将属性记录为dep, 当dep 项中的 setter被调用时，通知watch重新计算，使得关联组件更新。")])])]),t._v(" "),a("h2",{attrs:{id:"对-vue-项目进行哪些优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-vue-项目进行哪些优化"}},[t._v("#")]),t._v(" 对 Vue 项目进行哪些优化？")]),t._v(" "),a("p",[t._v("（1）代码层面的优化")]),t._v(" "),a("ul",[a("li",[t._v("v-if 和 v-show 区分使用场景")]),t._v(" "),a("li",[t._v("computed 和 watch 区分使用场景")]),t._v(" "),a("li",[t._v("v-for 遍历必须为 item 添加 key，且避免同时使用 v-if")]),t._v(" "),a("li",[t._v("长列表性能优化")]),t._v(" "),a("li",[t._v("事件的销毁")]),t._v(" "),a("li",[t._v("图片资源懒加载")]),t._v(" "),a("li",[t._v("路由懒加载")]),t._v(" "),a("li",[t._v("第三方插件的按需引入")]),t._v(" "),a("li",[t._v("优化无限列表性能")]),t._v(" "),a("li",[t._v("服务端渲染 SSR（将SPA应用打包到服务器上，在服务器上渲染出HTML，发送到浏览器） or 预渲染")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("（2）Webpack 层面的优化")]),t._v(" "),a("ul",[a("li",[t._v("Webpack 对图片进行压缩")]),t._v(" "),a("li",[t._v("减少 ES6 转为 ES5 的冗余代码")]),t._v(" "),a("li",[t._v("提取公共代码")]),t._v(" "),a("li",[t._v("模板预编译")]),t._v(" "),a("li",[t._v("提取组件的 CSS")]),t._v(" "),a("li",[t._v("优化 SourceMap")]),t._v(" "),a("li",[t._v("构建结果输出分析")]),t._v(" "),a("li",[t._v("Vue 项目的编译优化")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("（3）基础的 Web 技术的优化")]),t._v(" "),a("ul",[a("li",[t._v("开启 gzip 压缩")]),t._v(" "),a("li",[t._v("浏览器缓存")]),t._v(" "),a("li",[t._v("CDN 的使用")]),t._v(" "),a("li",[t._v("使用 Chrome Performance 查找性能瓶颈")])])])}),[],!1,null,null,null);s.default=n.exports}}]);