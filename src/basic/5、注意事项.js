// 1、JSX必须有一个根节点，如果没有根节点，可以使用<></>(幽灵节点)代替
// 2、所有标签必须形成闭合，成堆闭合或者自闭合痘可以
// 3、JSX中的语法更加贴近JS语法，属性名采用驼峰命名法，class -> className for -> htmlFor
// 4、JSX支持多行（换行），如果需要换行，需使用（）包裹，防止bug出现

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>想当高手</h1>
      </header>
    </div>
  );
}

export default App;
