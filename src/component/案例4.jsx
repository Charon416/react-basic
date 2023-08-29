import { useState, useEffect } from "react";

export function useLocalStorage (key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  // 每次只要message变化 就会自动同步到本地ls
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])
  return [message, setMessage]
}

function App() {
  const [ count, setCount ] = useLocalStorage('name', 111);

  return (
    <>
      <h2>{ count }</h2>
      <button onClick={() => {setCount(count + 1)} }>修改数值</button>
    </>
  )
}

export default App;