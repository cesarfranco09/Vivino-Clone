import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartWinesReducer';

const TestComponent = () => {
  const dispatch = useDispatch();
  const cartWines = useSelector(state => state.cartWines);

  const handleAddToCart = () => {
    dispatch(addToCart({ wineId: 1, quantity: 1 }));
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div>
        {cartWines.map(cartWine => (
          <div key={cartWine.wineId}>
            <span>Wine ID: {cartWine.wineId}</span>
            <span>Quantity: {cartWine.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestComponent;
