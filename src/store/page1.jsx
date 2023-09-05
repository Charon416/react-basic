// 导入counterStore
import counterStore from './store/counterStore';

// 导入observe方法
import { observer } from 'mobx-react-lite';
const App = () => {
  return (
    <div>
      <h2>{ counterStore.count }</h2>
      <button onClick={() => counterStore.addCount()}>加一</button>
    </div>
  );

}

export default observer(App);
