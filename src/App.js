import {Provider} from 'react-redux'
import store from './reduxStore/store';
import Login from './Login Screen/login.jsx'


function App() {
  return <Provider store={store}>
    <Login />
  </Provider>
}

export default App;
