import React from "react";

// 子组件传父组件
// 关键： 父组件给子组件传递一个函数
// 理解：子组件调用父组件传递进来的函数，并且把想要的数据当作函数的实参
function Son(props) {
  const { age, changeAge } = props;
  const sonChangeAge = () => {
    changeAge(age + 1);
  }

  return (
    <>
      <div>i am son compoent</div>
      <h1>子组件展示：{ age }</h1>
      {/* 案例，父传子，子改变，重新渲染 */}
      <button onClick={() => sonChangeAge()}>加1</button>
    </>
  )
}
class App extends React.Component {
  state = {
    age: 22
  }
  changeAge = (age) => {
    this.setState({
      age: age
    })
  }
  render() {
    return (
      <div className="App">
        <h1>父组件展示：{this.state.age}</h1>
        <Son age={this.state.age} changeAge={this.changeAge}></Son>
      </div>
    );
  }

}

export default App;
