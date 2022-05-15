import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import storeContext from './StoreContext'

export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <storeContext.Provider value={store}>
      {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}
      <App />
    </storeContext.Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();
