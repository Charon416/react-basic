import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      console.log(res.data);
    }
    loadData();
  })
  return (
    <>
      <h2>useEffect-发送网络请求</h2>
    </>
  )
}

export default App;
