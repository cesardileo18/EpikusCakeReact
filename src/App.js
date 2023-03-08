import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio';
import Nosotros from './Components/Nosotros/Nosotros';
import Pasteleria from './Components/Pasteleria/Pasteleria';
import Tortas from './Components/Tortas/Tortas';
import Contacto from './Components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter basename='/EpikusCakeReact'>
        <Routes>
          <Route path='/EpikusCakeReact' element={<Inicio />} />
          <Route path='/EpikusCakeReact/Inicio' element={<Inicio />} />
          <Route path='/EpikusCakeReact/Nosotros' element={<Nosotros />} />
          <Route path='/EpikusCakeReact/Pasteleria' element={<Pasteleria />} />
          <Route path='/EpikusCakeReact/Tortas' element={<Tortas />} />
          <Route path='/EpikusCakeReact/Contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
