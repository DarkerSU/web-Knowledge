## Vuex

Vuex是一个专为vue.js应用程序开发的状态管理模式，通过创建一个集中的数据存储，方便程序中的所有组件进行访问，简单来说vuex就是vue的状态管理工具

Vuex有五个属性state、getters、mutations、actions、modules。

State就是数据源存放地，对应一般vue对象的data，state里面存放的数据是响应式的，state数据发生改变，对应这个数据的组件也会发生改变用this.$store.state.xxx调用；

Getters相当于store的计算属性，主要是对state中数据的过滤，用this.$store.getters.xxx调用；

Mutations处理数据逻辑的方法全部放在mutations中，当触发事件想改变state数据的时候使用mutations，用this.$store.commit调用，给这个方法添加一个参数，就是mutation的载荷（payload）；

Actions异步操作数据，但是是通过mutation来操作用this.$store.dispatch来触发，actions也支持载荷

使用场景：组件之间的状态，登录状态，加入购物车，音乐播放