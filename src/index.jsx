import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './e commerse redux/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from '../src/e commerse redux/redux/store';
import { DarkModeProvider } from "../src/e commerse redux/context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Reach UI https://reach.tech
reportWebVitals();
