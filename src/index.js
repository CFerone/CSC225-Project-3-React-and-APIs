/* 
    Use the website "https://jshint.com/", to check for errors in the code
    ALWAYS CHECK FOR ERRORS USING THE ONLINE VALIDATOR !!!
*/

// Courtney Ferone - CSC 225 Project #3 (APIs and React)


// The two below React imports MUST ALWAYS be included and referenced in the index.js file
import React from 'react';
import ReactDOM from 'react-dom/client';


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
/*
  Made sure to import Bootstrap BEFORE our main CSS file below (index.css) to make it easier to alter Bootstrap’s default styling 
  with this file as desired
*/


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
