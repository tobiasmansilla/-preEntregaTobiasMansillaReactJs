import './NavBar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
    <nav className="navbar">
    <div className="navbar-logo">
        <img src="../logoMusic.png" className="navbar-logo-img" />
        <h1>Music Store</h1>
    </div>
    <ul className="navbar-links">
        <li><a href="#">Artistas</a></li>
        <li><a href="#">Nuestra Selección</a></li>
        <li><a href="#">Recomendados</a></li>
    </ul>
    <CartWidget />
    </nav>
);
};

export default Navbar;