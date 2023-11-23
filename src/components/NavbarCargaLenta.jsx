import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './styles/NavbarCargaLenta.css'
import Logo from '../assets/images/logo.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavbarCargaLenta = () => {

    const navigate = useNavigate();

    const [servicios, setServicios] = useState(null);
    const openServicios = Boolean(servicios);
    const abrirServicios = (event) => {
        setServicios(event.currentTarget);
    };
    const cerrarServicios = () => {
        setServicios(null);
    };

    const [productos, setProductos] = useState(null);
    const openProductos = Boolean(productos);
    const abrirProductos = (event) => {
        setProductos(event.currentTarget);
    };
    const cerrarProductos = () => {
        setProductos(null);
    };

    const goToHome = () => {
        navigate('/');
    };

    const goToServicios = () => {
        navigate('/servicios');
    };

    const goToServicioSeleccionado = () => {
        navigate('/servicio');
    };

    const goToTienda = () => {
        navigate('/tienda');
    };

    const goToProductoSeleccionado = () => {
        navigate('/producto');
    };

    const goToCitas = () => {
        navigate('/citas');
    };

    const goToNosotros = () => {
        navigate('/nosotros');
    };

    const goToContacto = () => {
        navigate('/contacto');
    };

    const goToCarrito = () => {
        navigate('/carrito');
    };

    const goToPerfil = () => {
        navigate('/perfil');
    };

    const goToCrearCuenta = () => {
        navigate('/crearcuenta');
    };

    const goToInicioSesion = () => {
        navigate('/login');
    };

    return(
    <div className="contenedor-lenta">
        <div class="menu1-lenta">
            <Link to='/'>
                <img src={Logo} alt="Ícono de inicio" style={{width: "200px", height: "100px"}} />
            </Link>
            <li onClick={goToCrearCuenta} style={{marginLeft: "10px"}}>
                <p style={{color: "black", cursor: "pointer"}}>Crear cuenta</p>
            </li>
            <li onClick={goToInicioSesion} style={{marginLeft: "10px"}}>
                <p style={{color: "black", cursor: "pointer"}}>Iniciar Sesion</p>
            </li>
            <li onClick={goToCarrito} style={{marginLeft: "10px"}}>
                <p style={{color: "black", cursor: "pointer"}}>Mi Carrito</p>
            </li>
            <li onClick={goToPerfil} style={{marginLeft: "10px"}}>
                <p style={{color: "black", cursor: "pointer"}}>Mi Cuenta</p>
            </li>

        </div>
            <ul>
                <li onClick={goToHome}>
                    <Button className="linkbutton" id="basic-button">Inicio</Button>
                </li>
                <li>
                    <Button className="linkbutton" id="basic-button" onClick={abrirServicios}>Servicios</Button>
                    <Menu id="basic-menu" anchorEl={servicios} open={openServicios} onClose={cerrarServicios}>
                        <MenuItem onClick={goToServicios}>Todos</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Urgencias</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Consulta general</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Servicio a domicilio</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Vacunación</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Desparacitación</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Limpieza dental</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Cirugias</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Ultrasonido</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Hozpitalización</MenuItem>
                        <MenuItem onClick={goToServicioSeleccionado}>Estética</MenuItem>
                    </Menu>
                </li>
                <li>
                    <Button className="linkbutton" id="basic-button" onClick={abrirProductos}>Tienda</Button>
                    <Menu id="basic-menu" anchorEl={productos} open={openProductos} onClose={cerrarProductos}>
                        <MenuItem onClick={goToTienda}>Todos</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Alimentos</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Medicamentos</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Tratamientos</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Higiene y Cuidado</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Accesorios</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Limpieza</MenuItem>
                        <MenuItem onClick={goToProductoSeleccionado}>Viaje y Transporte</MenuItem>
                    </Menu>
                </li>
                <li onClick={goToCitas}>
                    <Button className="linkbutton" id="basic-button">Citas</Button>
                </li>
                <li onClick={goToNosotros}>
                <Button className="linkbutton" id="basic-button">Nosotros</Button>
                </li>
                <li onClick={goToContacto}>
                    <Button className="linkbutton" id="basic-button">Contacto</Button>
                </li>
            </ul>
        <Outlet />
    </div>);
}

export default NavbarCargaLenta