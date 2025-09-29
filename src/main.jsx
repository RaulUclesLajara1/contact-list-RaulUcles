import App from './App.jsx'
import { StoreProvider } from './Contexto.jsx'
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)
