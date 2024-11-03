/*
Es el archivo principal donde React monta la aplicación en el DOM 
(documento HTML). Aquí se renderiza el componente App.jsx.
*/
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Asegúrate de que este archivo incluya TailwindCSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
