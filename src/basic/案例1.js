import './basic/demoOne.css'
const data = {
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
  ]
}
const handleClick = () => {
  console.log('点击了');
  if (data.active === 'hot') {
    data.active = 'time'
  } else {
    data.active = 'hot'
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          {data.tabs.map(item => (
            <div onClick={handleClick} className={`head ${item.type === data.active ? 'blue' : ''}` } key={item.id}>
              { item.name }
            </div>
          ))}
        </div>

        <div className='content'>
            <div className='release'>
              发布评论区域占位
            </div>
            <div className='list'>
              { data.list.map(item => (
                <div className='item' key={ item.id }>
                  <div className='image'>头像：{ item.id }</div>
                  <div>
                    <p>{ item.author }</p>
                    <p>{ item.comment }</p>
                    <p>{ item.time.toLocaleString() } <span>{ item.attitude === 1 ? '点赞' : item.attitude === -1 ? '踩' : '无态度' }</span><span> 删除</span></p>
                  </div>
                </div>
              )) }
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
