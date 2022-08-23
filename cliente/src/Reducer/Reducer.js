const initialState = {
    characters: [],
    details: [],
    species: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_CHARACTERS":
            return {
                ...state,
                characters: action.payload
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
        case "GET_STATUS":
            return {
                ...state,
                characters: action.payload
            }
        case "GET_ALLSPECIES":
            return {
                ...state,
                species: action.payload
            }
        case "GET_SPECIES":
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}