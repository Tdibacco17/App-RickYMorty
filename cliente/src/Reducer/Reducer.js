const initialState = {
    characters: [],
    details: [],
    species: [],
    allCharacters: [],
    filterStatus: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_CHARACTERS":
            return {
                ...state,
                characters: action.payload,
                allCharacters: action.payload,
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
                filterStatus: action.payload,
            }
        case "GET_ALLSPECIES":
            return {
                ...state,
                species: action.payload
            }
        default:
            return state;
    }
}