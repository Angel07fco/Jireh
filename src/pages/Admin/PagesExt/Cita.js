import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import './Cita.css';
import { Button, TextField } from '@mui/material';

function Cita() {
  return (
    <div>

      <div className='admin-cita'>

        <NavbarAdmin />

        <div className='contenidoCita'>

          <h1>Cita seleccionada</h1>

          <div className='form-cita'>

            <div className='form-cita1'>
              <div className='circle'>
                <p>Imagen de perfil</p>
              </div>
            </div>

            <div className='form-cita2'>
              <div className='section-buttons'>
                <Button variant="contained" className='edi'>Editar</Button>
                <Button variant="outlined" className='upd'>Eliminar</Button>
              </div>
              <div className='section-inputs'>
                
                <TextField
                  fullWidth 
                  className=''
                  label="Nombre(s)"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Apellidos"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Telefono"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Correo electronico"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Nombre mascota"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Especie"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Fecha y Hora"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Motivo de la cita"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
                  label="Mensaje adicional"
                  variant="standard"
                />

              </div>
            </div>

          </div>

        </div>

        <Footer />

      </div>
    
    </div>
  )
}

export default Cita