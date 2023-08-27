import React from "react";

function Son(props) {
  return (
    <>
      {props.list.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <div>{item.price}</div>
            <div>{item.info}</div>
            <button onClick={() => props.handleDel(item.id)}>删除</button>
          </div>
      ))}
    </>
  )
}
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  handleDel = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>APP组件</h1>
        <Son list={this.state.list} handleDel={this.handleDel}></Son>
      </div>
    );
  }

}

export default App;
