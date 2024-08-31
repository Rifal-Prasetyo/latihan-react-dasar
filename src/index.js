import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import {legacy_createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer/globalReducer';
const createStore = legacy_createStore;


const reduxStore = createStore(rootReducer);
// cek folder components dan container

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <Home />
//     </Provider>    
//   </React.StrictMode>
// );

// menggunakan Context milik React bawaan
root.render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
