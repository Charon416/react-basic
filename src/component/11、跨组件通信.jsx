import React, { createContext } from "react";

const { Provider, Consumer } = createContext();

function SonB() {
  return (
    <>
      <SonA></SonA>
    </>
  )
}

function SonA() {
  return (
    <>
      <Consumer>
        {value => <div>{value}</div>}
      </Consumer>
    </>
  )
}

class App extends React.Component {
  render() {
    return (
      <Provider value="根组件传进来的数据">
        <div className="App">
          <h1>APP组件</h1>
          <SonB></SonB>
        </div>
      </Provider>

    );
  }

}

export default App;
