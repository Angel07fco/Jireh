import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/Citas.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Citas() {
  return (
    <div className='contenido-cita'>
      <Navbar />

      <div className='agendacita'>
        <h1 className='title'>Agenda tu cita</h1>
        <div className='agendacita-contenido'>
          <div className='texto'>
            <h5>Haz tu cita totalmente en linea y recibe recomendaciones e información proporcionada por la clinica, ádemas de comentarios y experiencias de otros usuarios.</h5>
            <h4>Tu cita sera confirmada horas o dias antes ¡Tu decides!</h4>
          </div>
          <div className='agendacita-formulario'>
            <div className='dividir-formulario'>
              <div>
                <TextField
                  className='inputs-cita'
                  required
                  label="Nombre(s)"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  required
                  label="Teléfono"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  label="Nombre de tu mascota"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  required
                  label="Fecha y hora de la cita"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  label="Mensaje adicional"
                  id="standard-size-normal"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  className='inputs-cita'
                  required
                  label="Apellidos"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  label="Correo Electronico"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  required
                  label="Especie"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  required
                  label="Motivo de la cita"
                  id="standard-size-normal"
                  variant="standard"
                />
                <TextField
                  className='inputs-cita'
                  required
                  label="Recordatorio (Disponible en móvil)"
                  id="standard-size-normal"
                  variant="standard"
                />
              </div>
            </div>
            <Button className='button-cita' variant="contained">Agendar cita</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
