import React from 'react';

function Son() {
  const handleSonClick = (e, msg) => {
    console.log(msg);
    e.preventDefault();
  } 
  return (
    <div onClick={(e) => handleSonClick(e, '哈哈哈哈哈哈哈哈哈哈')}>
      <a href='https://www.baidu.com'>百度</a>
    </div>
  )
}

class Card extends React.Component {
  // 标准写法，避免this指向问题
  // 这样写 回掉函数中的this指向的是当前的组件实例对象
  handleCardClick = () => {
    console.log('点击了类组件')
  }
  render() {
    return <div onClick={this.handleCardClick}>我是类组件</div>
  }
}

function App() {
  return (
    <>
      <Son></Son>
      <Card></Card>
    </>
  )
} 
export default App