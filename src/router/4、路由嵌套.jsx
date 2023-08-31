import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/')}>登录</button>
    </>
  )
}

const Home = () => <div>看板页面</div>

const Article = () => <div>文章页面</div>

const Layout = () => {
  return (
    <>
      <div>layout</div>
      {/* 二级路由出口 */}
      <Outlet></Outlet>
    </>
  )
}
const NotFound = () => <div>NotFound</div>

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            {/* <Route path='/home' element={<Home></Home>}></Route> */}

            {/* 默认二级路由 */}
            <Route index element={<Home></Home>}></Route>
            <Route path='/article' element={<Article></Article>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
