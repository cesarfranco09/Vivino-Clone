

export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'cart/UPDATE_QUANTITY';
export const EMPTY_CART = 'cart/EMPTY_CART';

// Action creators
export const addToCart = (wine, quantity) => ({
  type: ADD_TO_CART,
  payload: { wine, quantity },
});

export const removeFromCart = (wineId) => ({
  type: REMOVE_FROM_CART,
  payload: { wineId },
});

export const updateQuantity = (wineId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { wineId, quantity },
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

// Selectors
export const getCartItems = (state) => {
  const { cartWines } = state;
  return Object.values(cartWines);
};

export const getCartTotal = (state) => {
  const { cartWines } = state;
  return Object.values(cartWines).reduce(
    (acc, cartItem) => acc + cartItem.wine.price * cartItem.quantity,
    0
  );
};

// Reducer
const cartWinesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.wine.id]: {
          wine: action.payload.wine,
          quantity: action.payload.quantity,
        },
      };
    case REMOVE_FROM_CART:
      const { [action.payload.wineId]: _, ...rest } = state;
      return rest;
    case UPDATE_QUANTITY:
      return {
        ...state,
        [action.payload.wineId]: {
          ...state[action.payload.wineId],
          quantity: action.payload.quantity,
        },
      };
    case EMPTY_CART:
      return {};
    default:
      return state;
  }
};

export default cartWinesReducer;

