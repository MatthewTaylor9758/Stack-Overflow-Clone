import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/csrf/token");
  };

  getCSRFToken();
}

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <>
        <NavBar />
        <App />
      </>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
