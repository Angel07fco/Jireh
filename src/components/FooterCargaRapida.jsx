import React from 'react';
import './styles/Footer.css';
import {Link} from '@mui/material';

export default function Footer() {
  return (
    <div className='piedepagina'>
      <div className='pie-1-carga'>
        <div>
        <h5 style={{textAlign: "center", cursor: "pointer"}}>WhatsApp</h5>
        <h5 style={{textAlign: "center", cursor: "pointer"}}>Facebook</h5>
        <h5 style={{textAlign: "center", cursor: "pointer"}}>Instagram</h5>
        <h5 style={{textAlign: "center", cursor: "pointer"}}>Blog</h5>
        <h5 style={{textAlign: "center", cursor: "pointer"}}>Faq (Preguntas Frecuentes)</h5>
        <h5 style={{textAlign: "center", cursor: "pointer"}}>Testimonios y Comentarios</h5>
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
