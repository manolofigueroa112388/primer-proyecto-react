import MenuUsuario from "./MenuUsuario"

function Encabezado(){
    return(
        <header className="encabezado">
            <div className="encabezado-marca">
            <h1>Mi primer APP con React</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tecnologías</a>
                <a href="#">Contacto</a>
            </nav>
            </div>
            <MenuUsuario />
        </header>
    )
}

export default Encabezado