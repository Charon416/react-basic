import { makeAutoObservable } from 'mobx';

class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  // 进行单选修改的方法
  checkItem = (id) => {
    const item = this.list.find(item => item.id === id)
    console.log(item);
    item.isDone = !item.isDone;
  }

  // 删除
  delItem = (id) => {
    console.log(2);
    this.list = this.list.filter(item => item.id !== id)
    console.log(this.list);
  }

  // 是否全选的计算属性
  get isAll () {
    return this.list.every(item => item.isDone)
  }

  // 遍历修改所有item
  allCheckItem = (checked) => {
    console.log(checked);
    this.list.forEach(item => {
      item.isDone = checked
    })
    console.log(this.list);
  }

  addItem = (item) => {
    this.list.push(item)
  }
}

const taskStore = new TaskStore();
export default taskStore;