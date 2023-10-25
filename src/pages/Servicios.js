import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/Servicios.css';
import Urgencias from '../assets/images/servicios/urgencia.jpg';
import Consulta from '../assets/images/servicios/consulta.webp';
import Domicilio from '../assets/images/servicios/domicilio.webp';
import Vacunacion from '../assets/images/servicios/vacuncacion.png';
import Desparacitacion from '../assets/images/servicios/desparacitacion.png';
import LimpiezaDental from '../assets/images/servicios/limpiezadental.jpeg';
import Cirugias from '../assets/images/servicios/cirgugias.png';
import Ultrasonido from '../assets/images/servicios/ultrasonido.jpg';
import Hospitalizacion from '../assets/images/servicios/hospitalizacion.png';
import Estetica from '../assets/images/servicios/estetica.jpg';
import Button from '@mui/material/Button';

export default function Servicios() {

  return (
    <div className='servicios-todos'>

      <Navbar />

      <div className='contenido'>
        <h1 className='title'>Servicios Veterinarios JIREH</h1>
        <div className='section-servicios'>

          <div>
            <div className='section-1'>
              <img src={Urgencias} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Urgencias</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Consulta} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Consulta general</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Domicilio} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Servicio a domicilio</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Vacunacion} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Vacunación</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Desparacitacion} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Desparacitación</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={LimpiezaDental} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Limpieza dental</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Cirugias} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Cirugias</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Ultrasonido} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Ultrasonido</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Hospitalizacion} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Hospitalización</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
          </div>

          <div>
            <div className='section-1'>
              <img src={Estetica} alt="Slider 1" />
            </div>
            <div className='section-2'>
              <h5>Estética</h5>
              <div className='linea'></div>
              <Button href='/servicio' className='button' variant="contained">Ver más</Button>
            </div>
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
            <img src={Consulta} alt="Ícono de inicio" />
            <div>
              <h5>Descripción</h5>
              <p>La atención que recibimos en Clínica Veterinaria Jireh es inigualable. Siempre nos hacen sentir como parte de su familia.</p>
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
            <img src={Consulta} alt="Ícono de inicio" />
            <div>
              <h5>Descripción</h5>
              <p>No puedo agradecer lo suficiente a su equipo por salvar a mi mascota. Son verdaderos héroes.</p>
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
