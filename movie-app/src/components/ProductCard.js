import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Swal from "sweetalert2";
const ProductCard = ({ product, addToCart }) => {
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
    return (_jsxs("div", { className: "product-item", children: [_jsx("img", { src: imageSrc, alt: product.name, className: "product-img", onClick: showDetails }), _jsx("h3", { className: "product-name", onClick: showDetails, children: product.name }), _jsx("p", { className: "product-description", children: product.description }), _jsxs("p", { className: "product-price", children: ["$", product.price.toFixed(2)] }), _jsx("button", { onClick: () => addToCart(product), children: "Agregar al Carrito" }), " "] }));
};
export default ProductCard;
