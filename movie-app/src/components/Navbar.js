import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../public/img/Diseño sin título.png';
const Navbar = ({ cartCount, cartTotal }) => {
    return (_jsxs("nav", { className: "navbar", children: [_jsx("div", { className: "navbar-brand", children: _jsxs(Link, { to: "/", children: [_jsx("img", { src: logo, alt: "GYM-BRO-PRO", className: "navbar-logo" }), "GYM-BRO-PRO"] }) }), _jsxs("ul", { className: "navbar-links", children: [_jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/nosotros", children: "Nosotros" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/registrarse", children: "Registrarse" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/contacto", children: "Contacto" }) })] }), _jsx("div", { className: "navbar-cart", children: _jsxs(Link, { to: "/carrito", children: ["Carrito (", cartCount, " art\u00EDculos - $", cartTotal.toFixed(2), ")"] }) })] }));
};
export default Navbar;
