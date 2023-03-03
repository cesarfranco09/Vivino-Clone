
// Action types
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
export const getAllWines = (state) => Object.values(state.wines);

export const getWineById = (state, id) => state.wines[id];

export const getFilteredWines = (state, filter) => {
  const allWines = getAllWines(state);
  if (!filter) {
    return allWines;
  }
  const filteredWines = allWines.filter((wine) => wine.region === filter);
  return filteredWines;
};

// Thunk functions
export const fetchWines = () => async (dispatch) => {
  try {
    const wines = await WineApiUtil.fetchWines();
    dispatch(receiveAllWines(wines));
  } catch (error) {
    console.log(error);
  }
};

export const fetchWine = (id) => async (dispatch) => {
  try {
    const wine = await WineApiUtil.fetchWine(id);
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const createWine = (formData) => async (dispatch) => {
  try {
    const wine = await WineApiUtil.createWine(formData);
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const updateWine = (formData, id) => async (dispatch) => {
  try {
    const wine = await WineApiUtil.updateWine(formData, id);
    dispatch(receiveWine(wine));
  } catch (error) {
    console.log(error);
  }
};

export const deleteWine = (id) => async (dispatch) => {
  try {
    await WineApiUtil.removeWine(id);
    dispatch(removeWine(id));
  } catch (error) {
    console.log(error);
  }
};

// Reducer
const winesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_WINES:
      return {
        ...state,
        ...action.payload.wines.reduce(
          (acc, wine) => ({ ...acc, [wine.id]: wine }),
          {}
        ),
      };
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
