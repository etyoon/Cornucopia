import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IngredientsContextProvider } from './context/IngredientsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IngredientsContextProvider>
        <App />
    </IngredientsContextProvider>
  </React.StrictMode>
);