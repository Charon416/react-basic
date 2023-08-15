// 1、识别常规的变量
const name = 'jaksonkoda';
// 2、原生js方法调用
const getAge = () => {
  return 23
}
// 3、三元运算符（常用）
const flag = true;
// 4、数组
const arr1 = [ 'a', 'b', 'c', 'd'];
// 5、对象
const obj1 = { name: 'jaksonkoda', age: 23, sex: 'man'};
// 6、数字运算
// 1+2
// 7、字符串分割
// 'abc'.split('')
// 8、数组使用分割符
// ['a', 'b', 'c', 'd'].join('-')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>1、识别常规的变量</h1>
        <div>{ name }</div>
        <h1>2、原生js方法调用</h1>
        <div>{ getAge() }</div>
        <h1>3、三元运算符（常用）</h1>
        <div>{ flag ? 'true' : 'false' }</div>
        <h1>4、数组</h1>
        <div>{ arr1 }</div>
        <h1>5、对象</h1>
        <div>{ `对象不能直接展示：${obj1.name}-${obj1.age}-${obj1.sex}` }</div>
        <h1>6、数字运算</h1>
        <div>{ 1 + 2 }</div>
        <h1>7、字符串分割</h1>
        <div>{ 'abc'.split('') }</div>
        <h1>8、数组使用分割符</h1>
        <div>{ ['a', 'b', 'c', 'd'].join('-') }</div>
      </header>
    </div>
  );
}

export default App;
