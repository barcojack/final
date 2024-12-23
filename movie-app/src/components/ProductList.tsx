import React from 'react';
import { Product } from '../types/Product';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void; // Asegúrate de incluir addToCart en las props
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="catalog">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button> {/* Botón de agregar al carrito */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
