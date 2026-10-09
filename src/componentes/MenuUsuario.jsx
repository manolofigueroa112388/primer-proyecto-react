import fotoperfil from '../images/foto.jpg'

function MenuUsuario(){
    const nombre = 'Manuel Figueroa'
    const rol = 'Aprendiz ADSO'

    return(
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-boton'>
                <img src={fotoperfil} alt={`Foto de ${nombre}`} className='avatar' />
                <span className='menu-usuario-datos'>
                   <span className='menu-usuario-nombre'></span> 
                   <span className='menu-usuario-rol'></span>
                </span>
                <span className='flecha'>⬇️</span>
            </button>
            <ul className='menu-desplegable'>
                <li><a href='#'>⛷️Mi perfil</a></li>
                <li><a href='#'>⚙️Configuración</a></li>
                <li className='separador'></li>
                <li><a href='#' className='cerrar-sesión'>Cerrar sesión</a></li>

            </ul>
        </div>
    )
}

export default MenuUsuario