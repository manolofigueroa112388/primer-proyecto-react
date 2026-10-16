import React from 'react';

function Mipresentacion({ Nombre, Barrio, Correo, Telefono }) {
    return (        
        <article className="Mipresentacion">            
            <h2>Mi presentación</h2>            
            <p className="presentacion-nombre">{Nombre}</p>                     
            <p><strong>Barrio:</strong> {Barrio}</p>            
            <p><strong>Correo:</strong> <a href={`mailto:${Correo}`}>{Correo}</a></p>            
            <p><strong>Teléfono:</strong> <a href={`tel:${Telefono}`}>{Telefono}</a></p>        
        </article>    
    ); 
} 

export default Mipresentacion;