import React from "react";

// 兄弟组件通信
// 理解：子组件A用父组件的展示，子组件B调用父组件的函数改变数据
function SonA(props) {
  return (
    <>
      <div>i am son compoentAAA</div>
      <h1>{ props.age }</h1>
    </>
  )
}

function SonB(props) {
  console.log(props);
  return (
    <>
      <div>i am son compoentBBB</div>
      <button onClick={() => props.changeAge(1)}>加1</button>
    </>
  )
}
class App extends React.Component {
  state = {
    age: 22
  }
  changeAge = (age) => {
    this.setState({
      age: this.state.age + age
    })
  }
  render() {
    return (
      <div className="App">
        <SonA age={this.state.age}></SonA>
        <SonB changeAge={this.changeAge}></SonB>
      </div>
    );
  }

}

export default App;
