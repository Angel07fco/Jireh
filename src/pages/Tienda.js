import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Tienda.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Product from '../assets/images/servicios/domicilio.webp';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

export default function Tienda() {

  const navigate = useNavigate();

  const goToProductoSeleccionado = () => {
    navigate('/producto');
};

  const [productos, setProductos] = useState(null);
  const openProductos = Boolean(productos);
  const abrirProductos = (event) => {
      setProductos(event.currentTarget);
  };
  const cerrarProductos = () => {
      setProductos(null);
  };

  return (
    <div className='tienda'>

      <Navbar />

      <div className='contenido-tienda'>
       
        <div className='categorias-tienda'>
          <h5>Alimentos</h5><hr></hr>
          <h5>Medicamentos</h5><hr></hr>
          <h5>Tratamientos</h5><hr></hr>
          <h5>Higiene y Cuidado</h5><hr></hr>
          <h5>Accesorios</h5><hr></hr>
          <h5>Limpieza</h5><hr></hr>
          <h5>Viaje y Transporte</h5>
        </div>

        <div className='area-productos'>
          <div className='filtros'>
            <h5>Filtro por Edad</h5>
            <div>
              <u>Cachorro</u>
              <u>Adulto</u>
              <u>Maduro</u>
            </div>
            <h5>Filtro por Tamaño</h5>
            <div>
              <u>Pequeño</u>
              <u>Mediano</u>
              <u>Grande</u>
              <u>Gigante</u>
            </div>
            <h5>Filtro por Especie</h5>
            <div>
              <u>Perros</u>
              <u>Gatos</u>
              <u>Exoticos</u>
              <u>Aves</u>
              <u>Acuaticos</u>
              <u>Reptiles</u>
            </div>
            <h5>Filtrar por Precio</h5>
          </div>
          <div className='linea'></div>
          <div className='produtos'>
            <div className='encabezado'>
              <h2>Medicamentos</h2>
              <Button className="linkbutton" id="basic-button" onClick={abrirProductos}>Ordenar por</Button>
              <Menu id="basic-menu" anchorEl={productos} open={openProductos} onClose={cerrarProductos}>
                  <MenuItem>Menor a mayor precio</MenuItem>
                  <MenuItem>Mayor a menor precio</MenuItem>
                  <MenuItem>Mas populares</MenuItem>
                  <MenuItem>Menos populares</MenuItem>
              </Menu>
            </div>
            <div className='listado-productos'>
              <div className='card-listado'>
                <img src={Product} alt="Ícono de inicio" />
                <div className='card-listado-info' onClick={goToProductoSeleccionado}>
                  <h4>Producto 1</h4>
                  <div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                  </div>
                  <h5>Desde: $000.00</h5>
                  <Button href='/carrito' className='button' variant="contained">Agregar al carrito</Button>
                </div>
              </div>

              <div className='card-listado' onClick={goToProductoSeleccionado}>
                <img src={Product} alt="Ícono de inicio" />
                <div className='card-listado-info'>
                  <h4>Producto 1</h4>
                  <div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                  </div>
                  <h5>Desde: $000.00</h5>
                  <Button href='/carrito' className='button' variant="contained">Agregar al carrito</Button>
                </div>
              </div>
              
              <div className='card-listado' onClick={goToProductoSeleccionado}>
                <img src={Product} alt="Ícono de inicio" />
                <div className='card-listado-info'>
                  <h4>Producto 1</h4>
                  <div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                  </div>
                  <h5>Desde: $000.00</h5>
                  <Button href='/carrito' className='button' variant="contained">Agregar al carrito</Button>
                </div>
              </div>

              <div className='card-listado' onClick={goToProductoSeleccionado}>
                <img src={Product} alt="Ícono de inicio" />
                <div className='card-listado-info'>
                  <h4>Producto 1</h4>
                  <div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                  </div>
                  <h5>Desde: $000.00</h5>
                  <Button href='/carrito' className='button' variant="contained">Agregar al carrito</Button>
                </div>
              </div>

              <div className='card-listado' onClick={goToProductoSeleccionado}>
                <img src={Product} alt="Ícono de inicio" />
                <div className='card-listado-info'>
                  <h4>Producto 1</h4>
                  <div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                  </div>
                  <h5>Desde: $000.00</h5>
                  <Button href='/carrito' className='button' variant="contained">Agregar al carrito</Button>
                </div>
              </div>

              <div className='card-listado' onClick={goToProductoSeleccionado}>
                <img src={Product} alt="Ícono de inicio" />
                <div className='card-listado-info'>
                  <h4>Producto 1</h4>
                  <div>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                    <span class="material-symbols-outlined">star</span>
                  </div>
                  <h5>Desde: $000.00</h5>
                  <Button href='/carrito' className='button' variant="contained">Agregar al carrito</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
