
import './css/App.css';
import Home from './Pages/Home';
import Footer from './Componentes/Footer';
import About from './Pages/About';
import Navegacion from './Componentes/Navegacion';
import Testimonios from './Pages/Testimonios';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonios' element={<Testimonios />} />
      </Routes>
  

      <Footer />
    </>
  );
}
export default App;
