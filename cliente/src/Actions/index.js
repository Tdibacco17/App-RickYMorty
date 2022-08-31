import axios from "axios";

export function getAllCharacters() {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:6031/Characters");
        return dispatch({
            type: "GET_ALL_CHARACTERS",
            payload: json.data
        })
    }
}

export function getCharacterById(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/Details/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_BY_ID',
            payload: json.data
        });
    };
};

export function getSearchbar(nameCharacter) {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:6031/Characters?nameCharacter=${nameCharacter}`);
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
        let json = await axios.get(`http://localhost:6031/Status/${status}/${species}/${gender}?nameCharacter=${nameCharacter}`);
        return dispatch({
            type: 'GET_FILTER',
            payload: json.data
        });
    };
};

export function getRelacionEpisodes(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/relacionesEpisodios/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_EPISODES',
            payload: json.data
        });
    };
}; 

export function getRelacionEpisodesCharacterCap(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/relacionesEpisodiosCharacterCap/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_EPISODES_CHARACTERCAP',
            payload: json.data
        });
    };
};

export function getRelacionOrigin(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/relacionesOrigin/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_ORIGIN',
            payload: json.data
        });
    };
};

export function getRelacionOriginResidents(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/relacionesOriginResidents/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_ORIGIN_RESIDENTS',
            payload: json.data
        });
    };
};

export function getRelacionLocation(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/relacionesLocation/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_LOCATION',
            payload: json.data
        });
    };
};

export function getRelacionLocationResidents(id) {
    return async function (dispatch) {
        let json = await axios.get(`http://localhost:6031/relacionesLocationResidents/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_LOCATION_RESIDENTS',
            payload: json.data
        });
    };
};

export function CleanDetails(payload) {
    return {
        type: 'CLEAN_DETAILS',
        payload
    };
};