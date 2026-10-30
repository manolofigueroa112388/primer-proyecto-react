import { opcionesMenu } from '../data/menu.js';
import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-titulo">Hola Manuel Andrés</h2>
        <h3 className="sidebar-titulo">Menú</h3>
        <nav> 
          <ul className="sidebar-menu">
            {opcionesMenu.map((opcion) => (
              <li key={opcion.id}>
                <a href={opcion.url}>
                  {opcion.icono} {opcion.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="sidebar-pie">3312943 - ADSO</p>
    </aside>
  );
}

export default Sidebar;