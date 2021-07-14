## react 生命周期函数

::: tip **运行中**：

**getDefaultProps**：获取实例的默认属性

**getInitialState**：获取每个实例的初始化状态

**componentWillMount**：组件即将被装载、渲染到页面上

**render**：组件在这里生成虚拟的 DOM 节点

**componentDidMount**：组件真正在被装载之后

:::

::: tip **运行中状态**：

**componentWillReceiveProps**：组件将要接收到属性的时候调用

**shouldComponentUpdate**：组件接受到新属性或者新状态的时候（可以返回 false，接收数据后不更新，阻止render 调用，后面的函数不会被继续执行了）

**componentWillUpdate**：组件即将更新不能修改属性和状态

**render**：组件重新描绘

**componentDidUpdate**：组件已经更新

:::

::: tip **销毁阶段**：

**componentWillUnmount**:组件即将销毁

:::

## React 中 refs 的作用

Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。

我们可以为元素添加 ref 属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回

## React 中有三种构建组件的方式

React.createClass()、ES6 class 和无状态函数。

## 类式组件和函数比较

类组件可以使用其他特性，如状态 `state` 和生命周期钩子；

函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。
