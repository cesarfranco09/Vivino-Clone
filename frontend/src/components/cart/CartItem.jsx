import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartWinesReducer';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeFromCart(item.wine.id));
  };

  return (
    <div className="cart-item">
      <div>
        <h3>{item.wine.name}</h3>
        <p>{item.wine.region}, {item.wine.country}</p>
        <p>Price: ${item.wine.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default CartItem;
