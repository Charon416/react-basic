import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>加一</button>
    </>
  )

}

function App() {
  return (
    <>
      <Counter count={20}></Counter>
    </>
  )
}

export default App;
