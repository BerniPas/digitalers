import logo from './logo.svg';
import './App.css';
import Navegacion from './Navegacion/Navegacion.jsx';
import Footer from './Componentes/Footer.js';

function App() {

  let nombre = "Juan";

/*   let h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre} bienvenidos a React! Soy ${nombre}`;

  document.body.appendChild(h1); */


  return (
    <div className="App">

      {/* Llamamos al componente de navegación / se ejecuta la función Navegacion */}
        <Navegacion />

      {/* Navegacion(); */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>
          Hola, { nombre } bienvenidos a React!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>


        {/* Llamamos al componente Footer */}
        <Footer />
    </div>
  );
}

export default App;
