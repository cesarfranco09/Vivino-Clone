import csrfFetch from "./csrf";

export const RECEIVE_ALL_RATINGS = 'wines/RECEIVE_ALL_RATING';
export const RECEIVE_RATING = 'wines/RECEIVE_RATING';
export const REMOVE_RATING = 'wines/REMOVE_RATING';

export const receiveRating = (rating) => ({
  type: RECEIVE_RATING,
  rating
});

export const removeRating = (ratingId) => ({
  type: REMOVE_RATING,
  payload: { ratingId },
});

// Selectors


export const getRatingById = (state, wineId) => (
  state.wines ? state.wines[wineId] : null
)

export const createRating = (rating) => async (dispatch) => {
  const response = await csrfFetch("/api/rating", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(rating)
  })

  if (response.ok) {
    const newRating = await response.json();
    dispatch(receiveRating(newRating))
  }
}



export const fetchRatingByWineId = (wineId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines/${wineId}`);
    const wine = await response.json();
    dispatch(receiveRating(wine));
  } catch (error) {
    console.log(error);
  }
};

export const fetchRatingByUserId = (wineId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines/${wineId}`);
    const wine = await response.json();
    dispatch(receiveRating(wine));
  } catch (error) {
    console.log(error);
  }
};


// Reducer
const winesReducer = (state = {}, action) => {
  const newState = {...state};
  switch (action.type) {
    case RECEIVE_RATING:
      const rating = action.rating;
      newState[rating.id] = rating
      return newState;
    case REMOVE_RATING:
      const { [action.payload.ratingId]: _, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default winesReducer;
