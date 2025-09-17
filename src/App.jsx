import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import VistaContactos from './VistaContactos'
import AgregarContacto from './AgregarContacto'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<VistaContactos/>} path="/"/>
          <Route element={<AgregarContacto/>} path="/AgregarContacto/:id"/>
          <Route element={<AgregarContacto/>} path="/AgregarContacto"/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
