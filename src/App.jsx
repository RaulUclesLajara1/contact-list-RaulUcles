import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import VistaContactos from './VistaContactos'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<VistaContactos/>} path="/"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
