import "./NavBar.css";
import logo from '../../assets/fotologo.jpg';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {

    return (
        <>
            <nav className="nav">
                <div>
                    <NavLink to={'/'}>
                        <img className="logo" src={logo} alt="imagen de logo" />
                    </NavLink>
                </div>
                <div>
                    <button className="boton"><NavLink to={'category/musica'} className="botonLink">Música</NavLink></button>
                    <button className="boton"><NavLink to={'category/albumes'} className="botonLink">Álbumes</NavLink></button>
                    <button className="boton"><NavLink to={'category/merchandising'} className="botonLink">Merchandising</NavLink></button>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}