import React from "react";
class Test extends React.Component {
  state = {
    count : 0,
    list: [1,2,3],
    person: {
       name:'jack',
       age:18
    }
  }
  handleChange = () => {
    // 一、错误的修改
    // 直接修改简单类型Number
    // this.state.count++
    // ++this.state.count
    // this.state.count += 1
    // this.state.count = 1
    // 直接修改数组
    // this.state.list.push(123)
    // this.state.list.spice(1,1)
    // 直接修改对象
    // this.state.person.name = 'rose'

    // 2、正确的修改
    this.setState({
      count: this.state.count + 1,
      list: [...this.state.list, 4],
      person: {
         ...this.state.person,
         // 覆盖原来的属性 就可以达到修改对象中属性的目的
         name: 'rose'
      }
    })

  }
  render() {
    return (
      <>
        <button onClick={this.handleChange()}>修改数据</button>
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
