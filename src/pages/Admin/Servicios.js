import React from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import Footer from '../../components/Footer';
import '../../assets/styles/Admin/Clientes.css';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

function Servicios() {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

  return (
    <div>

      <div className='admin-clientes'>

        <NavbarAdmin />

        <div className='contenidoCli'>

          <h1>Listado de servicios</h1>

          <Link href="/admin/addservices" className='link-button'>
            <Button variant="contained" fullWidth className='button-citas'>Agregar nuevo servicio</Button>
          </Link>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Icono</TableCell>
                  <TableCell align="right">Tipo de servicio</TableCell>
                  <TableCell align="right">Informacion</TableCell>
                  <TableCell align="right">Objetivo</TableCell>
                  <TableCell align="right">Precios</TableCell>
                  <TableCell align="right">Sintomas</TableCell>
                  <TableCell align="right">Frecuencia</TableCell>
                  <TableCell align="right">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                      <Link href="/admin/service" className='link-button'>
                        <Button variant="contained" className='button-citasE'>Ver mas</Button>
                      </Link>
                      <Link href="" className='link-button'>
                        <Button variant="outlined" className='button-citasEd'>Editar</Button>
                      </Link>
                      <Link href="" className='link-button'>
                        <Button variant="contained" className='button-citasE'>Eliminar</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>

        <Footer />

      </div>

    </div>
  )
}

export default Servicios