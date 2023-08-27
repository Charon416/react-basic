import React from 'react';
class Counter extends React.Component {
  // 组件状态
  state = {
    name: 'charon',
    counter: 0
  }
  // 事件回掉函数 减少
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  // 事件回掉函数 增加
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  // 修改名称
  changeName = () => {
    this.setState({
      name: 'jaksonkoda'
    })
  }
  
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{ counter }</span>
        <button onClick={this.increment}>+</button>
        <h1>{ name }</h1>
        <button onClick={this.changeName}>修改名称</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>想当高手</h1>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
