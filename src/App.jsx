import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Mipresentacion from './componentes/Mipresentacion'
import fotoPerfil from './Images/foto.jpg'

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
      
      {/* Este contenedor alinea el Sidebar a la izquierda y el Contenido a la derecha */}
      <div className="contenedor-cuerpo">
        <Sidebar />
        
        <main className="contenido">
          <h2>Bienvenidos al programa {programa}</h2>
          <Mipresentacion />
          
          <section className="tarjetas">
            <Tarjeta
              icono = "⚛️"
              titulo = "React"
              descripcion = "Herramienta de javascript para construir interfaz con componentes"
              horas = {120}
              destacada = {true} />
            <Tarjeta
              icono = "⚡"
              titulo = "vite"
              descripcion = "Herramienta que crea, ejecuta y empaqueta el proyecto"
              horas = {60}
              destacada={false}/>
            <Tarjeta
              icono = "🔎"
              titulo = "ESLint"
              descripcion = "Herramienta que crea, ejecuta y empaqueta el proyecto" 
              horas = {20}
              destacada={true}/>
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  )
}

export default App