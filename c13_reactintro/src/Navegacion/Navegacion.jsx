

/* Una función nativa de JS es un componente funcional en React - JSX */
function Navegacion() {
    return(
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>
                    <a 
                        href="https://www.educacionit.com/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Educación IT
                    </a>
                </li>
            </ul>
        </nav>
    );
}

/* Los componentes en React son reutilizables y pueden ser exportados a otros archivos */
export default Navegacion;



