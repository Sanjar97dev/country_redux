// countryReducer.js
import { ADD_COUNTRY_STARTED, ADD_COUNTRY_SUCCESS, ADD_COUNTRY_REJECTED } from "./types/types";

const countryState = {
    countryData:[],
    status: '',
    error: '',
}

const countryReducer = (state=countryState, action) => {
    const {type, payload} = action
    switch(type){
        case ADD_COUNTRY_STARTED:
            return {
                ...state, 
                status: 'pending',
            }
        case ADD_COUNTRY_SUCCESS:
            
            return {
                ...state, 
                status: 'success', 
                countryData: payload,
            }
        case ADD_COUNTRY_REJECTED:
            return {
                ...state,
                status: 'error',
                error:payload,
            }
        default:
            return state
    }
}
export default countryReducer;
