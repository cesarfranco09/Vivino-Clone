import csrfFetch from "./csrf";

export const RECEIVE_ALL_RATINGS = 'ratings/RECEIVE_ALL_RATING';
export const RECEIVE_ALL_RATINGS_BY_USERID = 'ratings/RECEIVE_ALL_RATING_BY_USERID';
export const RECEIVE_RATING = 'ratings/RECEIVE_RATING';
export const REMOVE_RATING = 'ratings/REMOVE_RATING';

export const receiveRating = (rating) => ({
  type: RECEIVE_RATING,
  rating: rating
});

export const receiveRatings = (ratings) => ({
    type: RECEIVE_ALL_RATINGS,
    ratings: ratings
});

export const removeRating = (ratingId) => ({
  type: REMOVE_RATING,
  payload: { ratingId }
});

// Selectors

export const getRatings = (state) => {
  return state.ratings ? Object.values(state.ratings) : []
};

export const getRatingById = (ratingId) => (state) =>  (
  state.ratings ? state.ratings[ratingId] : null
)

// Thunk
export const fetchRating = (ratingId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines/${ratingId}`);
    const rating = await response.json();
    dispatch(receiveRating(rating));
  } catch (error) {
    console.log(error);
  }
}

export const fetchAllRatings = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/ratings`);
    const ratings = await response.json();
    // console.log("fetch_all_rating", ratings);
    dispatch(receiveRatings(ratings));
  } catch (error) {
    console.log(error);
  }
}

export const fetchRatingAllWineId = (wineId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/ratings?wine_id=${wineId}`);
    const ratings = await response.json();
    // console.log("fetch_rating", ratings);
    dispatch(receiveRatings(ratings));
  } catch (error) {
    console.log(error);
  }
};

export const fetchRatingAllUserId = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/ratings?user_id=user`);
    const ratings = await response.json();
    dispatch(receiveRatings(ratings));
  } catch (error) {
    console.log(error);
  }
};

export const createRating = (rating) => async (dispatch) => {
  try {
    const response = await csrfFetch("/api/ratings", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(rating)
    })
  
    if (response.ok) {
      const newRating = await response.json();
      dispatch(receiveRating(newRating));
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateRating = (rating) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/ratings/${rating.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(rating)
    })
  
    if (response.ok) {
      const newRating = await response.json();
      dispatch(receiveRating(newRating))
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteRating = (ratingId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/ratings/${ratingId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      dispatch(removeRating(ratingId));
    }
  } catch (error) {
    console.log(error);
  }
};

// Reducer
const ratingsReducer = (state = {}, action) => {
  const newState = {...state};
  switch (action.type) {
    case RECEIVE_ALL_RATINGS:
      return action.ratings;
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

export default ratingsReducer;
