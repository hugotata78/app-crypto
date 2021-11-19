import './App.css';
import Routes from './Routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { DataProvider } from './context/DataProvider';


function App() {

  return (
    <Provider store={store}>
      <DataProvider>
        <Routes />
      </DataProvider>
    </Provider>
  );
}

export default App;
