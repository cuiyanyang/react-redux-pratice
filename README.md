## 1、示例：counter计数器

## 2、redux

### state
 - store包含的所有数据

### action
- 对象，type：必须的，表示action名称；
- 整个对象表示一种动作或行为，由视图发出

### reducer
纯函数：
- 相同的输入会导致相同输出
- 不能修改参数
- 不能调用异步或Math.random()等不纯的方法

### createStore
参数:
- reducer

### getState
- 获取state

### subscribe
- 监听函数，state发生变化就会触发这个函数

### dispatch
- 触发action动作，并会自动调用reducer计算新的state


## 3、实现部分redux方法
- createStore
- combineReducers



