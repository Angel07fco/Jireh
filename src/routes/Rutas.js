import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import Tienda from '../pages/Tienda';
import Citas from '../pages/Citas';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Carrito from '../pages/Carrito';
import Perfil from '../pages/Perfil';
import Crearcuenta from '../pages/Crearcuenta';
import Login from '../pages/Login';
import Default from '../pages/Default';

function Rutas() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='servicios' element={<Servicios />} />
          <Route path='tienda' element={<Tienda />} />
          <Route path='citas' element={<Citas />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='carrito' element={<Carrito />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='crearcuenta' element={<Crearcuenta />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default Rutas;
