// 便携一个mobx counter案例
import { computed, makeAutoObservable } from 'mobx';

class ListStore {
  list = [1,2,3,4,5]; // 定义数据
  constructor() {
    makeAutoObservable(this, {
      filterList: computed
    }); //响应式处理
  }
  // 定义修改数据的方法
  changeList = () => {
    this.list.push(6,7,8,9)
  }
  // 定义计算属性
  get filterList() {
    return this.list.filter(item => item>4)
  }
}
const listStore = new ListStore();
export default listStore;