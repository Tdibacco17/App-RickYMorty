import axios from "axios";

export function getAllCharacters() {
    return async function (dispatch) {
        const json = await axios.get("/Characters");
        return dispatch({
            type: "GET_ALL_CHARACTERS",
            payload: json.data
        })
    }
}

export function getCharacterById(id) { 
    return async function (dispatch) {
        let json = await axios.get(`/Details/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_BY_ID',
            payload: json.data
        });
    };
};