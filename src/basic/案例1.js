import React, { createRef } from 'react';
import './basic/demoOne.css'
class Test extends React.Component{
  inputRef = createRef();
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot'
      },
      {
        id: 2,
        name: '时间',
        type: 'time'
      }
    ],
    active: 'time',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1
      }
    ],
    activeContent: ''
  }
  handleClick = () => {
    console.log('点击了');
    if (this.state.active === 'hot') {
      this.setState({
        active: 'time'
      })
    } else {
      this.setState({
        active: 'hot'
      })
    }
  }
  releaseContent = () => {
    this.setState({
      list: [...this.state.list, {
        id: new Date().valueOf(),
        author: '周杰伦',
        comment: this.inputRef.current.value,
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      }]
    })
  }
  handleDel = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <>
        <div className='header'>
          {this.state.tabs.map(item => (
            <div onClick={this.handleClick} className={`head ${item.type === this.state.active ? 'blue' : ''}` } key={item.id}>
              { item.name }
            </div>
          ))}
        </div>
        <div className='content'>
            <div className='release'>
              <input type='text' ref={this.inputRef}></input>
              <button onClick={this.releaseContent}>发布评论</button>
            </div>
            <div className='list'>
              { this.state.list.map(item => (
                <div className='item' key={ item.id }>
                  <div className='image'>头像：{ item.id }</div>
                  <div>
                    <p>{ item.author }</p>
                    <p>{ item.comment }</p>
                    <p>{ item.time.toLocaleString() } <span>{ item.attitude === 1 ? '点赞' : item.attitude === -1 ? '踩' : '无态度' }</span><span onClick={() => this.handleDel(item.id)}> 删除</span></p>
                  </div>
                </div>
              )) }
            </div>
        </div>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>想当高手</h1>
        <Test></Test>
      </header>
    </div>
  );
}

export default App;
