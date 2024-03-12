import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persiststore } from './store/store'
import { Provider } from 'react-redux'
import { Store } from './store/store' // jya store create karyo hoy tya thi import karvano.(ahiya dhyn rakhvano je store name hot te same apvanu.)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <PersistGate persistor={persiststore} >  { /* persisitGate no use persistnte store ne add krva mate thy che. */ }
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
