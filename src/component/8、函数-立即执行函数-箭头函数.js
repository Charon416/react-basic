import React from "react";

// 子组件传父组件
// 关键： 父组件给子组件传递一个函数
// 理解：子组件调用父组件传递进来的函数，并且把想要的数据当作函数的实参
function Son(props) {
  const { getSonMessage } = props;
  const handleDataOne = (message) => {
    console.log('7');
    getSonMessage(message)
  }
  const handleDataTwo = (message) => {
    console.log('8')
    getSonMessage(message)
  }
  return (
    <>
      <div>i am son compoent</div>
      {/* 默认不会自己执行，点击之后，虽然未传入message，但是会打印onClick事件 */}
      <button onClick={handleDataOne}>默认</button>
      {/* 会自己执行，但是点击之后，没反应 */}
      <button onClick={handleDataOne('1')}>默认</button>
      {/* 不会自己执行，点击之后，打印7，2 */}
      <button onClick={() => handleDataOne('2')}>默认</button>
      <button onClick={handleDataTwo}>默认</button>
      <button onClick={handleDataTwo('4')}>默认</button>
      <button onClick={() => handleDataTwo('5')}>默认</button>
    </>
  )
}
class App extends React.Component {
  getSonMessage = (message) => {
    console.log(message);
  }
  render() {
    return (
      <div className="App">
        <Son getSonMessage={this.getSonMessage}></Son>
      </div>
    );
  }

}

export default App;
