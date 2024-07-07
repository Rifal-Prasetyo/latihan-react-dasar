import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';


// ReactJS episode 5 StateLess Component dan StateFull Component
// StateLess(using functional compon or arrow function) component example
// di folder components

// StateFull Component(atau disebut Class Component)
// example
// di pindah di folder container


// cek folder components dan container

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
