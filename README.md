## 一、react-redux

### 1、connect
参数：
- mapStateToProps：将state映射成UI组件的props
    - state
    - props：容器的props对象
- mapDispatchToProps：用户对UI组件操作映射成action
    - mapDispatchToProps可以是函数也可以是对象，对象的话返回的action由redux自动触发

### 2、Provider组件
- 使容器组件可以从context拿到store