import React from 'react';
import ReactDOM from "react-dom";
import App from './App.jsx'
import { StoreProvider } from './Contexto.jsx'

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)
