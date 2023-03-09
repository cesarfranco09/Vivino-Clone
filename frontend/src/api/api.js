import axios from "axios";

export const selectWines = (param) => async dispatch => {
    axios.get("/api/wines").then(res => res.data);
};

