import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'


// 注释下方，更改到 Pages 中，将每个页面都弄成一个组件来处理
// 无状态组件 就是一个方法，可以是匿名 也可是有名子的方法
// function Index(){
//     return <h2>JSPang.com</h2>
// }

// function List(){
//     return <h2>List-page</h2>
// }

// 路由也是一个无状态组件
function AppRouter(){
    return (
        <Router>
            <ul>
                <li>
                    {/* 可以把Link看作是一个a标签 */}
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/list/123">列表</Link>
                </li>
            </ul>
            {/* exact 表示精确匹配， 如果没有 只要有/dsfa都可以匹配到 */}
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" exact component={List} />
            <Route path="/home/" exact component={Home} />
        </Router>
    )
}


export default AppRouter
