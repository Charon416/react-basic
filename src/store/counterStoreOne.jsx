// 便携一个mobx counter案例
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0; // 定义数据
  constructor() {
    makeAutoObservable(this); //响应式处理
  }
  // 定义修改数据的方法
  addCount = () => {
    this.count++
  }
}
const counter = new CounterStore();
export default counter;