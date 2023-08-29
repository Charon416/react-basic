import { useState, useEffect } from "react";

// 一. 不添加依赖项
// 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
// 1. 组件初始渲染
// 2. 组件更新 （不管是哪个状态引起的更新）

// 二、添加空数组
// 组件只在首次渲染时执行一次

// 三. 添加特定依赖项
// 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

// 四、清理副作用
// 可以在副作用函数尾部return一个新的函数
// 注意执行时机为：
// 1. 组件卸载时自动执行
// 2. 组件更新时，下一个useEffect副作用函数执行之前自动执行

function App() {
  // 布尔值
  // const [ flag, setFlag ] = useState(true);
  // 以字符串为初始值
  const [ count, setCount ] = useState(111);

  useEffect(() => {
    // 定义副作用
    console.log('副作用又执行了')
    document.title = count
    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])

  return (
    <>
      {/* <h2>{ count }</h2>
      <button onClick={() => {setCount(count + 1)} }>修改名字</button> */}

      <h2>{ count }</h2>
    </>
  )
}

export default App;
