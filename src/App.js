import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { Routes, Route } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio';
import Nosotros from './Components/Nosotros/Nosotros';
import Pasteleria from './Components/Pasteleria/Pasteleria';
import Tortas from './Components/Tortas/Tortas';
import Contacto from './Components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/#/Inicio' element={<Inicio />} />
        <Route path='/#/Nosotros' element={<Nosotros />} />
        <Route path='/#/Pasteleria' element={<Pasteleria />} />
        <Route path='/#/Tortas' element={<Tortas />} />
        <Route path='/#/Contacto' element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
