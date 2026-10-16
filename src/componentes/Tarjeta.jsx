import reactLogo from '../assets/react.svg'

function Tarjeta({icono, titulo, descripcion, horas, destacada}){
   
    return(
        <article className= {destacada ? 'Tarjeta tarjeta-destacada' : 'tarjeta'}>
            <span className='terjeta-icono'>{icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p className= "tarjeta-horas"> ⏱️ {horas} horas</p>
        </article>
    )
}

export default Tarjeta