const list= [
  { label: '笔记本', value: 0 },
  { label: '显示器', value: 1 },
  { label: '鼠标', value: 2 },
  { label: '键盘', value: 3 },
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>想当高手</h1>
        <ul>
          { list.map(item => 
            <li key={item.value}>{ item.label }</li>  
          ) }
        </ul>
      </header>
    </div>
  );
}

export default App;