/* importamos un boton de Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Una función nativa de JS es un componente funcional en React - JSX */
function Navegacion() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">Inicio</li>
                <li className="nav-item">Nosotros</li>
                <li className="nav-item">
                    <a 
                        href="https://www.educacionit.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nav-link">
                            Educación IT
                    </a>
                </li>
            </ul>

            {/* Usamos el botón importado de Bootstrap */}
            <button 
                className="btn btn-primary"
                type="button"
                onClick={() => alert("Botón de Bootstrap clickeado")}
            >
                Inicio de Sesión
            </button>
    
        </nav>
    );
}

/* Los componentes en React son reutilizables y pueden ser exportados a otros archivos */
export default Navegacion;



