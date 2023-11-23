import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import './Agendar.css';
import { Button, TextField } from '@mui/material';

function Agendar() {
  return (
    <div>

        <div className='admin-agendar'>

            <NavbarAdmin />

            <div className='contenidoAgendar'>

                <h1>Agendar nueva cita</h1>

                <div className='section-age'>

                    <TextField
                        fullWidth 
                        className='input'
                        label="Seleccionar cliente"
                        variant="standard"
                    />

                    <TextField
                        fullWidth 
                        className='input'
                        label="Seleccionar mascota"
                        variant="standard"
                    />

                    <TextField
                        fullWidth 
                        className='input'
                        label="Seleccionar Especie"
                        variant="standard"
                    />

                    <TextField
                        fullWidth 
                        className='input'
                        label="Fecha y hora de la cita"
                        variant="standard"
                    />

                    <TextField
                        fullWidth 
                        className='input'
                        label="Motivo de la cita"
                        variant="standard"
                    />  

                    <TextField
                        fullWidth 
                        className='input'
                        label="Mensaje adicional (Especificaciones)"
                        variant="standard"
                    /> 

                    <Button variant="contained" fullWidth className='edi'>Agendar cita</Button>

                </div>

            </div>

            <Footer />

        </div>
        
    </div>
  )
}

export default Agendar