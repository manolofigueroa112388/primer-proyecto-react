import MenuUsuario from './MenuUsuario'

function Encabezado({ usuario }) {
  return (
    <header className="encabezado">
      <div className="encabezado-marca">
        <span className="encabezado-logo">⚛️</span>
        <h1>Mi Dashboard</h1>
      </div>
      <MenuUsuario usuario={usuario} />
    </header>
  )
}

export default Encabezado