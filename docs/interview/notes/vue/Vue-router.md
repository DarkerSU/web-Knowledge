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

## 路由钩子有哪些?

#### 全局钩子

​	**beforeEach**

#### 路由钩子

​	**beforeEnter**

#### 组件钩子

​	**beforeRouteEnter**

在导航确认之前调用，新组件的 beforeCreate 之前调用，所以特别注意它的 this 是 undefined

​	**beforeRouteUpdate**

用法：点击更新二级导航时调用。

​	**beforeRouteLeave**
离开当前界面之前调用，用法：1. 需要的保存或者删除的数据没有完成当前操作等等原因，禁止界面跳转。