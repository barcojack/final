import React from "react";
import Swal from "sweetalert2";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void; // Añadir la función addToCart como prop
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  // Usar directamente la ruta de la imagen desde el objeto product
  const imageSrc = product.image;

  const showDetails = () => {
    Swal.fire({
      title: product.name,
      text: `Descripción: ${product.description}\nCategoría: ${product.category}`,
      imageUrl: imageSrc,
      imageWidth: 300,
      imageAlt: `${product.name} Imagen`,
      confirmButtonText: "Genial!",
    });
  };

  return (
    <div className="product-item">
      <img src={imageSrc} alt={product.name} className="product-img" onClick={showDetails} />
      <h3 className="product-name" onClick={showDetails}>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button> {/* Botón de agregar al carrito */}
    </div>
  );
};

export default ProductCard;
