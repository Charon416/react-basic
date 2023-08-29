import { useState, useEffect } from "react";

// 需求： 在修改数据之后，把count值放到页面标题中

function App() {
  // 以字符串为初始值
  const [ count, setCount ] = useState(111);

  useEffect(() => {
    // 定义副作用
    document.title = count
  })

  return (
    <>
      <h2>{ count }</h2>
      <button onClick={() => {setCount(count + 1)} }>修改名字</button>
    </>
  )
}

export default App;
