const flag = false;
const isfalg = () => {
  return true;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 注释写法 */}
        { isfalg() }
        { isfalg() ? '相当高手' : '不想当高手' }
        { isfalg() ? <h1>想当高手</h1> : <h1>不想当高手</h1> }
      </header>
    </div>
  );
}

export default App;
