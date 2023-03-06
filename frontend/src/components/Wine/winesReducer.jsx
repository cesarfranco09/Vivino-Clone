

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

export const removeWine = (wineId) => ({
  type: REMOVE_WINE,
  payload: { wineId },
});

// Selectors
export const getAllWines = (state) => (
  state.wines ? Object.values(state.wines) : []
)

export const getWineById = (state, wineId) => (
  state.wines ? state.wines[wineId] : null
)

export const getFilteredWines = (state, filterColumn, filterValue) => {
  const allWines = getAllWines(state);
  if (!filterColumn || !filterValue) {
    return allWines;
  }
  const filteredWines = allWines.filter((wine) => {
    const wineValue = wine[filterColumn].toLowerCase();
    const filterValueLower = filterValue.toLowerCase();
    return wineValue.includes(filterValueLower);
  });
  return filteredWines;
};


// Thunk functions
export const fetchWines = () => async (dispatch) => {
  try {
    const response = await fetch('/api/wines');
    const wines = await response.json();
    dispatch(receiveAllWines(wines));
  } catch (error) {
    console.log(error);
  }
};

export const fetchWine = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines/${id}`);
    const wine = await response.json();
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const createWine = (formData) => async (dispatch) => {
  try {
    const response = await fetch('/api/wines', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const wine = await response.json();
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const updateWine = (formData, id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/wines/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const wine = await response.json();
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const deleteWine = (id) => async (dispatch) => {
  try {
    await fetch(`/api/wines/${id}`, {
      method: 'DELETE'
    });
    dispatch(removeWine(id));
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
