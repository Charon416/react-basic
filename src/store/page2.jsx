// 导入counterStore
import listStoreTwo from './store/listStoreTwo';

// 导入observe方法
import { observer } from 'mobx-react-lite';
const App = () => {
  return (
    <div>
      <ul>{ listStoreTwo.list.map(item => (
        <li key={item}>{item}</li>
      )) }</ul>
      <ul>{ listStoreTwo.filterList.map(item => (
        <li key={item}>{item}</li>
      )) }</ul>
      <button onClick={() => listStoreTwo.changeList()}>修改列表</button>
    </div>
  );

}

export default observer(App);
