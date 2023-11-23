import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import './AddServices.css';
import { Button, TextField } from '@mui/material';

function Addservices() {
  return (
    <div>

      <div className='admin-addservice'>

        <NavbarAdmin />

        <div className='contenidoAddservice'>

          <h1>Crear nuevo servicio</h1>

          <div className='section-formS'>
          
            <div className='section1'>
              <div className='circle'>Selecciona el icono del servicio</div>
              <div className='rectangulo'>Seleccionar la imagen del servicio</div>
            </div>
            
            <div className='section2'>
              <TextField
                fullWidth 
                className='input-new'
                label="Nombre del servicio"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Informacion"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Precios"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Objetivo"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Sintomas o reacciones"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Frecuencia"
                variant="standard"
              />
              <Button variant="contained" fullWidth style={{marginTop: "30px", backgroundColor: "#00c853"}}>Registrar servicio</Button>
            </div>
          
          </div>

        </div>

        <Footer />

      </div>
    
    </div>
  )
}

export default Addservices