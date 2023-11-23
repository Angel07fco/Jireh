import React from 'react';
import NavbarCargaLenta from '../../components/NavbarCargaLenta';
import FooterCargaRapida from '../../components/FooterCargaRapida';
import '../../assets/styles/CargaRapida.css';
import { useNavigate } from "react-router-dom";
import Animales from '../../assets/images/imagendeanimalitos.jpg';
import Urgencias from '../../assets/images/servicios/urgencia.jpg';
import Consulta from '../../assets/images/servicios/consulta.webp';
import Domicilio from '../../assets/images/servicios/domicilio.webp';
import Vacunacion from '../../assets/images/servicios/vacuncacion.png';
import Desparacitacion from '../../assets/images/servicios/desparacitacion.png';
import LimpiezaDental from '../../assets/images/servicios/limpiezadental.jpeg';
import Cirugias from '../../assets/images/servicios/cirgugias.png';
import Ultrasonido from '../../assets/images/servicios/ultrasonido.jpg';
import Hospitalizacion from '../../assets/images/servicios/hospitalizacion.png';
import Logo from '../../assets/images/logo.png';
import Slider1 from '../../assets/images/1.jpg'
import Button from '@mui/material/Button';

export default function Inicio() {

  const navigate = useNavigate();

  const goToServicios = () => {
    navigate('/servicios');
  };

  return (
    <div className='home'>

      <NavbarCargaLenta />

      <div className='contenido-inicio-carga'>
      
        <div>
          
        </div>

        <div className='section'>
          <div className='slider'>
          <img src={Slider1} alt="Slider 1" />
            <div className='indicadores'>
              <h5>Bienvenidos a la Clínica Veterinaria Jireh, donde la salud y la felicidad de tus mascotas son nuestra prioridad número uno.</h5>
            </div>
          </div>
          <div className='destacados'>
            <div className='promociones'>Por el momentos no hay promociones u ofertas.</div>
            <div className='noticias'>Aun no esta disponible la sección de noticias.</div>
          </div>
        </div>

        <div className='servicios-carga'>
          <img src={Animales} alt="Ícono de inicio" />
          <div className='listado'>
            <div className='servicios-1'>
              <h1>Servicios para el cuidado de tu mascota</h1>
              <div className='servicios-2'>
                <div className='varios'>
                  <li onClick={goToServicios}>
                    <img src={Urgencias} alt="Urgencias" />
                  </li>
                  <h5>Urgencias</h5>
                </div>
                <div className='varios'>
                  <li onClick={goToServicios}>
                    <img src={Consulta} alt="Consulta" />
                  </li>
                  <h5>Consulta</h5>
                </div>
                <div className='varios'>
                  <li onClick={goToServicios}>
                    <img src={Domicilio} alt="Domicilio" />
                  </li>
                  <h5>Domicilio</h5>
                </div>
                <div className='varios'>
                  <li onClick={goToServicios}>
                    <img src={Vacunacion} alt="Vacunacion" />
                  </li>
                  <h5>Vacunacion</h5>
                </div>
                <div className='varios'>
                  <li onClick={goToServicios}>
                    <img src={Desparacitacion} alt="Desparacitacion" />
                  </li>
                  <h5>Desparacitacion</h5>
                </div>
              </div>
            </div>
            <div className='servicios-2'>
              <div className='varios'>
                <li onClick={goToServicios}>
                  <img src={LimpiezaDental} alt="Urgencias" />  
                </li>
                <h5>Limpieza dental</h5>
              </div>
              <div className='varios'>
                <li onClick={goToServicios}>
                  <img src={Cirugias} alt="Cirugias" /> 
                </li>
                <h5>Cirugias</h5>
              </div>
              <div className='varios'>
                <li onClick={goToServicios}>
                  <img src={Ultrasonido} alt="Ultrasonido" />
                </li>
                <h5>Ultrasonido</h5>
              </div>
              <div className='varios'>
                <li onClick={goToServicios}>
                  <img src={Hospitalizacion} alt="Hospitalizacion" /> 
                </li>
                <h5>Hospitalizacion</h5>
              </div>
              <div className='varios1'>
                <li onClick={goToServicios}>
                  <span class="material-symbols-outlined">add</span>
                  <h5>Ver mas</h5>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className='productos-inicio'>
          <h1 className='title'>Productos</h1>
          <div className='productos-secc'>
            <div className='direccionales'>
              <span class="material-symbols-outlined">arrow_circle_left</span>
            </div>
            <div className='tarjetas'>
              <div className='tarjeta-producto'>
                <img src={LimpiezaDental} alt="Ícono de inicio" />
                <div>
                  <h5>Producto</h5>
                  <h5>$000.00</h5>
                </div>
              </div>
            </div>
            <div className='tarjetas'>
              <div className='tarjeta-producto'>
                <img src={LimpiezaDental} alt="Ícono de inicio" />
                <div>
                  <h5>Producto</h5>
                  <h5>$000.00</h5>
                </div>
              </div>
            </div>
            <div className='tarjetas'>
              <div className='tarjeta-producto'>
                <img src={LimpiezaDental} alt="Ícono de inicio" />
                <div>
                  <h5>Producto</h5>
                  <h5>$000.00</h5>
                </div>
              </div>
            </div>
            <div className='direccionales'>
              <span class="material-symbols-outlined">arrow_circle_right</span>
            </div>
          </div>
        </div>

        <div className='citas-carga'>
          <div className='contexto'>
            <h1>Agenda tu cita</h1>
            <h5>Calidad, compromiso y cuiado de tu mascota.</h5>
          </div>
          <Button href='/citas' className='button' variant="contained">Agendar cita</Button>
        </div>

        <div className='contacto'>
          <h1 className='title'>Contactanos</h1>
          <div className='contacto-section'>
            <div className='ubicacion'>
              <img src={Logo} alt="Ícono de inicio" />
              <div>
                  <span class="material-symbols-outlined">location_on</span>
                  <h5>Bulevar Adolfo Lopez S/N Colonia Aviación Civil</h5>
              </div>
              <div>
                  <span class="material-symbols-outlined">phone</span>
                  <h5>77 1162 0008</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

      <FooterCargaRapida />

    </div>
  )
}