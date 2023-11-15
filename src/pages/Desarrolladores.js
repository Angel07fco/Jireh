import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../assets/styles/Desarrolladores.css";
import Angel from '../assets/images/angel.jpg';
import Abelardo from '../assets/images/abelardo.jpg';

function Desarrolladores() {
  return (
    <div className='desarrolladores'>
      
      <Navbar />

      <section className='section-desarrolladores'>
        <h1 className='title'>Información de los Desarrolladores</h1>
        <h5>En esta sección se proporciona la información de los desarrolladores del sistema, asi como la organización a la que pertenecen, su dirección y medios de contacto...</h5>
        
        <div className='section-images'>

          <div className='integrantes'>
            <img src={Angel} alt="Ángel Francisco Martínez Hernández" />
            <div>
              <h5 style={{marginBottom: "-20px"}}>Ángel Francisco Martínez Hernández</h5>
              <h5 style={{marginBottom: "-20px"}}>Universidad Tecnológica de la Huasteca Hidalguense (UTHH)</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Carrera:</strong> Ingeniería en Desarrollo y Gestión de Software</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Matricula:</strong> 20211322</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Correo:</strong> 20211322@uthh.edu.mx</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Teléfono:</strong> 7711321385</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Grado:</strong> 7</h5>
              <h5><strong>Grupo:</strong> A</h5>
            </div>
          </div>

          <div className='integrantes'>
            <img src={Abelardo} alt="Abelardo Hernández Hernández" />
            <div>
              <h5 style={{marginBottom: "-20px"}}>Abelardo Hernández Hernández</h5>
              <h5 style={{marginBottom: "-20px"}}>Universidad Tecnológica de la Huasteca Hidalguense (UTHH)</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Carrera:</strong> Ingeniería en Desarrollo y Gestión de Software</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Matricula:</strong>20200782</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Correo:</strong>20200782@uthh.edu.mx</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Teléfono:</strong>7714025417</h5>
              <h5 style={{marginBottom: "-20px"}}><strong>Grado:</strong>7</h5>
              <h5><strong>Grupo:</strong>A</h5>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    
    </div>
  )
}

export default Desarrolladores