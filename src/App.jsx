import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import { tecnologias } from './data/tecnologias'
import PiePagina from './componentes/PiePagina'
import Mipresentacion from './componentes/Mipresentacion'
import fotoPerfil from './Images/foto.jpg'
import Inicio from "./pages/Inicio"
import Perfil from "./pages/Perfil"
import { Route, Routes } from 'react-router'

function App(){
  const programa = 'ADSO'
  const usuario = {
  correo: 'manolotrading23@hotmail.com',
  nombre: 'Manuel Andrés Figueroa Urbano',
  rol: 'Aprendiz ADSO',
  foto: fotoPerfil,
}
  return(
    
    <div className="layout">
      <Encabezado usuario={usuario} />
      <Sidebar />
      <div className="contenedor-cuerpo"> 
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/perfil" element = {<Perfil />} />
          </Routes>
        </main>
        <PiePagina />
      </div>

     
    </div>
  )
}

export default App;