import React from 'react';
import { useDispatch } from 'react-redux';
import removeCartWine from './cartWinesReducer'

const CartWine = ({ wine }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeCartWine(wine.id));
  };

  return (
    <div className="cart-wine">
      <div>
        <h3>{wine.name}</h3>
        <p>{wine.region}, {wine.country}</p>
        <p>Price: ${wine.price.toFixed(2)}</p>
        <p>Quantity: {wine.quantity}</p>
      </div>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default CartWine;
