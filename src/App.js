import React from 'react';
import { Provider } from "react-redux";
import rootSaga from "./store/sagas";
import { configureStore } from "./store";
import './styles/tailwind.css';
import AppRouter from './router';


const { store, runSaga } = configureStore();
runSaga(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
