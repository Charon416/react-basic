import { useState, useEffect } from "react";

export function useWindowScroll () {
  const [y, setY] = useState(0)
  useEffect(()=>{
    const scrollHandler = () => {
      setY(document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  })
 
  return [y]
}

function App() {
  const [ count, setCount ] = useWindowScroll();

  return (
    <>
      <div style={{height: '2000px'}}>
        <h2>{ count }</h2>
        <button onClick={() => {setCount(count + 1)} }>修改高度</button>
      </div>
    </>
  )
}

export default App;
