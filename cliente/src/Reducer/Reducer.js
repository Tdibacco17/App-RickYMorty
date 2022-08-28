const initialState = {
    characters: [],
    details: [],
    species: [],
    characterEpisodes: [],
    characterEpisodesCharacterCap: [],
    characterOrigin: [],
    characterOriginResidents: [],
    characterLocation: [],
    characterLocationResidents: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_CHARACTERS":
            return {
                ...state,
                characters: action.payload,
            }
        case "GET_CHARACTER_BY_ID":
            return {
                ...state,
                details: action.payload
            }
        case "GET_SEARCHBAR":
            return {
                ...state,
                characters: action.payload
            }
        case "GET_FILTER":
            return {
                ...state,
                characters: action.payload,
            }
        case "GET_ALLSPECIES":
            return {
                ...state,
                species: action.payload
            }
        case "GET_CHARACTER_EPISODES":
            return {
                ...state,
                characterEpisodes: action.payload
            }
        case "GET_CHARACTER_EPISODES_CHARACTERCAP":
            return {
                ...state,
                characterEpisodesCharacterCap: action.payload
            }
        case "GET_CHARACTER_ORIGIN":
            return {
                ...state,
                characterOrigin: action.payload
            }
        case "GET_CHARACTER_ORIGIN_RESIDENTS":
            return {
                ...state,
                characterOriginResidents: action.payload
            }
        case "GET_CHARACTER_LOCATION":
            return {
                ...state,
                characterLocation: action.payload
            }
        case "GET_CHARACTER_LOCATION_RESIDENTS":
            return {
                ...state,
                characterLocationResidents: action.payload
            }
        default:
            return state;
    }
}