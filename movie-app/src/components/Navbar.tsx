import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../public/img/Diseño sin título.png';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, cartTotal }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="GYM-BRO-PRO" className="navbar-logo" />
          GYM-BRO-PRO
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/nosotros">Nosotros</Link></li>
        <li className="navbar-item"><Link to="/registrarse">Registrarse</Link></li>
        <li className="navbar-item"><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div className="navbar-cart">
        <Link to="/carrito">Carrito ({cartCount} artículos - ${cartTotal.toFixed(2)})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
