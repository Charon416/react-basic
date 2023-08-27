import React from "react";
class Test extends React.Component {
  state = {
    message: '我是大帅哥'
  }
  handleChange = (e) => {
    console.log(e);
    this.setState = {
      message: e.target.value
    }
  }
  render() {
    return (
      <>
        <input type='text' value={this.state.message} onChange={this.handleChange}></input>
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
