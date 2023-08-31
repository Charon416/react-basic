
import { HashRouter, BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <>this is home</>;
const About = () => <>this is about</>;

const App = () => {
  return (
    <>
    {/* 声明当前要用一个非hash莫是的路由 */}
      <HashRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <br></br>
        {/* 路由出口 路由对应的组件会在这里进行渲染 */}
        <Routes>
          {/* 指定路径和组件对应的关系 path代表路径 element代表组件 成对出现 path-element */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </HashRouter>
    </>
  );

}

export default App;
