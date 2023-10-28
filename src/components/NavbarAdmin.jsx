import { Link, Outlet, useNavigate } from "react-router-dom";
import './styles/MenuAdmin.css'
import Logo from '../assets/images/logo.png';
import Button from '@mui/material/Button';

const Navbar = () => {

    const navigate = useNavigate();

    const goToCitaAdmin = () => {
        navigate('/admin/citas');
    };

    return(
    <div className="contenedor-admin">
        <div className="navbara">
            <div class="admin1">
                <Link to='/' >
                    <img src={Logo} alt="Ícono de inicio" />
                </Link>
            </div>
            <div class="admin2">
                <li onClick={goToCitaAdmin}>
                    <Button className="linknavbara" id="basic-button">JIREH</Button>
                </li>
                <li onClick={goToCitaAdmin}>
                    <Button className="linknavbara" id="basic-button">Citas</Button>
                </li>
                <li onClick={goToCitaAdmin}>
                    <Button className="linknavbara" id="basic-button">Clientes</Button>
                </li>
                <li onClick={goToCitaAdmin}>
                    <Button className="linknavbara" id="basic-button">Servicios</Button>
                </li>
                <li onClick={goToCitaAdmin}>
                    <Button className="linknavbara" id="basic-button">Tienda</Button>
                </li>
                <li onClick={goToCitaAdmin}>
                    <Button className="linknavbara" id="basic-button">Ventas</Button>
                </li>
            </div>
            <div class="admin3">
                <span class="material-symbols-outlined">account_circle</span>
                <li>
                    <p>Mi Cuenta</p>
                </li>
            </div>
        </div>
        <Outlet />
    </div>);
}

export default Navbar