import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Recuperar.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';

function Formulario() {
  const [mostrarCamposExtras, setMostrarCamposExtras] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const handleComprobarClick = () => {
    // Cuando se presiona "Comprobar", muestra los campos extras
    setMostrarCamposExtras(true);
  };

  const handleRespuestaClick = () => {
    // Cuando se presiona "Comprobar", muestra los campos extras
    setMostrarResultado(true);
  };

  

  return (
    <div className='recuperar'>

      <Navbar />

      <div className='formulario-recuperar'>
        <h1 className='title'>Recuperar telefono y contraseña</h1>
      </div>

      <form>

        <div className='form'>
          <TextField
            fullWidth
            required
            label="Usuario"
            id="standard-size-normal"
            variant="standard"
          />
        </div>

        <div className='form'>
          <TextField
            fullWidth
            required
            label="Fecha de Nacimiento"
            id="standard-size-normal"
            variant="standard"
          />
        </div>

        <div className='form'>
          <Button onClick={handleComprobarClick} fullWidth className='button-crear' variant="outlined">Comprobar</Button>
        </div>

        {mostrarCamposExtras && (
          <div>
            <div className='form'>
              <h5>¿Pregunta secreta?</h5>
            </div>

            <div className='form'>
              <TextField
                fullWidth
                required
                label="Respuesta"
                id="standard-size-normal"
                variant="standard"
              />
            </div>
            
            <div className='form'>
              <Button onClick={handleRespuestaClick} fullWidth className='button-crear' variant="outlined">Enviar respuesta</Button>
            </div>

          </div>
        )}

      </form>

        {mostrarResultado && (
          <div>

            <div className='respuesta-form'>
              <h5>Telefono: 77 7777 7777</h5>
              <h5>Contraseña: antr23p$09</h5>
            </div>

          </div>
        )}

      <div className='separar'></div>

      <Footer />

    </div>
    
  );
}

export default Formulario;
