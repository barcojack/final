import React from 'react';
import { Product } from '../types/Product';
import './Cart.css';

interface CartProps {
  cart: Product[];
  removeFromCart: (index: number) => void;
  cartTotal: number;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, cartTotal }) => {
  const handlePay = () => {
    alert('Procesando el pago...'); // Aquí puedes agregar la lógica para procesar el pago
  };

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price.toFixed(2)}
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </ul>
      <p>Total: ${cartTotal.toFixed(2)}</p>
      {cart.length > 0 && <button className="pay-button" onClick={handlePay}>Pagar</button>}
    </div>
  );
};

export default Cart;
