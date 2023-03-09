// import csrfFetch from "../../store/csrf";

// const GET_CART_WINES = 'cart/GET_CART_WINES' // fetching all cart wines when you first log in
// const ADD_CART_WINE = 'cart/ADD_CART_WINE'; // add a new wine to cart for first time
// const REMOVE_CART_WINE = 'cart/REMOVE_CART_WINE'; // removes the wine from your cart state
// const UPDATE_COUNT = 'cart/UPDATE_COUNT'; // increasing or decreasing the cart wine quantity
// const RESET = 'cart/RESET'; // emptying the cart completely when the user clicks checkout

// /* ----- ACTIONS ------ */

// // Difference between wines and cartWines:

// // wine = {id: 2, name: "banana", price: 1, img: 'url'}
// // cartWine = {id: 4, wineId: 2, userId: 1, quantity: 500}

// export const getWines = (cartWines) => {
//   return {
//     type: GET_CART_WINES,
//     cartWines
//   }
// }

// export const addWine = (cartWine) => {
//   return {
//     type: ADD_CART_WINE,
//     cartWine
//   };
// };

// export const updateCount = (cartWineId, count) => {
//   if (count < 1) return removeWine(cartWineId);
//   return {
//     type: UPDATE_COUNT,
//     cartWineId,
//     count
//   };
// };

// export const removeWine = (cartWineId) => {
//   return {
//     type: REMOVE_CART_WINE,
//     cartWineId
//   };
// };

// export const reset = () => {
//   return {
//     type: RESET
//   };
// };

// /* ----- THUNK ACTIONS ------ */

// //fetchCartWines (runs when a user first logs in to fetch cart wines from the previous session)

// export const fetchCartWines = (userId) = async (dispatch) => {
//   const response = await csrfFetch(`/api/cart_wines?user_id=${userId}`);

//   if (response.ok) {
//     const cartWines = await response.json();
//     dispatch(getWines(cartWines))
//   }
// }

// //createCartWine

// export const createCartWine = (cartWine) = async (dispatch) => {
//   const response = await csrfFetch('/api/cart_wines', {
//     method: "POST",
//     headers: { "Content-Type": "application/json"},
//     body: JSON.stringify(cartWine)
//   })

//   if (response.ok) {
//     const createdCartWine = await response.json();
//     dispatch(addWine(createCartWine))
//   }
// }

// //updateCartWine

// export const updateCartWine = (cartWine) = async (dispatch) => {
//   const response = await csrfFetch(`/api/cart_wines/${cartWine.id}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(cartWine)
//   })

//   if (response.ok) {
//     const updatedCartWine = await response.json();
//     const { id, quantity } = updateCartWine;
//     dispatch(updateCount(id, quantity));
//   }
// }

// //removeCartWine

// export const removeCartWine = (cartWineId) = async (dispatch) => {
//   const response = await csrfFetch(`/api/cart_wines/${cartWineId}`, {
//     method: "DELETE"
//   })

//   if (response.ok) {
//     dispatch(removeWine(cartWineId))
//   }
// }

// //resetCartWines is not needed; you can invoke removeCartWine on all wines

// /* ------ REDUCER ------ */

// // const initialState = {
// //   wines: {need to grab all wines},
// // };

// //This reducer is based on the grocery app solution.
// //Review it for guidance and then refactor based on your app's state shape.

// export default function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_CART_WINES:
//       return action.cartWines;
//     case ADD_CART_WINE:
//       // add the wine to existing slice of state for cart wines
//       // count should be set to 1
//       return {
//         ...state, wines: {
//           ...state.wines,
//           [action.wineId]: {
//             id: action.wineId,
//             count: 1,
//           },
//         },
//       };
//     case UPDATE_COUNT:
//       // find the existing wine in the state
//       // replace it with the new version of the wine using the updated count
//       return {
//         ...state,
//         wines: {
//           ...state.wines,
//           [action.wineId]: {
//             ...state[action.wineId],
//             count: action.count,
//           },
//         },
//       };
//     case REMOVE_CART_WINE:
//       // delete that wine from the state, return remaining cartWines
//       const newState = { ...state, wines: { ...state.wines } };
//       delete newState.wines[action.wineId];
//       return newState;
//     case RESET:
//       // return empty object
//       return initialState;
//     default:
//       return state;
//   }
// }