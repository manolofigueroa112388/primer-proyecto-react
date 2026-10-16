import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-titulo">Hola Manuel Andrés</h2>
        <h3 className="sidebar-titulo">Menú</h3>
        <nav>
          <ul className="sidebar-menu">
            <li><a href="#inicio">🏘️ Inicio</a></li>
            <li><a href="#perfil">😎 Mi perfil</a></li>
            <li><a href="#tecnologias">🖥️ Tecnologías</a></li>
            <li><a href="#recursos">💰 Recursos</a></li>
            <li><a href="#contacto">😒 Contacto</a></li>
          </ul>
        </nav>
      </div>
      <p className="sidebar-pie">3312943 - ADSO</p>
    </aside>
  );
}

export default Sidebar;