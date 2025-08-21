// CartPage.js
import React, { useContext } from 'react';
import './CartPage.css';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  const handleOrder = () => {
    alert('Order placed successfully!');
    clearCart();
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(
      item.newPrice
        ? typeof item.newPrice === "string"
          ? item.newPrice.replace(/[^0-9.]/g, "")
          : item.newPrice
        : item.price
    ) || 0;

    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your items have been ordered.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image || item.imgSrc} alt={item.title || item.brand} />
              <div>
                <h4>{item.brand || item.title}</h4>
                <p>{item.tag || item.title}</p>
                <p>Price: ₹{item.newPrice || item.price}</p>

                <div className="qty-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
