import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/Nosotros.css';
import Animales from '../assets/images/imagendeanimalitos.jpg';
import Etica from '../assets/images/Valores/etica.jpg';
import Integridad from '../assets/images/Valores/integridad.jpg';
import Respeto from '../assets/images/Valores/respeto.jpeg';
import Perfil from '../assets/images/perfil.png';

export default function Nosotros() {
  return (
    <div className='nosotros'>
      <Navbar />

      <div className='contenido-nosotros'>
        <h1 className='title'>Acerca de JIREH</h1>
        <div className='section-nosotros'>
          <div>
            <img src={Etica} alt="Ícono de inicio" />
          </div>
          <div className='section-eslogan'>
            <h1>Somos tu mejor opción</h1>
            <p>En Clínica Veterinaria Jireh, somos un equipo de amantes de los animales que comparten una pasión por brindar el mejor cuidado posible.</p>
          </div>
        </div>
        <div className='section-nosotros'>
          <div>
            <img src={Animales} alt="Ícono de inicio" />
          </div>
          <div className='section-eslogan'>
            <h1>Historia de JIREH</h1>
            <p>La historia de la Clínica Veterinaria "Jireh" se remonta a su fundador, un apasionado amante de los animales y el significado bíblico del nombre "JIREH" (que significa "Dios proveerá").</p>
          </div>
        </div>
      </div>

      <h1 className='valores-title'>Valores</h1>

      <div className='nosotros-valores'>
        <div className='nosotros-indicadores'>
          <span class="material-symbols-outlined">arrow_circle_left</span>
        </div>
        <div className='nosotros-card'>
          <div className='card-title'>Etica Profesional</div>
          <div className='card-title'>
            <img src={Etica} alt="Ícono de inicio" />
          </div>
          <div className='card-info'>
            <p>Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
        </div>
        <div className='nosotros-card'>
          <div className='card-title'>Integridad</div>
          <div className='card-title'>
            <img src={Integridad} alt="Ícono de inicio" />
          </div>
          <div className='card-info'>
            <p>Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
        </div>
        <div className='nosotros-card'>
          <div className='card-title'>Respeto</div>
          <div className='card-title'>
            <img src={Respeto} alt="Ícono de inicio" />
          </div>
          <div className='card-info'>
            <p>Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
        </div>
        <div className='nosotros-indicadores'>
          <span class="material-symbols-outlined">arrow_circle_right</span>
        </div>
      </div>

      <div className='contenido-nosotros'>
        <div className='section-nosotros'>
          <div>
            <img src={Animales} alt="Ícono de inicio" />
          </div>
          <div className='section-eslogan'>
            <h1>Misión</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta tempore consequatur neque labore eaque obcaecati totam. Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
          </div>
        </div>
        <div className='section-nosotros'>
          <div>
            <h1>Visión</h1>
            <p>
              La historia de la Clínica Veterinaria "Jireh" se remonta a su fundador, un apasionado amante de los animales y el significado bíblico del nombre "JIREH" (que significa "Dios proveerá"), decidió establecer una clínica veterinaria que reflejara sus valores y principios.
            </p>
          </div>
          <div className='section-eslogan'>
            <img src={Animales} alt="Ícono de inicio" />
          </div>
        </div>
      </div>

      <h1 className='equipo-title'>Equipo de trabajo</h1>

      <div className='equipodetrabajo'>
        <div className='equipo-perfil'>
          <img src={Perfil} alt="Ícono de inicio" />
          <h5>MVZ. Eddie Hernández Vidal</h5>
          <p>Dueño de la empresa JIREH</p>
        </div>
        <div className='equipo-informacion'>
          <div className='info-parte1'>
            <div className='checc'>
              <span class="material-symbols-outlined">check</span>
              <h2>Preparación Academica</h2>
            </div>
            <div className='texto'>
              <p>Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
            </div>
          </div>
          <div className='info-parte2'>
            <div className='checc'>
              <span class="material-symbols-outlined">check</span>
              <h2>Experiencia Profesional</h2>
            </div>
            <div className='texto'>
              <p>Magni quo sapiente adipisci quibusdam sint? Laboriosam, vero accusantium esse rem vel totam.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='equipo-ubicacion'>
        <div className='ubi'>
          <h2>Horarios de atención</h2>
          <h5>Lunes a Sabado de 9:00am a 19:00pm</h5>
          <h5>Urgencias las 24 horas</h5>
          <div>
            <span class="material-symbols-outlined">location_on</span>
            <h5>Bulevar Adolfo Lopez S/N Colonia Aviación Civil</h5>
          </div>
        </div>
        <div className='mapa'>
          Mapa de google maps de la ubicación de JIREH
        </div>
      </div>

      <Footer />

    </div>
  )
}