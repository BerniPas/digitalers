import imagenCuatro from '../assets/img4.png';

/* importamos el Boton componente */
import Boton from '../Componentes/Boton';



const About = () => {
    return (
        <section>
            <div>
                <img src={imagenCuatro} alt="Imagen 4" />
            </div>
            <div className="cuarenta">

                <h2>Formá parte de nuestro equipo</h2>
                <p>visitá nuestro perfil de LinkedIn</p>

                <Boton />
            </div>
        </section>
    );
}


export default About;