import React, { createRef } from "react";
class Test extends React.Component {
  // 使用crateRef产生一个存放dom的对象容器
  msgRef = createRef();
  state = {
    message: '我是大帅哥'
  }
  handleChange = () => {
    console.log(this.msgRef.current.value)
  }
  render() {
    return (
      <>
        {/* ref绑定 获取真实dom */}
        <input ref={this.msgRef} onChange={this.handleChange}></input>
        <h4>{ this.state.message }</h4>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>想当高手</h1>
        <Test></Test>
      </header>
    </div>
  );
}

export default App;
