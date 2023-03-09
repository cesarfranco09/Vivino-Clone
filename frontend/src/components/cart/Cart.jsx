import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartWines = useSelector((state) => state.cartWines);
  const wines = useSelector((state) => state.wines);

  const cartItems = cartWines.map((cartWine) => ({
    wine: wines[cartWine.wineId],
    quantity: cartWine.quantity,
  }));
  // console.log(wines);

  const total = cartItems.reduce((acc, item) => acc + item.wine.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.wine.id} item={item} />
          ))}
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
