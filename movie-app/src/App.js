import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Nosotros from './components/Nosotros';
import Registrarse from './components/Registrarse';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import VerUsuarios from './components/Verusuarios'; // Importar el nuevo componente
const App = () => {
    const [products] = useState([
        {
            id: 1,
            name: "Barra Infiniti",
            description: "La barra Infiniti tiene una forma ondulada, similar a una “Z”, lo que permite un agarre más cómodo y natural en comparación con las barras rectas tradicionales.",
            image: "/public/img/img1-.png",
            price: 550000,
            category: "Barras"
        },
        {
            id: 2,
            name: "Barra Recta",
            description: "La barra recta es un tipo de barra de entrenamiento comúnmente utilizada en gimnasios y casas para realizar ejercicios de fuerza y resistencia.",
            image: "/public/img/img2-.webp",
            price: 700000,
            category: "Barras"
        },
        {
            id: 3,
            name: "Barra Romana",
            description: "La barra romana es una herramienta de entrenamiento que se utiliza para trabajar múltiples grupos musculares del cuerpo, incluyendo los bíceps, tríceps, hombros y espalda.",
            image: "/public/img/img3-.png",
            price: 830000,
            category: "Barras"
        },
        {
            id: 4,
            name: "Barra de dominadas",
            description: "Equipo de entrenamiento para la parte superior del cuerpo, específicamente diseñado para ejercicios de dominadas, fondos y paralelas.",
            image: "/public/img/img4-.webp",
            price: 990000,
            category: "Barras"
        },
        {
            id: 5,
            name: "Chaleco Lastre",
            description: "Su función principal es aumentar la intensidad de los entrenamientos, permitiendo a los deportistas y entrenadores incrementar la carga y mejorar los resultados.",
            image: "/public/img/img5-.jpeg",
            price: 210000,
            category: "Accesorios"
        },
        {
            id: 6,
            name: "Pesa rusa",
            description: "Su función principal es aumentar la fuerza y rendimiento.",
            image: "/public/img/img6.webp",
            price: 375000,
            category: "Accesorios"
        },
        {
            id: 7,
            name: "Tobilleras con peso",
            description: "Su función principal es aumentar la velocidad.",
            image: "/public/img/img7.jpg",
            price: 180000,
            category: "Accesorios"
        },
        {
            id: 8,
            name: "Saco Sport",
            description: "Su función principal es aumentar la intensidad de los entrenamientos.",
            image: "/public/img/img8.jpeg",
            price: 990000,
            category: "Accesorios"
        },
        {
            id: 9,
            name: "Proctetor de barras",
            description: "Su función principal es proteger la barra.",
            image: "/public/img/img9.png",
            price: 150000,
            category: "Accesorios"
        },
        {
            id: 10,
            name: "Chaleco",
            description: "Su función es aumentar el peso elevando su carga.",
            image: "/public/img/img10.jpeg",
            price: 350000,
            category: "Accesorios"
        },
        {
            id: 11,
            name: "Mancuernas",
            description: "Las mancuernas tienen varios beneficios y usos en el entrenamiento físico.",
            image: "/public/img/img11.webp",
            price: 200000,
            category: "Accesorios"
        },
        {
            id: 12,
            name: "Rack",
            description: "Es una estructura de acero que se utiliza para realizar ejercicios de fuerza y potencia en un gimnasio o en casa.",
            image: "/public/img/img12.webp",
            price: 310000,
            category: "Accesorios"
        },
        {
            id: 13,
            name: "Mancuernas nivel 3",
            description: "Los ejercicios con mancuernas consisten en realizar movimientos, principalmente con los brazos (aunque también las podemos usar para entrenar las piernas con determinados ejercicios).",
            image: "/public/img/img13.jpeg",
            price: 450000,
            category: "Accesorios"
        }
    ]);
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };
    const cartTotal = cart.reduce((total, product) => total + product.price, 0);
    return (_jsx(Router, { children: _jsxs("div", { className: "app-container", children: [_jsx(Navbar, { cartCount: cart.length, cartTotal: cartTotal }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx("h1", { className: "app-title", children: "Productos de Gimnasia" }), _jsx(ProductList, { products: products, addToCart: addToCart }), _jsxs("div", { id: "carrito", className: "cart", children: [_jsx("h2", { children: "Carrito" }), _jsx("ul", { children: cart.map((product, index) => (_jsxs("li", { children: [product.name, " - $", product.price.toFixed(2), _jsx("button", { onClick: () => removeFromCart(index), children: "Eliminar" })] }, index))) }), _jsxs("p", { children: ["Total: $", cartTotal.toFixed(2)] })] })] }) }), _jsx(Route, { path: "/nosotros", element: _jsx(Nosotros, {}) }), _jsx(Route, { path: "/registrarse", element: _jsx(Registrarse, {}) }), _jsx(Route, { path: "/contacto", element: _jsx(Contacto, {}) }), _jsx(Route, { path: "/carrito", element: _jsx(Cart, { cart: cart, removeFromCart: removeFromCart, cartTotal: cartTotal }) }), _jsx(Route, { path: "/usuarios", element: _jsx(VerUsuarios, {}) }), " "] })] }) }));
};
export default App;
