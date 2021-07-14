## MVVM

MVVM分为Model、View、ViewModel三者。

::: tip MVVM

Model 代表数据模型，数据和业务逻辑都在Model层中定义；

View 代表UI视图，负责数据的展示；

ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；

:::

Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触view 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。

这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 dom。

## Vue单页面的优缺点

优点：前后端分离用户体验好一个字快内容改变不需要重新加载整个页面

缺点：不利于seo，初次加载时耗长（浏览器一开始就要加载htmlcssjs，所有的页面内容都包含在主页面中），页面复杂度提高了，导航不可用

## 什么是双向绑定？

`Vue` 是数据双向绑定的框架，双向绑定由三个重要部分构成

- 数据层（Model）：应用的数据及业务逻辑
- 视图层（View）：应用的展示效果，各类UI组件
- 业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来

ViewModel理解

- 数据变化后更新视图
- 视图变化后更新数据

`Vue`中的双向绑定流程是什么的

1. `new Vue()`首先执行初始化，对`data`执行响应化处理，这个过程发生`Observe`中
2. 同时对模板执行编译，找到其中动态绑定的数据，从`data`中获取并初始化视图，这个过程发生在`Compile`中
3. 同时定义⼀个更新函数和`Watcher`，将来对应数据变化时`Watcher`会调用更新函数
4. 由于`data`的某个`key`在⼀个视图中可能出现多次，所以每个`key`都需要⼀个管家`Dep`来管理多个`Watcher`
5. 将来data中数据⼀旦发生变化，会首先找到对应的`Dep`，通知所有`Watcher`执行更新函数

[![ciaIaT.png](https://z3.ax1x.com/2021/03/30/ciaIaT.png)](https://imgtu.com/i/ciaIaT)

## v-if 和 v-show 有什么区别？

::: tip 二者区别

- v-if 是真正的条件渲染，会控制这个 DOM 节点的存在与否。因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。

:::

## v-if和v-for为何不建议一起用?

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `true`值的时候被渲染；

`v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组或者对象，而 `item` 则是被迭代的数组元素的别名。在 `v-for` 的时候，建议设置`key`值，并且保证每个`key`值是独一无二的，这便于`diff`算法进行优化

总结：

1. 永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）
2. 如果避免出现这种情况，则在外层嵌套`template`（页面渲染不生成`dom`节点），在这一层进行v-if判断，然后在内部进行v-for循环

## computed 和 watch 比较？

::: tip 区别

- computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；
- watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

::: 

::: tip 运用场景

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

:::

## 父、组件生命周期执行顺序？

Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：

- 加载渲染过程 :
  父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
- 子组件更新过程 :
  父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
- 父组件更新过程 :
  父 beforeUpdate -> 父 updated
- 销毁过程 :
  父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## keep-alive

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：

- 一般结合路由和动态组件一起使用，用于缓存组件；
- 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
- 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

## Vuex

Vuex是一个专为vue.js应用程序开发的状态管理模式，通过创建一个集中的数据存储，方便程序中的所有组件进行访问，简单来说vuex就是vue的状态管理工具

Vuex有五个属性state、getters、mutations、actions、modules。

State就是数据源存放地，对应一般vue对象的data，state里面存放的数据是响应式的，state数据发生改变，对应这个数据的组件也会发生改变用this.$store.state.xxx调用；

Getters相当于store的计算属性，主要是对state中数据的过滤，用this.$store.getters.xxx调用；

Mutations处理数据逻辑的方法全部放在mutations中，当触发事件想改变state数据的时候使用mutations，用this.$store.commit调用，给这个方法添加一个参数，就是mutation的载荷（payload）；

Actions异步操作数据，但是是通过mutation来操作用this.$store.dispatch来触发，actions也支持载荷

使用场景：组件之间的状态，登录状态，加入购物车，音乐播放

## 组件间通信有哪几种方式？

Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。

Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。

**（1）`props / $emit`适用 父子组件通信**

**（2）`ref`与 `$parent / $children`适用 父子组件通信**

::: tip $parent / $children

- `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- `$parent / $children`：访问父 / 子实例

:::

**（3）`EventBus （$emit / $on）`适用于 父子、隔代、兄弟组件通信**

::: tip 

这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。

:::

**（4）`$attrs/$listeners`适用于 隔代组件通信**

::: tip

- `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 `v-bind="$attrs"`传入内部组件。通常配合 inheritAttrs 选项一起使用

- `$listeners`：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 `v-on="$listeners"`传入内部组件

:::

**（5）`provide / inject`适用于 隔代组件通信**

::: tip

祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。`provide / inject API`主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

:::

**（6）`Vuex`适用于 父子、隔代、兄弟组件通信**

::: tip 

- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。
- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。

:::

## vue-router 路由模式？

vue-router 有 3 种路由模式：hash、history、abstract，对应的源码如下所示：

```javascript
switch (mode) {
  case 'history':
    this.history = new HTML5History(this, options.base)
    break
  case 'hash':
    this.history = new HashHistory(this, options.base, this.fallback)
    break
  case 'abstract':
    this.history = new AbstractHistory(this, options.base)
    break
  default:
    if (process.env.NODE_ENV !== 'production') {
      assert(false, `invalid mode: ${mode}`)
    }
}
```

其中，3 种路由模式的说明如下：

- hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
- history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
- abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

## $NextTick是什么？

## data属性详解？

`vue`实例的时候定义`data`属性既可以是一个对象，也可以是一个函数，但是组件中定义`data`属性，只能是一个函数

- 根实例对象`data`可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
- 组件实例对象`data`必须为函数，目的是为了防止多个组件实例对象之间共用一个`data`，产生数据污染。采用函数的形式，`initData`时会将其作为工厂函数都会返回全新`data`对象

## vue响应式原理

**vue2.x**

::: tip Vue2.x

当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。

每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。

一句话总结：

vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调。

::: 

**Vue3.x**

::: tip Vue3.x

Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。

Vue 2.x 里,是通过 递归 + 遍历 data 对象来实现对数据的监控的,如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。

Proxy 可以劫持整个对象,并返回一个新的对象。Proxy 不仅可以代理对象,还可以代理数组。还可以代理动态增加的属性。

:::



## vue与react虚拟dom对比

::: tip 相同点

vue和react都采用了虚拟dom算法，以最小化更新真实DOM，从而减小不必要的性能损耗。

按颗粒度分为tree diff, component diff, element diff. tree diff 比较同层级dom节点，进行增、删、移操作。如果遇到component， 就会重新tree diff流程。

:::

::: tip 不同点

react 会自顶向下全diff.

vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树。

1. 在react中，当状态发生改变时，组件树就会自顶向下的全diff, 重新render页面， 重新生成新的虚拟dom tree, 新旧dom tree进行比较， 进行patch打补丁方式，局部跟新dom. 所以react为了避免父组件跟新而引起不必要的子组件更新， 可以在shouldComponentUpdate做逻辑判断，减少没必要的render， 以及重新生成虚拟dom，做差量对比过程.
2. 在 vue中， 通过Object.defineProperty 把这些 data 属性 全部转为 getter/setter。同时watcher实例对象会在组件渲染时，将属性记录为dep, 当dep 项中的 setter被调用时，通知watch重新计算，使得关联组件更新。

:::

## 对 Vue 项目进行哪些优化？

（1）代码层面的优化

- v-if 和 v-show 区分使用场景
- computed 和 watch 区分使用场景
- v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
- 长列表性能优化
- 事件的销毁
- 图片资源懒加载
- 路由懒加载
- 第三方插件的按需引入
- 优化无限列表性能
- 服务端渲染 SSR（将SPA应用打包到服务器上，在服务器上渲染出HTML，发送到浏览器） or 预渲染

---

（2）Webpack 层面的优化

- Webpack 对图片进行压缩
- 减少 ES6 转为 ES5 的冗余代码
- 提取公共代码
- 模板预编译
- 提取组件的 CSS
- 优化 SourceMap
- 构建结果输出分析
- Vue 项目的编译优化

---

（3）基础的 Web 技术的优化

- 开启 gzip 压缩
- 浏览器缓存
- CDN 的使用
- 使用 Chrome Performance 查找性能瓶颈