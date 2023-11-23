import React from 'react';
import FooterCargaRapida from '../../components/FooterCargaRapida';
import '../../assets/styles/Visual.css';
import { Link } from "react-router-dom";
import Consulta from '../../assets/images/servicios/consulta.webp';
import Tienda from '../../assets/images/tienda.jpg';
import Citas from '../../assets/images/citas.png';
import Nosotros from '../../assets/images/nosotros.avif';
import Contacto from '../../assets/images/contacto.jpeg';
import Logo from '../../assets/images/logo.png';

export default function Inicio() {

  return (
    <div className='home'>

        <div style={{width: "100%", height: "250px", background: "#00A5cb"}}>
            <img src={Logo} alt="Ícono de inicio" style={{width: "80%", marginLeft: "10%", height: "240px"}} />
        </div>

      <div className='contenido-inicio'>

        <div className='card-visual'>
            <div className='card-visual-1'>
                <img src={Consulta} alt="Ícono de inicio" style={{width: "100px", height: "100px"}} />
            </div>
            <div className='card-visual-2'>
                <Link to="/servicios">
                    <h1 style={{color: "white"}}>Servicios</h1>
                </Link>
            </div>
        </div>

        <div className='card-visual'>
            <div className='card-visual-1'>
                <img src={Tienda} alt="Ícono de inicio" style={{width: "100px", height: "100px"}} />
            </div>
            <div className='card-visual-2'>
                <Link to="/tienda">
                    <h1 style={{color: "white"}}>Tienda</h1>
                </Link>
            </div>
        </div>

        <div className='card-visual'>
            <div className='card-visual-1'>
                <img src={Citas} alt="Ícono de inicio" style={{width: "100px", height: "100px"}} />
            </div>
            <div className='card-visual-2'>
                <Link to="/citas">
                    <h1 style={{color: "white"}}>Citas</h1>
                </Link>
            </div>
        </div>

        <div className='card-visual'>
            <div className='card-visual-1'>
                <img src={Nosotros} alt="Ícono de inicio" style={{width: "100px", height: "100px"}} />
            </div>
            <div className='card-visual-2'>
                <Link to="/nosotros">
                    <h1 style={{color: "white"}}>Nosotros</h1>
                </Link>
            </div>
        </div>

        <div className='card-visual' style={{marginBottom: "50px"}}>
            <div className='card-visual-1'>
                <img src={Contacto} alt="Ícono de inicio" style={{width: "100px", height: "100px"}} />
            </div>
            <div className='card-visual-2'>
                <Link to="/contacto">
                    <h1 style={{color: "white"}}>Contacto</h1>
                </Link>
            </div>
        </div>

      </div>

      <FooterCargaRapida />

    </div>
  )
}