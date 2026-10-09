function PiePagina(){
    const anio = new Date().getFullYear()

    return(
        <footer className="pie">
            <p>SENA - CTPI - {anio}</p>
        </footer>
    )
}

export default PiePagina