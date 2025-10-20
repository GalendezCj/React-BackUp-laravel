// src/components/ProductCard.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ image, name, price, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <button className="add-cart-btn" onClick={onAddToCart}>
        <FaShoppingCart className="icon" /> Add to Cart
      </button>
    </div>
  );
}
