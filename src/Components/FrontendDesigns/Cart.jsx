import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Footer from "../Common/Footer";
import { Header } from "../Common/Header";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      price: 80,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1592928303161-9d6c2b1e3a1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Green Lettuce",
      price: 45,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (

    <>
    
    <Header/>
    
     <section className="cart-section">
      <div className="container cart-container">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty 🛒</p>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />

                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>₱{item.price.toFixed(2)}</p>

                      <div className="quantity">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>

                    <div className="item-right">
                      <p className="item-total">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <FaTrashAlt
                        className="delete-icon"
                        onClick={() => removeItem(item.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>Order Summary</h3>
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>₱{totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping</span>
                  <span>₱50.00</span>
                </div>
                <hr />
                <div className="summary-line total">
                  <span>Total</span>
                  <span>₱{(totalPrice + 50).toFixed(2)}</span>
                </div>

                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
    
    <Footer/>
    </>
   
  );
};
