// 导入counterStore
import dataStoreThree from './store/dataStoreThree';

// 导入observe方法
import { observer } from 'mobx-react-lite';
const App = () => {
  return (
    <div>
      <div>
        <ul>{ dataStoreThree.data.map(item => (
          <li key={item.id}>{item.name}</li>
        )) }</ul>
      </div>
      <button onClick={() => dataStoreThree.setChannelData()}>获取数据</button>
    </div>
  );

}

export default observer(App);
