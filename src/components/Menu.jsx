import { Link, Outlet, useNavigate } from "react-router-dom";
import './styles/Menu.css'
import Logo from '../assets/images/logo.png'

const Menu = () => {

    const navigate = useNavigate();

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

    return(
    <div className="contenedor">
        <div>

        </div>
        <div>
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