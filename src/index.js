// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; // The root component

// Render the root component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
