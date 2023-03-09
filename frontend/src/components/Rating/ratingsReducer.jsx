// Action types
export const ADD_RATING = 'ratings/ADD_RATING';
export const UPDATE_RATING = 'ratings/UPDATE_RATING';
export const DELETE_RATING = 'ratings/DELETE_RATING';
export const RECEIVE_RATINGS = 'ratings/RECEIVE_RATINGS';

// Action creators
export const addRating = (rating) => ({
  type: ADD_RATING,
  payload: { rating },
});

export const updateRating = (rating) => ({
  type: UPDATE_RATING,
  payload: { rating },
});

export const deleteRating = (wineId, userId) => ({
  type: DELETE_RATING,
  payload: { wineId, userId },
});

export const receiveRatings = (ratings) => ({
  type: RECEIVE_RATINGS,
  payload: { ratings },
});

// Selectors
export const getRatings = (state) => Object.values(state.ratings);

export const getRatingsByWineId = (state, wineId) => {
  const allRatings = getRatings(state);
  const filteredRatings = allRatings.filter((rating) => rating.wineId === wineId);
  return filteredRatings;
};

export const getRatingByUserAndWineId = (state, userId, wineId) => {
  return state.ratings[`${wineId}-${userId}`];
};

// Thunk functions
export const createRating = (formData) => async (dispatch) => {
  try {
    const response = await fetch('/ratings', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const rating = await response.json();
    dispatch(addRating(rating));
  } catch (error) {
    console.log(error);
  }
};

export const updateRatingThunk = (formData, wineId, userId) => async (dispatch) => {
  try {
    const response = await fetch(`/ratings/${wineId}-${userId}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const rating = await response.json();
    dispatch(updateRating(rating));
  } catch (error) {
    console.log(error);
  }
};

export const deleteRatingThunk = (wineId, userId) => async (dispatch) => {
  try {
    const response = await fetch(`/ratings/${wineId}-${userId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      dispatch(deleteRating(wineId, userId));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRatingsByWineIdThunk = (wineId) => async (dispatch) => {
  try {
    const response = await fetch(`/ratings?wineId=${wineId}`);
    const ratings = await response.json();
    dispatch(receiveRatings(ratings));
  } catch (error) {
    console.log(error);
  }
};

// Reducer
const ratingsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {
        ...state,
        [`${action.payload.rating.wineId}-${action.payload.rating.userId}`]: action.payload.rating,
      };
    case UPDATE_RATING:
      return {
        ...state,
        [`${action.payload.rating.wineId}-${action.payload.rating.userId}`]: action.payload.rating,
      };
    case DELETE_RATING:
      const { [`${action.payload.wineId}-${action.payload.userId}`]: _, ...rest } = state;
      return rest;
    case RECEIVE_RATINGS:
      const ratings = action.payload.ratings.reduce(
        (acc, rating) => ({ ...acc, [`${rating.wineId}-${rating.userId}`]: rating }),
        {}
      );
      return {
        ...state,
        ...ratings,
      };
    default:
      return state;
  }
};

export default ratingsReducer;
