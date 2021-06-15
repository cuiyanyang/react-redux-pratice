## 一、redux怎么进行异步操作
- action发出后，reducer立即算出state，这是同步
- 异步操作需要使action发出后，等异步操作执行完再去执行reducer，需要用到 中间件（middleware）

### 1、中间件概念
- 比如添加日志功能
    - 可以改造dispatch函数
- 中间件就是一个函数，在发出action和执行reducer两步之间，添加其他功能

### 2、中间件使用
- 中间件次序有讲究，比如logger要放在最后面

### 3、applyMiddleware
- 作用：将所有中间件组成一个数组，依次执行
- 手写实现

## 二、异步操作思路
- 触发一个action，更新state为“正在操作”状态，视图重新渲染
- 再触发一个action，更新state为“完成操作”状态，视图再次重新渲染

## 三、异步操作实现
- 异步操作至少发出两个action，触发第一个action，这个与同步操作一样，需要解决怎么在异步操作之后自动触发第二个action

### 1、方法一：使用redux-thunk改造dispatch函数，写出一个返回函数的action creator，让dispatch可以以该函数为参数
- 使用到action creator，正常action creator是返回一个对象，我们需要返回一个函数，在这个函数触发两个action
- dispatch正常只能接收action对象，需要使用redux-thunk改造dispatch函数，使他可以接收一个函数

### 2、方法二：使用redux-promise,让action creator返回一个promise对象