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


export function getRelacionEpisodes(id) {
    return async function (dispatch) {
        let json = await axios.get(`/relacionesEpisodios/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_EPISODES',
            payload: json.data
        });
    };
}; 

export function getRelacionEpisodesCharacterCap(id) {
    return async function (dispatch) {
        let json = await axios.get(`/relacionesEpisodiosCharacterCap/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_EPISODES_CHARACTERCAP',
            payload: json.data
        });
    };
};

export function getRelacionOrigin(id) {
    return async function (dispatch) {
        let json = await axios.get(`/relacionesOrigin/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_ORIGIN',
            payload: json.data
        });
    };
};

export function getRelacionOriginResidents(id) {
    return async function (dispatch) {
        let json = await axios.get(`/relacionesOriginResidents/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_ORIGIN_RESIDENTS',
            payload: json.data
        });
    };
};

export function getRelacionLocation(id) {
    return async function (dispatch) {
        let json = await axios.get(`/relacionesLocation/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_LOCATION',
            payload: json.data
        });
    };
};

export function getRelacionLocationResidents(id) {
    return async function (dispatch) {
        let json = await axios.get(`/relacionesLocationResidents/${id}`);
        return dispatch({
            type: 'GET_CHARACTER_LOCATION_RESIDENTS',
            payload: json.data
        });
    };
};