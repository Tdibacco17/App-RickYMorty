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

export function getSearchbar(nameCharacter) {
    return async function (dispatch) {
        try {
            let json = await axios.get(`/Characters?nameCharacter=${nameCharacter}`);
            return dispatch({
                type: 'GET_SEARCHBAR',
                payload: json.data
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    };
};

export function getFilter({ status, species, gender, nameCharacter }) {    
    return async function (dispatch) {
        let json = await axios.get(`/Status/${status}/${species}/${gender}?nameCharacter=${nameCharacter}`);
        return dispatch({
            type: 'GET_FILTER',
            payload: json.data
        });
    };
};

export function getAllSpecies() {
    return async function (dispatch) {
        let json = await axios.get("/AllSpecies");
        return dispatch({
            type: 'GET_ALLSPECIES',
            payload: json.data
        });
    };
};