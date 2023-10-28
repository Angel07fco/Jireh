import React from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';

function Default() {
  return (
    <div>

        <NavbarAdmin />
        <div className='seleccionado-default'>
            <h1>¡Oops! Parece que has llegado a un lugar inexplorado. La página que buscas no está disponible. Te recomendamos explorar nuestras otras secciones o volver a la página de inicio</h1>
        </div>

    </div>
  )
}

export default Default