import {Link} from "react-router";

function Inicio() {
    const programa = 'Analisis y Desaroolo de Software'


return(
    <section>
        <h2>Bienvenidos al programa {programa} </h2>
        <p>Este es el Dashboard de la competencia de frontend con React</p>
        <p>
            Empieza por conocer <Link to = "/perfil">mi perfil</Link>
            o tambien revisa las {' '}
            <Link to="/tecnologias">tecnologias</Link> que vamos a trabajar
        </p>
    </section>
    )
}

export default Inicio
