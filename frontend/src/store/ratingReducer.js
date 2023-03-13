import csrfFetch from "./csrf";

export const RECEIVE_ALL_RATINGS = 'wines/RECEIVE_ALL_RATING';

export const RECEIVE_ALL_RATINGS_BY_USERID = 'wines/RECEIVE_ALL_RATING_BY_USERID';

export const RECEIVE_RATING = 'wines/RECEIVE_RATING';
export const REMOVE_RATING = 'wines/REMOVE_RATING';

export const receiveRating = (rating) => ({
  type: RECEIVE_RATING,
  rating: rating
});
export const receiveRatings = (ratings) => {
  return {
    type: RECEIVE_ALL_RATINGS,
    rating: ratings
  }
};

export const removeRating = (ratingId) => ({
  type: REMOVE_RATING,
  payload: { ratingId },
});
// Selectors

export const getRatingsById = (state) => {
  return state.rating ? Object.values(state.rating) : []
}

export const getRatingsByWineId = (state) => {
  return state.rating ? Object.values(state.rating) : []
}

export const fetchRatingAllWineId = (wineId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/rating?wine_id=${wineId}`);
    const ratings = await response.json();
    dispatch(receiveRatings(ratings));
  } catch (error) {
    console.log(error);
  }
};

export const fetchRatingAllUserId = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/rating`);
    const ratings = await response.json();
    dispatch(receiveRatings(ratings));
  } catch (error) {
    console.log(error);
  }
};


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
    dispatch(receiveRatings(wine));
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
    case RECEIVE_ALL_RATINGS:
      return action.rating;
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
