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

## state 和 props 区别

​		props和state是普通的 JS 对象。虽然它们都包含影响渲染输出的信息，但是它们在组件方面的功能是不同的。即

- state 是组件自己管理数据，控制自己的状态，可变；
- props 是外部传入的数据参数，不可变；
- 没有state的叫做无状态组件，有state的叫做有状态组件；
- 多用 props，少用 state，也就是多写无状态组件。

###### 问题1：为什么建议传递给 setState 的参数是一个 callback 而不是一个对象？

 因为this.props 和this.state 的更新可能是异步的，不能依赖它们的值去计算下一个 state

## React diff 原理

- 把树形结构按照层级分解，只比较同级元素
- 给列表结构的每个单元添加唯一的 key 属性，方便比较
- React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
- 选择性子树渲染。开发人员可以重写shouldComponentUpdate 提高 diff 的性能

## React 中 refs 的作用

​		Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。

我们可以为元素添加 ref 属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回

## React 中有三种构建组件的方式

React.createClass()、ES6 class 和无状态函数。

## 类式组件和函数比较

类组件可以使用其他特性，如状态 `state` 和生命周期钩子；

函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。

| 区别             | 函数组件 | 类组件 |
| ---------------- | -------- | ------ |
| 是否有 this      | 没有     | 有     |
| 是否有生命周期   | 没有     | 有     |
| 是否有状态 state | 没有     | 有     |

## 什么是高阶组件？

​		高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。

`const EnhancedComponent = higherOrderComponent(WrappedComponent);`

HOC 可以用于以下许多用例

- 代码重用、逻辑和引导抽象
- 渲染劫持
- state 抽象和操作
- props 处理

## Redux 

Redux 使用 “Store” 将程序的整个状态存储在同一个地方。因此所有组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新。单一状态树可以更容易地跟踪随时间的变化，并调试或检查程序。

#### Redux遵循的三个原则

- **单一事实来源**：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
- **状态是只读的**：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
- **使用纯函数进行更改**：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

#### Redux 组件

- Action – 这是一个用来描述发生了什么事情的对象。
- Reducer – 这是一个确定状态将如何变化的地方。
- Store – 整个程序的状态/对象树保存在Store中。
- View – 只显示 Store 提供的数据。

::: tip **如何在 Redux 中定义 Action？**

​	React 中的 Action 必须具有 type 属性，该属性指示正在执行的 ACTION 的类型。必须将它们定义为字符串常量，并且还可以向其添加更多的属性。在 Redux 中，action 被名为 Action Creators 的函数所创建。

```js
function addTodo(text) {
       return {
                type: ADD_TODO,   
                 text
    }
}
```

::: 

::: tip **解释 Reducer 的作用**

​		Reducers 是纯函数，它规定应用程序的状态怎样因响应 ACTION 而改变。Reducers 通过接受先前的状态和 action 来工作，然后它返回一个新的状态。它根据操作的类型确定需要执行哪种更新，然后返回新的值。如果不需要完成任务，它会返回原来的状态。

:::

::: tip **Store 在 Redux 中的意义是什么？**

​		Store 是一个 JavaScript 对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器。应用程序的整个状态/对象树保存在单一存储中。因此，Redux 非常简单且是可预测的。我们可以将中间件传递到 store 来处理数据，并记录改变存储状态的各种操作。所有操作都通过 reducer 返回一个新状态。

:::

#### Redux 优点？

- 结果的可预测性 - 由于总是存在一个真实来源，即 store ，因此不存在如何将当前状态与动作和应用的其他部分同步的问题。
- 可维护性 - 代码变得更容易维护，具有可预测的结果和严格的结构。
- 服务器端渲染 - 你只需将服务器上创建的 store 传到客户端即可。这对初始渲染非常有用，并且可以优化应用性能，从而提供更好的用户体验。
- 开发人员工具 - 从操作到状态更改，开发人员可以实时跟踪应用中发生的所有事情。
- 社区和生态系统 - Redux 背后有一个巨大的社区，这使得它更加迷人。一个由才华横溢的人组成的大型社区为库的改进做出了贡献，并开发了各种应用。
- 易于测试 - Redux 的代码主要是小巧、纯粹和独立的功能。这使代码可测试且独立。
- 组织 - Redux 准确地说明了代码的组织方式，这使得代码在团队使用时更加一致和简单。

## React Hooks

### 为什么会有Hooks？

​	React的组件创建方式，一种是***类组件\***，一种是***纯函数组件\***，

我们知道，在以往开发中*类组件*和*纯函数组件*的区别是很大的，纯函数组件有着类组件不具备的多种特点，简单列举几条

::: tip 函数组件特点

- 纯函数组件**没有状态**
- 纯函数组件**没有生命周期**
- 纯函数组件没有`this`
- 只能是纯函数

:::

​	这就注定，我们所推崇的函数组件，只能做UI展示的功能，涉及到状态的管理与切换，我们不得不用类组件或者redux，但我们知道类组件的也是有缺点的，比如，遇到简单的页面，你的代码会显得很重，并且每创建一个类组件，都要去继承一个React实例，至于Redux,更不用多说，很久之前Redux的作者就说过，“能用React解决的问题就不用Redux”,等等一系列的话。关于React类组件redux的作者又有话说

::: tip 类组件缺点

- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- 组件类引入了复杂的编程模式，比如 render props 和高阶组件。

:::

为了解决这种，*类组件功能齐全却很重，纯函数很轻便却有上文几点重大限制*，React团队设计了**React Hooks**

***React Hooks就是加强版的函数组件，我们可以完全不使用 `class`，就能写出一个全功能的组件\***

### 什么是Hooks?

​	'Hooks'的单词意思为“钩子”。

​	**React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。**而React Hooks 就是我们所说的“钩子”。

​	对于常见的功能，React为我们提供了一些常用的钩子，当然有特殊需要，我们也可以写自己的钩子。下面是React为我们提供的默认的四种最常用钩子

::: tip 常用钩子

- useState()
- userContext()
- userReducer()
- useEffect()

:::

### React Hooks的用法

#### 1、userState():状态钩子

纯函数组件没有状态，`useState()`用于为函数组件引入状态。

```jsx
import React, {useState} from 'react'
const AddCount = () => {
  const [ count, setCount ] = useState(0)
  const addcount = () => {
    let newCount = count
    setCount(newCount+=1)
  } 
  return (
    <div>
      <p>{count}</p>
      <button onClick={addcount}>count++</button>
    </div>
  )
}
export default AddCount 

```

​	通过上面的代码，我们实现了一个功能完全一样的计数器，代码看起来更加的轻便简洁，没有了继承，没有了渲染逻辑，没有了生命周期等。这就是hooks存在的意义。

#### 2、useContext():共享状态钩子

该钩子的作用是，在组件之间共享状态。

其作用就是可以做状态的分发，在React16.X以后支持，避免了react逐层通过Props传递数据。我们可以通过useContext做状态的共享。

下面是一个例子，现在假设有A组件和B组件需要共享一个状态。

```jsx
import React,{ useContext } from 'react'
const Ceshi = () => {
  const AppContext = React.createContext({})
  const A =() => {
    const { name } = useContext(AppContext)
    return (
        <p>我是A组件的名字{name}<span>我是A的子组件{name}</span></p>
    )
}
const B =() => {
  const { name } = useContext(AppContext)
  return (
      <p>我是B组件的名字{name}</p>
  )
}
  return (
    <AppContext.Provider value={{name: 'hook测试'}}>
    <A/>
    <B/>
    </AppContext.Provider>
  )
}
export default Ceshi 

```

#### 3、useReducer():Action钩子

​		在使用React的过程中，如遇到状态管理，我们一般会用到Redux,而React本身是不提供状态管理的。而`useReducer()`为我们提供了状态管理。

​		首先，关于redux我们都知道，其原理是我们通过用户在页面中发起action,从而通过reducer方法来改变state,从而实现页面和状态的通信。而Reducer的形式是`(state, action) => newstate`。类似，我们的`useReducer()`是这样的

```js
const [state, dispatch] = useReducer(reducer, initialState)

```

​		它接受reducer函数和状态的初始值作为参数，返回一个数组，其中第一项为*当前的*状态值，第二项为发送action的dispatch函数。下面我们依然用来实现一个计数器。

​		和redux一样，我们是需要通过页面组件发起action来调用reducer方法，从而改变状态，达到改变页面UI的这样一个过程。所以我们会先写一个Reducer函数，然后通过useReducer()返回给我们的state和dispatch来驱动这个数据流。

```jsx
import React,{useReducer} from 'react'

const AddCount = () => {
const reducer = (state, action) =>  {
 if(action.type === ''add){
  return {
  ...state,
  count: state.count +1,
  }
 }else {
   return state
  }
 }
const addcount = () => { 
  dispatch({
    type: 'add'
  })
 }
const [state, dispatch] = useReducer(reducer, {count: 0})
return (
<>
<p>{state.count}</p>
<button onClick={addcount}>count++</button>
</>
)
}
export default AddCount

```

通过代码我们看到了，我们使用`useReducer()`代替了Redux的功能，但`useReducer`无法为我们提供中间件等功能，假如你有这些需求，还是需要用到redux。

#### 4、useEffect():副作用钩子

`useEffect()`也是为函数组件提供了处理副作用的钩子。类式组件我们会把请求放在`componentDidMount`里面，在函数组件中我们可以使用`useEffect()`。用法如下

```jsx
useEffect(() => {},[array])
```

`useEffect()`接受两个参数，第一个参数是你要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项。只要这个数组发生变化，`useEffect()`就会执行。当第二项省略不填时，`useEffect()`会在每次组件渲染时执行。这一点类似于类组件的`componentDidMount`。下面我们通过代码模拟一个异步加载数据。

```jsx
import React, { useState, useEffect } from 'react'
const AsyncPage = () => {
const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    },5000)
  })
return (
loading ? <p>Loading...</p>: <p>异步请求完成</p>
)
}

export default AsyncPage 
```

上面的代码实现了一个异步加载，下面我们再做一个`useEffect()`依赖第二项数组变化的例子

```jsx
import React, { useState, useEffect } from 'react'

const AsyncPage = ({name}) => {
const [loading, setLoading] = useState(true)
const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setPerson({name})
    },2000)
  },[name])
  return (
    <>
      {loading?<p>Loading...</p>:<p>{person.name}</p>}
    </>
  )
}

const PersonPage = () =>{
  const [state, setState] = useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state}/>
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  )
}

export default PersonPage 
```

上面代码中，通过改变传给`AsyncPage`的props,从而调用`useEffect()`。

#### 5、创建自己的Hooks

以上我们介绍了四种最常用的react提供给我们的默认React Hooks,有时候我们需要创建我们自己想要的Hooks,来满足更便捷的开发，

无非就是根据业务场景对以上四种Hooks进行组装，从而得到满足自己需求的钩子。

比如，我们要将我们上面的代码功能封装成Hooks,代码如下

```jsx
import React, { useState, useEffect } from 'react'

const usePerson = (name) => {
const [loading, setLoading] = useState(true)
const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setPerson({name})
    },2000)
  },[name])
  return [loading,person]
}

const AsyncPage = ({name}) => {
  const [loading, person] = usePerson(name)
    return (
      <>
        {loading?<p>Loading...</p>:<p>{person.name}</p>}
      </>
    )
  }

const PersonPage = () =>{
  const [state, setState]=useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state}/>
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  )
}

export default PersonPage 
```

上面代码中，我们将之前的例子封装成了自己的Hooks,便于共享。其中，我们定义`usePerson()`为我们的自定义Hooks,它接受一个字符串，返回一个数组，数组中包括两个数据的状态，之后我们在使用`usePerson()`时，会根据我们传入的参数不同而返回不同的状态，然后很简便的应用于我们的页面中。