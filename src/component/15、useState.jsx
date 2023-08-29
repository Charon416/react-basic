import { useState } from "react";

function App() {
  // 以数字为初始值
  const [ count, setCount ] = useState(0);

  // 以字符串为初始值
  const [ name, setName ] = useState('charon');

  // 以数组为初始值
  const [ list, setList ] = useState(['1693320854660'])
  return (
    <>
      <h2>{ count }</h2>
      <button onClick={() => {setCount(count + 1)} }>加1</button>
      <h2>{ name }</h2>
      <button onClick={() => {setName('jakson')} }>修改名字</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={() => setList([...list, new Date().valueOf()])}>添加对象</button>
    </>
  )
}

export default App;
