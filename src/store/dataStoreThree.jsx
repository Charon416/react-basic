import { makeAutoObservable } from 'mobx';

import axios from 'axios';
class DataStore {
  data = [];
  constructor() {
    makeAutoObservable(this); //响应式处理
  };
  setChannelData = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels');
    this.data = res.data.data.channels;
  }
}
const dataStore = new DataStore();
export default dataStore;