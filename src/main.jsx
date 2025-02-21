// Importamos React para poder utilizar JSX
import React from 'react';

// Importamos ReactDOM para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom/client';

// Importamos el componente principal de la aplicación
import App from './App';

// Importamos los estilos globales
import './index.css';

// Creamos la raíz de React en el elemento con id "root" y renderizamos el componente App
ReactDOM.createRoot(document.getElementById('root')) // Obtiene el elemento "root" del HTML
  .render(<App />); // Renderiza la aplicación en el DOM
