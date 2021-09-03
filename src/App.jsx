import './App.css';
//import { Icon } from '@iconify/react';
//<Icon icon='twemoji:tomato' />
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store.js';

function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}
console.log(eval('5+5'))
export default App;
