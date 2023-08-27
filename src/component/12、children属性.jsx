import React from "react";

function Son(props) {
  return (
    <>
      {props.children.map(item => item)}
    </>
  )
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>APP组件</h1>
        {/* children 属性可以是：1、普通文本 2、普通标签元素 3、函数/对象 4、JSX */}
        {/* <Son>1、普通文本</Son> */}
        {/* <Son><h1>2、普通标签元素</h1></Son> */}
        {/* <Son>{() => console.log('3、函数/对象')}</Son> */}
        <Son>
          <div>
            <p>1111111</p>
          </div>
          <div>
            <p>2222222</p>
          </div>
        </Son>
      </div>
    );
  }

}

export default App;
