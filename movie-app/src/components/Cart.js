import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Cart.css';
const Cart = ({ cart, removeFromCart, cartTotal }) => {
    const handlePay = () => {
        alert('Procesando el pago...'); // Aquí puedes agregar la lógica para procesar el pago
    };
    return (_jsxs("div", { className: "cart-container", children: [_jsx("h2", { children: "Carrito" }), _jsx("ul", { children: cart.length > 0 ? (cart.map((product, index) => (_jsxs("li", { children: [product.name, " - $", product.price.toFixed(2), _jsx("button", { onClick: () => removeFromCart(index), children: "Eliminar" })] }, index)))) : (_jsx("p", { children: "No hay productos en el carrito" })) }), _jsxs("p", { children: ["Total: $", cartTotal.toFixed(2)] }), cart.length > 0 && _jsx("button", { className: "pay-button", onClick: handlePay, children: "Pagar" })] }));
};
export default Cart;
