# npm install --save react-router-dom

# 了解 路由和线路的区别Router, Route, Link跳转

# 动态传值
设置规则  >  传递值   >  接收值  >  显示内容

设置规则
<Route path="/list/:id" exact component={List} />
http://localhost:3000/list/12  这样才可以访问

接收值 在 生命周期函数中, 传递过来的值也是在props中，在List.js中
动态传值 无非就是通过生命函数，获取设定的值，然后显示在界面中。

# 编程式 重定向

重定向
<Redirect to="/home/" />

this.props.history.push('/home/')

# 嵌套路由
掘金

一级路由
二级路由
