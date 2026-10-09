import React from 'react';

function Mipresentacion() {
  return (
    <div className="Mipresentacion-card">
      <div className="Mipresentacion-header">
        <h1>Mi presentación</h1>
      </div>
      
      <div className="Mipresentacion-info">
        <div className="info-item">
          <span className="info-label">Nombre</span>
          <span className="info-value">Manuel Andrés Figueroa Urbano</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Barrio</span>
          <span className="info-value">San Rafael</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Correo</span>
          <a href="mailto:manolotrading23@hotmail.com" className="info-value link">
            manolotrading23@hotmail.com
          </a>
        </div>
        
        <div className="info-item">
          <span className="info-label">Teléfono</span>
          <span className="info-value">3136225525</span>
        </div>
      </div>
    </div>
  );
}

export default Mipresentacion;