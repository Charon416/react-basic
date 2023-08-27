import React from "react";

import PropTypes from 'prop-types';

// 默认值
function Son({list, isMan, handleFn, age = 22, info, name, optionShape}) {
  return (
    <>
      <p>{list.map(item => <span key={item}>{item}</span>)}</p>
      <hr></hr>
      <p>{isMan ? 'true' : 'false'}</p>
      <hr></hr>
      <p>{handleFn()}</p>
      <hr></hr>
      <p>{age}</p>
      <hr></hr>
      <p>{info.height}???{info.size}</p>
      <hr></hr>
      <p>{name}</p>
      <hr></hr>
      <p style={{color: optionShape.color,fontSize: optionShape.fontSize}}>样式</p>
    </>
  )
}
// 四种常见结构
// 1. 常见类型：array、bool、func、number、object、string
// 2. React元素类型：element
// 3. 必填项：isRequired
// 4. 特定的结构对象：shape({})
Son.propTypes = {
  list: PropTypes.array, // 数组类型
  isMan: PropTypes.bool.isRequired, // boolean类型
  handleFn: PropTypes.func, // 函数类型
  age: PropTypes.number, // 数字类型
  info: PropTypes.object, // 对象类型
  name: PropTypes.string, // 字符串类型
  optionShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  })
}
class App extends React.Component {
  static defaultProps = {
    message: '类组件默认值'
  }
  render() {
    return (
      <div className="App">
        <h1>APP组件-{this.props.message}</h1>
        <Son list={[1,2,3]} isMan={false} handleFn={() => console.log('函数类型')} info={{height: '哈哈哈', size: '18cm'}} name={'jakson'} optionShape={{color: 'blue', fontSize: 60}}></Son>
      </div>
    );
  }

}

export default App;
