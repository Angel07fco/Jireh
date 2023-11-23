import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import '../../../assets/styles/ProductoSeleccionado.css';
import Peluqueria from '../../../assets/images/peluqueria.jpeg';

function Product() {
  return (
    <div className='producto-seleccionado'>

    <NavbarAdmin />

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

      <div className='productos'>
        <h1 className='title'>Testimonios</h1>
        <div className='productos-sec'>
          <div className='direccionales'>
            <span class="material-symbols-outlined">arrow_circle_left</span>
          </div>
          <div className='tarjetas'>
            <img src={Peluqueria} alt="Ícono de inicio" />
            <div>
              <h5>Descripción</h5>
              <p>En especial este servicio me gusto mucho, ya que en todo momento fui atendido de la mejor manera, me explicaron algunas medidas y consideraciones a tomar con mi mascota.</p>
              <div>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
              </div>
              <div className='user'>
                <span class="material-symbols-outlined">account_circle</span>
                <p>Angel MH</p>
              </div>
            </div>
          </div>
          <div className='tarjetas'>
            <img src={Peluqueria} alt="Ícono de inicio" />
            <div>
              <h5>Descripción</h5>
              <p>En especial este servicio me gusto mucho, ya que en todo momento fui atendido de la mejor manera, me explicaron algunas medidas y consideraciones a tomar con mi mascota.</p>
              <div>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
              </div>
              <div className='user'>
                <span class="material-symbols-outlined">account_circle</span>
                <p>Angel MH</p>
              </div>
            </div>
          </div>
          <div className='direccionales'>
            <span class="material-symbols-outlined">arrow_circle_right</span>
          </div>
        </div>
      </div>
    
    </div>

    <Footer />

  </div>
  )
}

export default Product