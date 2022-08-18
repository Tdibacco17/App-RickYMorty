import axios from "axios";

export function getAllCharacters() {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/hola1");
        return dispatch({
            type: "GET_ALL_CHARACTERS",
            payload: json.data
        })
    }
}

export function getAllEpisodes() {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/hola2");
        return dispatch({
            type: "GET_ALL_EPISODES",
            payload: json.data
        })
    }
}

export function getAllLocations() {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/hola3");
        return dispatch({
            type: "GET_ALL_LOCATIONS",
            payload: json.data
        })
    }
}