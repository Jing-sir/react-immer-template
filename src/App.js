import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from "./components/header";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
