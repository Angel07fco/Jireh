import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import ServicioSeleccionado from '../pages/ServicioSeleccionado';
import Tienda from '../pages/Tienda';
import ProductoSeleccionado from '../pages/ProductoSeleccionado';
import Citas from '../pages/Citas';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Carrito from '../pages/Carrito';
import Perfil from '../pages/Perfil';
import Crearcuenta from '../pages/Crearcuenta';
import Login from '../pages/Login';
import Recuperar from '../pages/Recuperar';
import AvisoPrivacidad from '../pages/AvisoPrivacidad';
import TerminosCondiciones from '../pages/TerminosCondiciones';
import PoliticasCookies from '../pages/PoliticasCookies';
import Desarrolladores from '../pages/Desarrolladores';
import Default from '../pages/Default';

import Admin from '../pages/Admin/Admin';
import CitasA from '../pages/Admin/Citas';
import ClientesA from '../pages/Admin/Clientes';
import ServiciosA from '../pages/Admin/Servicios';
import TiendaA from '../pages/Admin/Tienda';
import VentasA from '../pages/Admin/Ventas';
import DefaultA from '../pages/Admin/Default';

function Rutas() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='servicios' element={<Servicios />} />
          <Route path='servicio' element={<ServicioSeleccionado />} />
          <Route path='tienda' element={<Tienda />} />
          <Route path='producto' element={<ProductoSeleccionado />} />
          <Route path='citas' element={<Citas />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='carrito' element={<Carrito />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='crearcuenta' element={<Crearcuenta />} />
          <Route path='login' element={<Login />} />
          <Route path='recuperar' element={<Recuperar />} />
          <Route path='aviso-privacidad' element={<AvisoPrivacidad />} />
          <Route path='terminos-condiciones' element={<TerminosCondiciones />} />
          <Route path='politicas-cookies' element={<PoliticasCookies />} />
          <Route path='desarrolladores' element={<Desarrolladores />} />
          <Route path='*' element={<Default />} />

          <Route path='admin' element={<Admin />} />
          <Route path='admin/citas' element={<CitasA />} />
          <Route path='admin/clientes' element={<ClientesA />} />
          <Route path='admin/servicios' element={<ServiciosA />} />
          <Route path='admin/tienda' element={<TiendaA />} />
          <Route path='admin/ventas' element={<VentasA />} />
          <Route path='admin/*' element={<DefaultA />} />
      </Routes>
    </div>
  );
}

export default Rutas;
