const initialState = {
    characters: [],
    details: [],
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
        default:
            return state;
    }
}