import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProductList.css';
const ProductList = ({ products, addToCart }) => {
    return (_jsx("div", { className: "catalog", children: products.map(product => (_jsxs("div", { className: "product", children: [_jsx("img", { src: product.image, alt: product.name, className: "product-image" }), _jsx("h3", { className: "product-name", children: product.name }), _jsx("p", { className: "product-description", children: product.description }), _jsxs("p", { className: "product-price", children: ["$", product.price.toFixed(2)] }), _jsx("button", { onClick: () => addToCart(product), children: "Agregar al Carrito" }), " "] }, product.id))) }));
};
export default ProductList;
