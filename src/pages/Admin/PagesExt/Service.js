import React from 'react';
import Navbar from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import '../../../assets/styles/ServicioSeleccionado.css';
import Estetica from '../../../assets/images/servicios/estetica.jpg';
import Peluqueria from '../../../assets/images/peluqueria.jpeg';

function Service() {
  return (
    <div className='servicios-seleccionado'>

      <Navbar />

      <div className='seleccionado-ser'>
        <div className='contenido-ser'>
          <div>
            <h1>Servicio</h1>
            <div className='linea'></div>
          </div>
          <div className='servicio-estetica'>
            <img src={Estetica} alt="Slider 1" />
            <h1>Estética</h1>
          </div>
          <div>
            <h5>Calificación</h5>
            <div>
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
              <h2>Informacion del servicio</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
            </div>
            <div>
              <h2>Objetivo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
            </div>
            <div>
              <h2>Precios</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
            </div>
          </div>
          <div className='informacion'>
              <h2>Sintomas o reacciones</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
          <div className='informacion'>
              <h2>Frecuencia</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
        </div>
      </div>

      <div className='productos'>
        <h1 className='title'>Testimonios</h1>
        <div className='productos-sec'>
          <div className='direccionales'>
            <span class="material-symbols-outlined">arrow_circle_left</span>
          </div>
          <div className='tarjetas'>
            <img src={Estetica} alt="Ícono de inicio" />
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
            <img src={Estetica} alt="Ícono de inicio" />
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

      <Footer />
    
  </div>
  )
}

export default Service