import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

/* Paso 1 para rutas: instalar react-router-dom: npm i react-router-dom */

/* Paso 2: importar BrowserRouter */
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

/* Paso 3: envolver la aplicación con BrowserRouter */
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>


);

