import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/ProductoSeleccionado.css';
import Peluqueria from '../assets/images/peluqueria.jpeg';
import Button from '@mui/material/Button';

export default function ProductoSeleccionado() {
  return (
    <div className='producto-seleccionado'>

      <Navbar />

      <div className='seleccionado-pro'>
        <div className='contenido-pro'>
          <div>
            <h1>Producto</h1>
            <div className='linea'></div>
          </div>
          <div className='servicio-estetica'>
            <h1>Nombre del producto</h1>
          </div>
          <div>
            <h5>Calificación</h5>
            <div className='calificacion'>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
          </div>
        </div>

        <div className='servicio-informacion'>
          <div>
            <img src={Peluqueria} alt="Ícono de inicio" />
          </div>
          <div className='informacion'>
            <div>
              <h2>Descripción del producto</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
            </div>
            <div>
              <h2>Precio: $000.00</h2>
              <div className='seccion-buttons'>
                <Button className='button-cita' variant="contained">Agregar al carrito</Button>
                <Button className='button-cita' variant="contained">Comprar</Button>
              </div>
            </div>
            <div>
              <h2>Categoria: </h2>
              <h2>Marca: </h2>
            </div>
          </div>
          <div className='informacion'>
              <h2>Modo de uso</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
          <div className='informacion'>
              <h2>Advertencias o precauciones</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
