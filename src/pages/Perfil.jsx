import Presentacion from '../componentes/Mipresentacion'

function Perfil(){
    return(
        <Presentacion
            nombre= "Manuel Figueroa"
            ciudad= "Popayán"
            anioNacimiento= {1988}
            meta= "Ser ingeniero de Software"
        />
    )
}

export default Perfil