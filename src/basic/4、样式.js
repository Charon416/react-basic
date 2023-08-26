import './basic/style.css';
// 不同状态展示对应样式
// 1、行内样式 - 在元素身上绑定一个style属性即可，外面的{}是为了保证里面的{}是个对象
// 注意一：要使用驼峰书写属性
const skyblue = {
  color: 'red',
  fontSize: '30px'
}
// 2、类名样式
const isActive = true;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 1、行内样式 */}
        {/* <div style={{ color: 'skyblue', fontSize: '30px' }}>想当高手</div> */}
        <div style={skyblue}>想当高手</div>

        {/* 2、类名样式 */}
        <div className={ isActive ? 'active' : ''}>想要15k</div>
      </header>
    </div>
  );
}

export default App;