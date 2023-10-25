import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className='login'>

      <Navbar />

      <div className='formulario-login'>
        <h1 className='title'>Crear una cuenta</h1>
      </div>

      <div className='form'>
        <TextField
          fullWidth
          required
          label="Telefono"
          id="standard-size-normal"
          variant="standard"
        />
      </div>

      <div className='form'>
        <TextField
          fullWidth
          required
          label="Contraseña"
          id="standard-size-normal"
          variant="standard"
        />
      </div>

      <div className='form'>
        <Button fullWidth className='button-crear' variant="contained">Crear Cuenta</Button>
      </div>

      <div className='form-en'>
        <a href='/recuperar'>Recuperar teléfono o contraseña?</a>
        <a href='/crearcuenta'>No tienes una cuenta? Crear una cuenta</a>
      </div>

      <div className='form'>
        <Button fullWidth className='button-registro' variant="outlined">Registrate con Facebook</Button>
      </div>

      <div className='form'>
        <Button fullWidth className='button-registro' variant="outlined">Registrate con Google</Button>
      </div>

    <Footer />    
    </div>
  )
}
