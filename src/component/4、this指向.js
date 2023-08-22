import React from 'react';
class Test extends React.Component {
  // 方案一：
  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this); // 使用bind改变this指向
  // }
  // handleClick() {
  //   console.log(this);
  //   // this.setState去修改数据就会报错，此时的this是undefined；
  // }
  // render() {
  //   return (
  //     <>
  //       <button onClick={this.handleClick}>click</button>
  //     </>
  //   )
  // }

  // 方案二：
  state = {
    counter: 0
  }
  changeCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    console.log(this);
    return (
      <>
        <button onClick={() => this.changeCounter()}>{ this.state.counter }</button>
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
