import React from "react";

/* importamos los estilos personalizados para este componente */
import './footer.css'


let footerStyle = {
    backgroundColor: "green",
    color: "white",
    textAlign: "center"
};

/* Creamos un componente funcional: es creada con una función de flecha */
const Footer = () =>{
    /* retorna un elemento JSX: sólo podemos retornar UN elemento */
    return(

        <>
           {/*  <React.Fragment> */}
                <p
                    style= {{
                        backgroundColor: "red",
                        color: "white",
                        textAlign: "center"
                        }}
                >
                    Este es un Footer
                </p>{/* Estilos en línea directos */}

                <p
                    style= { footerStyle } /* Estilos en linea con un objeto de estilos */
                >
                    Este es un Footer
                </p>


                <footer className="footer"> {/* Estilos en un archivo externo con una clase CSS */}
                    <p>Este es un Footer</p>
                </footer>
            {/* </React.Fragment> */}
        </>

    )
}


/* Exportamos el componente */
export default Footer;