import './mobx案例todolist/index.css'
import taskStore from './mobx案例todolist/taskStore';
// 导入observe方法
import { observer } from 'mobx-react-lite';

import { useState } from 'react';
function Task() {
  const onChange = (id) => {
    taskStore.checkItem(id);
  }
  const handleDel = (id) => {
    console.log(1);
    taskStore.delItem(id)
  }
  // 全选操作回调
  const allChange = (e) => {
    // 通过事件对象e拿到当前是否选中的状态 
    taskStore.allCheckItem(e.target.checked)
  }

  // 受控方式维护输入框数据
  const [keyword, setKeyword] = useState('')
  const keywordChange = (e) => {
    setKeyword(e.target.value)
  }

  // 键盘抬起事件中 判断code码进行新增
  const onKeyUp = (e) => {
    console.log(e)
    if (e.keyCode === 13) {
      taskStore.addItem({
        id: 3,
        name: keyword,
        isDone: false
      })
      // 新增完毕置空
      setKeyword('')
    }
  }
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            autoFocus
            autoComplete="off"
            placeholder="What needs to be done?"
            value={keyword}
            onChange={keywordChange}
            onKeyUp={onKeyUp}
          />
        </header>
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={taskStore.isAll}
            onChange={allChange}
          />
          <label htmlFor="toggle-all"></label>
          <ul className='todo-list'>
            {taskStore.list.map(item => (
              <li className='todo' key={item.id}>
                <div className='view'>
                  <input className='toggle' type='checkbox' checked={item.isDone}onChange={() => onChange(item.id)}></input>
                  <label>{ item.name }</label>
                  <button className='destroy' onClick={() => handleDel(item.id)}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            任务总数: {10} 已完成: {1}
          </span>
        </footer>
      </section>
    </div>

  )
}

export default observer(Task)
