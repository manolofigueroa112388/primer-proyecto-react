import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Mipresentacion from './componentes/Mipresentacion'

function App(){
  const programa = 'ADSO'
  return(
    <div className="layout">
      <Encabezado />
      
      {/* Este contenedor alinea el Sidebar a la izquierda y el Contenido a la derecha */}
      <div className="contenedor-cuerpo">
        <Sidebar />
        
        <main className="contenido">
          <h2>Bienvenidos al programa {programa}</h2>
          <Mipresentacion />
          
          <section className="tarjetas">
            <Tarjeta />
            <Tarjeta />
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  )
}

export default App