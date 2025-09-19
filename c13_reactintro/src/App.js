import logo from './logo.svg';
import './App.css';
import Navegacion from './Navegacion/Navegacion.jsx';

function App() {
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
