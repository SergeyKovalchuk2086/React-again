import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {
    id: 1,
    name: 'Bogdan'
  },
  {
    id: 2,
    name: 'Alexandra'
  }
]

let messagesData = [
  {
    id: 1,
    text: 'Hello, I`m Bogdan'
  },
  {
    id: 2,
    text: 'Hello, I`m ALexa'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
