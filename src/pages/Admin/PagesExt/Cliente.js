import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import './Cliente.css'
import { Button, TextField } from '@mui/material';
import Footer from '../../../components/Footer';

function Cliente() {
  return (
    <div>

      <div className='admin-cliente'>

        <NavbarAdmin />

        <div className='contenidoCliente'>

          <h1>Cliente seleccionado</h1>

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
                  label="Usuario"
                  variant="standard"
                />

                <TextField
                  fullWidth 
                  className='campo-input'
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
                  label="Fecha de Nacimiento"
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

export default Cliente