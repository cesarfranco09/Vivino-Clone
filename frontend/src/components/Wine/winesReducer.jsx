

export const RECEIVE_ALL_WINES = 'wines/RECEIVE_ALL_WINES';
export const RECEIVE_WINE = 'wines/RECEIVE_WINE';
export const REMOVE_WINE = 'wines/REMOVE_WINE';

// Action creators
export const receiveAllWines = (wines) => ({
  type: RECEIVE_ALL_WINES,
  payload: { wines },
});

export const receiveWine = (wine) => ({
  type: RECEIVE_WINE,
  payload: { wine },
});


// Selectors
export const getAllWines = (state) => (
  state.wines ? Object.values(state.wines) : []
)

export const getWineById = (state, wineId) => (
  state.wines ? state.wines[wineId] : null
)

// Thunk functions
export const fetchWines = (filter) => async (dispatch) => {
  try {
    const response = await fetch('/api/wines/wine_by_filter', {
      method: "POST",
      body: JSON.stringify({filter}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await response.json();
    const wines = res["wines"]
    dispatch(receiveAllWines(wines));
  } catch (error) {
    console.log(error);
  }
};

export const fetchWine = (wineId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines/${wineId}`);
    const wine = await response.json();
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const fetchWineAll = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines`);
    const wine = await response.json();
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};


// Reducer
const winesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_WINES:
      return action.wines;
    case RECEIVE_WINE:
      return {
        ...state,
        [action.payload.wine.id]: action.payload.wine,
      };
    case REMOVE_WINE:
      const { [action.payload.wineId]: _, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default winesReducer;
