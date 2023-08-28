import React from "react";

class Son extends React.Component {
  timer = null;
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('定时器开始')
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('子组件销毁了')
  }
  render() {
    return (
      <>哈哈哈哈</>
    )
  }
}
class App extends React.Component {
  constructor() {
    super();
    console.log('111constructor');
  }
  componentDidMount() {
    console.log('333componentDidMount'); // 发送请求 dom操作
  }
  componentDidUpdate() {
    console.log('componentDidUpdate'); // dom操作，可以获取到更新后的DOM内容
  }
  state = {
    message: 'message'
  }
  handleClick = () => {
    this.setState({
      message: 'changeMessage'
    })
  }
  render() {
    console.log('222render')
    return (
      <div className="App">
        <h1>APP组件</h1>
        <button onClick={this.handleClick}>点击</button>
        {this.state.message === 'message' ? <Son></Son> : null}
      </div>
    );
  }

}

export default App;
