import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Perfil.css';
import ImgPerfil from '../assets/images/perfil.png';
import Footer from '../components/Footer';

export default function Perfil() {
  return (
    <div className='perfil'>

      <Navbar />

      <h1 className='title'>Mi cuenta</h1>

      <div className='contenido-per'>
          <div className='perfil1'>
            <div className='foto-perfil'>
              <img src={ImgPerfil} alt="Slider 1" />
              <h2>Angel MH</h2>
            </div>
            <div className='opciones-perfil'>
              <div>Mi perfil</div>
              <div>Mis mascota(s)</div>
              <div>Historial médico</div>
              <div>Historial de citas</div>
              <div>Productos comprados</div>
            </div>
          </div>
          <div className='perfil2'>
            <h3>En esta sección podra visualizar la información de su perfil y su mascota(s), historial médico de su mascota(s), historial de citas, productos comprados y tratamientos o medicamentos sugeridos para su mascota(s).</h3>
            <div className='formulario-perfil'>
              <div className='campos'>
                <div className='campo1'>
                  <h5>Nombre(s)</h5>
                  <div className='input-campo1'>
                    <p>Angel Francisco</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

              <div className='campos'>
                <div className='campo1'>
                  <h5>Apellidos</h5>
                  <div className='input-campo1'>
                    <p>Martinez Hernández</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

              <div className='campos'>
                <div className='campo1'>
                  <h5>Usuario</h5>
                  <div className='input-campo1'>
                    <p>Angel MH</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

              <div className='campos'>
                <div className='campo1'>
                  <h5>Fecha Nacimiento</h5>
                  <div className='input-campo1'>
                    <p>03/12/2003</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

              <div className='campos'>
                <div className='campo1'>
                  <h5>Contraseña</h5>
                  <div className='input-campo1'>
                    <p>********</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

              <div className='campos'>
                <div className='campo1'>
                  <h5>Teléfono</h5>
                  <div className='input-campo1'>
                    <p>77 1132 1385</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

              <div className='campos'>
                <div className='campo1'>
                  <h5>Correo Electronico</h5>
                  <div className='input-campo1'>
                    <p>20211322@uthh.edu.mx</p>
                    <span class="material-symbols-outlined">edit</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>

      <Footer />
    </div>
  )
}
