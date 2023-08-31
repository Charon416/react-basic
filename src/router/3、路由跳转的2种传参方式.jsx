
import { useSearchParams, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [params] = useSearchParams();
  // let id = params.get('id');
  // let name = params.get('name');

  const params = useParams();
  const id = params.id;
  console.log(params);
  return (
    <>
      <h2>我是home页面</h2>
      {/* <h3>第一种方式</h3>
      <div>{id}</div>
      <div>{name}</div> */}

      <h3>第二种方式</h3>
      <div>{id}</div>
    </>
  )
};
const About = () => <>this is about</>;
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* 第一种跳转传参方式 */}
      {/* <button onClick={() => navigate('/home?id=1&name=charon')}>第一种方式跳转到首页</button> */}

      {/* 第二种跳转传参方式 */}
      <button onClick={() => navigate('/home/222')}>第二种方式跳转到首页</button>
    </>
  )
}

const App = () => {
  return (
    <>
    {/* 声明当前要用一个非hash莫是的路由 */}
      <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
        <Link to='/home'>首页</Link>
        <Link to='/about'>关于</Link>
        <br></br>
        {/* 路由出口 路由对应的组件会在这里进行渲染 */}
        <Routes>
          {/* 指定路径和组件对应的关系 path代表路径 element代表组件 成对出现 path-element */}

          {/* 第一种方式 */}
          {/* <Route path='/home' element={<Home></Home>}></Route> */}

          {/* 第二种方式 */}
          <Route path='/home/:id' element={<Home></Home>}></Route>
          
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
