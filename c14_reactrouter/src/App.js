import logo from './assets/logo.svg';
import Footer from './Componentes/Footer';
import Nav from './Componentes/Nav';
import './css/App.css';

/* Paso 4: importo la configuración de las rutas */
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

/* Paso 5: importar las páginas o componentes */

function App() {
  return (
    <>
      <Nav />{/* componente de navegacion */}

      {/* configuracion de rutas */}
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>

      <Footer />{/* componente de pie de pagina */}
    </>
  );
}

export default App;
