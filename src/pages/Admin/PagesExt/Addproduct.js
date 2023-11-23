import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import './AddServices.css';
import { Button, TextField } from '@mui/material';

function Addproduct() {
  return (
    <div>

      <div className='admin-addservice'>

        <NavbarAdmin />

        <div className='contenidoAddservice'>

          <h1>Crear un nuevo Producto</h1>

          <div className='section-formS'>
          
            <div className='section1'>
              <div className='rectangulo'>Seleccionar la imagen del producto</div>
            </div>
            
            <div className='section2'>
              <TextField
                fullWidth 
                className='input-new'
                label="Nombre del producto"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Descripcion"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Precio"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Cantidad"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Categorias y filtros"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Marca"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Modo de uso"
                variant="standard"
              />
              <TextField
                fullWidth 
                className='input-new'
                label="Advertencias o precauciones"
                variant="standard"
              />
              <Button variant="contained" fullWidth style={{marginTop: "30px", backgroundColor: "#00c853"}}>Registrar producto</Button>
            </div>
          
          </div>

        </div>

        <Footer />

      </div>

    </div>
  )
}

export default Addproduct