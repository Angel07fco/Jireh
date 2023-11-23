import React from 'react';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Footer from '../../../components/Footer';
import './Addcliente.css';
import { Button, TextField } from '@mui/material';

function AddCliente() {
  return (
    <div>

        <div className='admin-addcliente'>

            <NavbarAdmin />

            <div className='contenidoAddcliente'>

                <h1>Nuevo cliente</h1>

                <div className='addcliente-form'>
                    <div>
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Usuario"
                            variant="standard"
                        />
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Apellidos"
                            variant="standard"
                        />
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Correo electronico"
                            variant="standard"
                        />
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Contraseña"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Nombre(s)"
                            variant="standard"
                        />
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Telefono"
                            variant="standard"
                        />
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Fecha de Nacimiento"
                            variant="standard"
                        />
                        <TextField
                            fullWidth 
                            className='input-new'
                            label="Confirmar contraseña"
                            variant="standard"
                        />
                    </div>
                </div>
                <div>
                    <Button variant="contained" fullWidth className='button-newclient'>Registrar Nuevo cliente</Button>
                </div>

            </div>

            <Footer />

        </div>
    </div>
  )
}

export default AddCliente