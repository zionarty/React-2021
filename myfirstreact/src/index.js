import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Example1-2 Coding JSX
const myElement = <h1>Test Element</h1>
const testelement = React.createElement('h1',{},'Test Element2')

//Expressions in JSX
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

//Inserting a Large Block of HTML
const testelement2 = (
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>
)

//One Top Level Element
const testelement3 = (
  <div>
    <h1>Test H1</h1>
    <h2>Test H2</h2>
  </div>
)

//Elements Must be Closed
const testelement4 = <input type="text" />
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  testelement4,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
