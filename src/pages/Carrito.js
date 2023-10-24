import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Carrito.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import vacuncacion from '../assets/images/servicios/vacuncacion.png';
import Footer from '../components/Footer';

export default function Carrito() {

  const [servicios, setServicios] = useState(null);
  const openServicios = Boolean(servicios);
  const abrirServicios = (event) => {
      setServicios(event.currentTarget);
  };
  const cerrarServicios = () => {
      setServicios(null);
  };

  return (
    <div className='contenido-carrito'>

      <Navbar />

      <div className='micarrito'>
        <h1 className='title'>Mi carrito</h1>
        <div className='contenido-carrito'>
         
          <div className='list-productos'>

            <div className='producto-lis'>
              <div className='opciones'>
                <div>Imagen</div>
                <div>Producto</div>
                <div>Precio</div>
                <div>Cantidad</div>
                <div>Total</div>
              </div>
              <div className='seccion-contenido'>
                <div>
                  <img src={vacuncacion} alt="Ícono de inicio" />
                </div>
                <div>Nombre del producto</div>
                <div>$000.00</div>
                <div>
                  <div>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                  </div>
                </div>
                <div>$000.00</div>
              </div>
              <div className='canceled'>
                <Button className='button-carrito' variant="contained">Eliminar del carrito</Button>
              </div>
            </div>

          </div> 
          
          <div className='total-carrito'>
            <h4>Total del carrito</h4>
            <div className='calculo-total'>
              <div className='subtotal'>
                <h5>Subtotal: $000.00</h5>
              </div>
              <div className='envio'>
                <div className='envio1'>
                  <h5>Envio:</h5>
                  <p>Solo sitios que la veterinaria tenga acceso.</p>
                </div>
                <div>
                  <h5>Seleccione:</h5>
                  <div className='selecteds'>
                      <div>
                        <Button className="linkbutton" id="basic-button" onClick={abrirServicios}>Estado</Button>
                        <Menu id="basic-menu" anchorEl={servicios} open={openServicios} onClose={cerrarServicios}>
                            <MenuItem>Veracruz</MenuItem>
                            <MenuItem>Hidalgo</MenuItem>
                        </Menu>
                      </div>
                      <span class="material-symbols-outlined">expand_more</span>
                  </div>
                  <div className='selecteds'>
                      <div>
                        <Button className="linkbutton" id="basic-button" onClick={abrirServicios}>Municipio</Button>
                        <Menu id="basic-menu" anchorEl={servicios} open={openServicios} onClose={cerrarServicios}>
                            <MenuItem>Veracruz</MenuItem>
                            <MenuItem>Hidalgo</MenuItem>
                        </Menu>
                      </div>
                      <span class="material-symbols-outlined">expand_more</span>
                  </div>
                  <div className='selecteds'>
                      <div>
                        <Button className="linkbutton" id="basic-button" onClick={abrirServicios}>Localidad</Button>
                        <Menu id="basic-menu" anchorEl={servicios} open={openServicios} onClose={cerrarServicios}>
                            <MenuItem>Veracruz</MenuItem>
                            <MenuItem>Hidalgo</MenuItem>
                        </Menu>
                      </div>
                      <span class="material-symbols-outlined">expand_more</span>
                  </div>
                  <h5>$000.00</h5>
                </div>
              </div>
              <div className='subtotal'>
                <h5>Total: $000.00</h5>
              </div>
            </div>
            <p>Selecciona mas de %500 para areas ceda de la clinica o %1000 para areas mas lejanas y obten envio gratis.</p>
            <Button className="button" variant="contained">Finalizar compra</Button>
          </div>
       
        </div>
        
      </div>

      <Footer />
      
    </div>
  )
}
