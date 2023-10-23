import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './styles/Menu.css'
import Logo from '../assets/images/logo.png'

const Menu = () => {

    const navigate = useNavigate();

    const [serviciosMenuVisible, setServiciosMenuVisible] = useState(false);

    const toggleServiciosMenu = () => {
        setServiciosMenuVisible(!serviciosMenuVisible);
    };

    const goToHome = () => {
        navigate('/');
    };

    const goToServicios = () => {
        navigate('/servicios');
    };

    const goToTienda = () => {
        navigate('/tienda');
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
    <div className="contenedor">
        <div class="menu1">
            <div class="seccion seccion-1">
                <Link to='/' >
                    <img src={Logo} alt="Ícono de inicio" />
                </Link>
            </div>
            <div class="seccion seccion-2">
                <input type="search" name="" id="" placeholder="Buscar un Servicio o Producto" className="buscador" />
            </div>
            <div class="seccion seccion-3">
                <div className="sub sub1">
                    <div>
                        <li onClick={goToCrearCuenta}>
                            <a className="links">Crear cuenta</a>
                        </li>
                    </div>
                    <div>
                        <li onClick={goToInicioSesion}>
                            <a className="links">Iniciar Sesion</a>
                        </li>
                    </div>
                </div>
                <div className="sub sub2">
                    <div className="seccion-cart">
                        <span class="material-symbols-outlined">add_shopping_cart</span>
                        <li onClick={goToCarrito}>
                            <p>Mi Carrito</p>
                        </li>
                    </div>
                    <div className="seccion-cart">
                        <span class="material-symbols-outlined">account_circle</span>
                        <li onClick={goToPerfil}>
                            <p>Mi Cuenta</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu2">
            <nav className="menu">
                <ul>
                    <li onClick={goToHome}>
                        <a className="links">Inicio</a>
                    </li>
                    <li onClick={goToServicios}>
                        <a className="links">Servicios</a>
                    </li>
                    <li onClick={goToTienda}>
                        <a className="links">Tienda</a>
                    </li>
                    <li onClick={goToCitas}>
                        <a className="links">Citas</a>
                    </li>
                    <li onClick={goToNosotros}>
                        <a className="links">Nosotros</a>
                    </li>
                    <li onClick={goToContacto}>
                        <a className="links">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet />
    </div>);
}

export default Menu