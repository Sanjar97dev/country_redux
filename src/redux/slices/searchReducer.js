// searchReducer.js
const initialState = {
    searchCountry: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchCountry: action.payload,
            };
        default:
            return state;
    }
};

export const setSearchQuery = (country) => ({
    type: 'SET_SEARCH_QUERY',
    payload: country,
});

export default searchReducer;
