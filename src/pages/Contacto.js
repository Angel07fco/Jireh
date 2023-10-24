import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/Contacto.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contacto() {
  return (
    <div className='contenido-contacto'>

      <Navbar />

      <div className='contacto'>
        <h1 className='title'>Emergencias las 24 horas</h1>
        <div className='contacto-contenido'>
          <h4>¡Queremos conocer tu opinión!</h4>
          <h5>Nuestra misión es brindarte una atención de calidad a ti y a tus mascotas, fomentando su salud y bienestar. Es por ello que deseamos saber cual es tu experiencia con la clinica. Comparte tu opinión, comentarios, quejas y sugerencias en los siguientes contactos.</h5>
          <div className='cards'>
            <div className='cards-contacto'>
              <div className='cards-phone'>
                <div>
                  <div className='cricle-chat'>
                    <span class="material-symbols-outlined">chat</span>
                  </div>
                  <h4>Escribenos</h4>
                  <h5>7711620008</h5>
                </div>
                <div>
                  <div className='cricle-chat'>
                    <span class="material-symbols-outlined">phone</span>
                  </div>
                  <h4>Lllamadas</h4>
                  <h5>77 1162 0008</h5>
                </div>
              </div>
              <div className='cards-ubi'>
                <div className='cricle-ubi'>
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <h4>Visitanos</h4>
                <h5>Bulevar Adolfo Lopez S/N Colonia Aviación Civil</h5>
              </div>
            </div>
            <div className='formulario-contacto'>
              <div className='circle'>
                <span class="material-symbols-outlined">email</span>
              </div>
              <div className='campos'>
                <TextField
                  fullWidth 
                  required
                  className='campo-input'
                  label="Nombre(s)"
                  variant="standard"
                />
                <TextField
                  fullWidth 
                  required
                  className='campo-input'
                  label="Apellidos"
                  variant="standard"
                />
                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Correo Electronico"
                  variant="standard"
                />
                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Asunto"
                  variant="standard"
                />
                <TextField
                  fullWidth 
                  required
                  className='campo-input'
                  label="Nombre de tu mascota"
                />
                <Button className='button-contacto' fullWidth variant="contained">Enviar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
