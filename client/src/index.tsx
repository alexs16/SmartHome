import React from 'react';
//import ReactDOM from 'react-dom/client'; // instead of import ReactDOM from 'react-dom'; react 18
import ReactDOM from 'react-dom'; //react17
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

//React 17
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
/*   //same with the above  -react18  --but there is an issue with react 18 that navlink is not redirecting pages only the URL
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
