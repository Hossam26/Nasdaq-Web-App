import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'overmind-react'
import { config } from './StockDataStore'
import { createOvermind } from 'overmind'
const overmind = createOvermind(config)
    
ReactDOM.render(
    <React.StrictMode>

      <Provider value={overmind}>
    <App />
      </Provider>
  </React.StrictMode>

 ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
