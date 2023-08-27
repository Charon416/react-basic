import React from 'react';
// 函数子组件
function FSon(props) {
  console.log(props);
  return (
    <div>我是函数子组件{props.message}</div>
  )
}
// 类子组件
class CSon extends React.Component {
  render() {
    const { getMessage, list, children } = this.props;
    console.log(this.props);
    getMessage();
    return (
      <div>
        <ul>
          {list.map(item => <li key={item}>{ item }</li>)}
        </ul>
        {children}
      </div>
    )
  }
}

// 父组件
class App extends React.Component {
  state = {
    message: '父组件传入的数据',
    list: [1, 2, 3, 4]
  }
  getMessage = () => {
    console.log('我是传进来的函数')
  }
  render () {
    return (
      <div>
        <h1>我是父组件</h1>
        <FSon message={this.state.message}></FSon>
        {/* 传入数组 */}
        <CSon list={this.state.list} getMessage={this.getMessage} children={<span>哈哈哈</span>}></CSon>
        {/* 传入函数 */}
        <CSon list={this.state.list} getMessage={this.getMessage}></CSon>
        {/* 传入JSX */}
      </div>
    );
  } 
}

export default App;