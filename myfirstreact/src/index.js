import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Example1-2 Coding JSX
const myElement = <h1>Test Element</h1>
const testelement = React.createElement('h1',{},'Test Element2')

//Expressions in JSX
const testElement2 = <h1>React is {5+5} time better with jsx</h1>

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  testelement2,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
