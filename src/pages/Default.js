import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Default.css';

export default function Default() {
  return (
    <div className='default'>
      
      <Navbar />

      <div className='seleccionado-default'>
        <h1>¡Oops! Parece que has llegado a un lugar inexplorado. La página que buscas no está disponible. Te recomendamos explorar nuestras otras secciones o volver a la página de inicio</h1>
      </div>
    </div>
  )
}
