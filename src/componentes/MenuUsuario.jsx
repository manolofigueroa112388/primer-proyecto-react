function MenuUsuario({ usuario }) {
  return (
    <div className="menu-usuario">
      <button type="button" className="menu-usuario-boton">
        <img src={usuario.foto} alt={`Foto de ${usuario.nombre}`} className="avatar" />
        <span className="menu-usuario-datos">
          <span className="menu-usuario-nombre">{usuario.nombre}</span>
          <span className="menu-usuario-rol">{usuario.rol}</span>
        </span>
        <span className="flecha">▾</span>
      </button>

      <ul className="menu-desplegable">
        <li><a href="#">⛷️ Mi perfil</a></li>
        <li><a href="#">⚙️ Configuración</a></li>
        <li className="separador"></li>
        <li><a href="#" className="cerrar-sesion">🚪 Cerrar sesión</a></li>
      </ul>
    </div>
  )
}

export default MenuUsuario