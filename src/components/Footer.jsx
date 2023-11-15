import React from 'react';
import './styles/Footer.css';
import Logo from '../assets/images/logo.png';
import Whatsapp from '../assets/images/redes/whatsapp.webp.png';
import Facebook from '../assets/images/redes/facebook.png';
import Instagram from '../assets/images/redes/instagram.webp';
import {Button, Link} from '@mui/material';

export default function Footer() {
  return (
    <div className='piedepagina'>
      <div className='pie-1'>
        <div className='subpie1'>
          <img src={Logo} alt="Ícono de inicio" />
          <h5>Redes sociales</h5>
          <div>
            <img src={Whatsapp} alt="Whatsapp" />
            <img className='face' src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className='subpie2'>
          <div className='title'>
            <h5>Contacto</h5>
          </div>
          <div className='contacto'>
            <span class="material-symbols-outlined">phone</span>
            <h5>77 1162 0008</h5>
          </div>
          <div className='contacto'>
            <span class="material-symbols-outlined">location_on</span>
            <h5>Bulevar Adolfo Lopez S/N Colonia Aviación Civil</h5>
          </div>
        </div>
        <div className='subpie3'>
          <div>
            <Button href='/citas' className='button' variant="contained">Agendar tu cita</Button>
          </div>
          <div className='subpie3-1'>
            <h5>Blog</h5>
            <h5>Faq (Preguntas Frecuentes)</h5>
            <h5>Testimonios y Comentarios</h5>
          </div>
        </div>
      </div>
      <div className='pie-2'>
        <div className='subpie'>
          <div>
            <h5>Todos los derechos reservados 2023 &copy;JIREH</h5>
          </div>
          <div className='subpie2'>
            <Link href="/aviso-privacidad"><h5>Aviso de privacidad</h5></Link>
            <Link href="/terminos-condiciones"><h5>Terminos y condiciones</h5></Link>
            <Link href="/politicas-cookies"><h5>Politicas de Cookies</h5></Link>
            <Link href="/desarrolladores"><h5>Desarrolladores</h5></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
