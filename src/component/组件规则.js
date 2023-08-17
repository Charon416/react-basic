import React from 'react';

// 函数组件
// 1、组件名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
// 2、函数组件必须有返回值，标识该组件的UI结构；如果不需要渲染任何内容，则返回null
// 3、组件就像HTML标签一样可以被渲染到页面中，组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返沪指就是对应的内容
// 4、使用函数名称作为组件标签名称，可以成堆出现也可以自闭合
function Son() {
  return <div>我是函数组件</div>
}

// 类组件
// 1、类名称也必须以大写字母开头
// 2、类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
// 3.、类组件必须提供 render 方法render 方法必须有返回值，表示该组件的 UI 结构
class Card extends React.Component {
  render() {
    return <div>我是类组件</div>
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