const initialState = {
    characters: [],
    episodes: [],
    locations: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_CHARACTERS":
            return {
                ...state,
                characters: action.payload
            }
        case "GET_ALL_EPISODES":
            return {
                ...state,
                episodes: action.payload
            }
        case "GET_ALL_LOCATIONS":
            return {
                ...state,
                locations: action.payload
            }
        default:
            return state;
    }
}