import {receiveWine} from "./winesReducer";

export const RECEIVE_WINES = "wines/RECEIVE_WINES";

const receiveWines = (wines) => {
    // debugger
    return {
        type: RECEIVE_WINES,
        // payload: posts
        // posts: posts
        wine: wines
    }
}

export const getWine = (wineId) => (state) => (
    state.wines ? state.wines[wineId] : null
)

export const getWines = (state) => (
    state.wines ? Object.values(state.wines) : []
)

export const fetchWine = (wineId) => async (dispatch) => {
    const response = await fetch(`/api/wines/${wineId}`);

    if (response.ok) {
        const wine = await response.json();
        dispatch(receiveWine(wine));
    }
}

export const fetchWines = () => async (dispatch) => {
    const response = await fetch("/api/wines");
    if (response.ok) {
        const wines = await response.json();
        dispatch(receiveWines(wines))
    }
}


export default function winesReducer(oldState = {}, action) {
    // const newState = {...oldState};
    switch (action.type) {
        case RECEIVE_WINES:
            return action.posts;
        default:
            return oldState;
    }
}