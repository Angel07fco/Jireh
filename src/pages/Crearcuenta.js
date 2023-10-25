import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/CrearCuenta.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Footer from '../components/Footer';

export default function Crearcuenta() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='crearcuenta'>

      <Navbar />

      <div className='formulario-crearcuenta'>
        <h1>Crear una cuenta</h1>
        <h5>¡Únete a la Comunidad de JIREH!"</h5>
        <p>En JIREH, valoramos a nuestros miembros y su compromiso con el bienestar de sus queridas mascotas. Nuestro formulario de inicio de sesión es el primer paso para unirte a nuestra creciente comunidad de amantes de los animales y obtener acceso a una variedad de ventajas personalizadas.</p>
      
        <div className='formik'>
          <div>
            <TextField
              fullWidth
              required
              label="Nombre(s)"
              placeholder='Por favor ingresa tu nombre'
              id="standard-size-normal"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              label="Apellido"
              placeholder='Por favor ingresa tus apellidos'
              id="standard-size-normal"
              variant="standard"
            />
          </div>
        </div>

        <div className='formik'>
          <div>
            <TextField
              fullWidth
              required
              label="Teléfono"
              placeholder='Déjanos tu número de teléfono para poder contactarte'
              id="standard-size-normal"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              label="Fecha de Nacimientos"
              id="standard-size-normal"
              variant="standard"
            />
          </div>
        </div>
      
        <div className='formik'>
          <div>
            <TextField
              fullWidth
              required
              label="Contraseña"
              id="standard-size-normal"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              label="Confirmar Contraseña"
              id="standard-size-normal"
              variant="standard"
            />
          </div>
        </div>

        <div className='terminos'>
          <Checkbox {...label} />
          <h5>Terminos y condiciones</h5>
        </div>

        <div className='terminos'>
          <Button onClick={() => {alert('¡Éxito! Te has registrado correctamente. Ya eres parte de la comunidad Jireh.');}} fullWidth className='button-crear' variant="contained">Crear Cuenta</Button>
        </div>

        <div className='ya'>
          <h5>Ya tienes una cuenta?</h5>
          <a className='' href='/login'>Inicia sesión</a>
        </div>

        <div className='terminos'>
          <Button fullWidth className='button-registro' variant="outlined">Registrate con Facebook</Button>
        </div>

        <div className='terminos'>
          <Button fullWidth className='button-registro' variant="outlined">Registrate con Google</Button>
        </div>

      </div>5

      <Footer />
      
    </div>
  )
}
