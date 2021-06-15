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
