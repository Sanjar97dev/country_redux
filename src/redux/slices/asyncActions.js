// asyncActions.js
import axios from "axios";
import { ADD_COUNTRY_REJECTED, ADD_COUNTRY_STARTED, ADD_COUNTRY_SUCCESS } from "./types/types";

const url = 'https://api.sampleapis.com/countries/countries';

export const getCountry = (searchCountry) => {
    return async (dispatch) => {
        dispatch(addCountryStarted());
        
        try {
            const response = await axios(url);
            const data = response.data;

            if (searchCountry) {
                const filteredData = data.filter((country) => country.name.toLowerCase().includes(searchCountry.toLowerCase()));
                dispatch(addCountrySuccess(filteredData));
            } else {
                dispatch(addCountrySuccess(data));
            }
        } catch (error) {
            dispatch(addCountryRejected(error));
        }
    };
};

const addCountryStarted = () => ({type: ADD_COUNTRY_STARTED});
const addCountrySuccess = (data) => ({type: ADD_COUNTRY_SUCCESS, payload: data});
const addCountryRejected = (error) => ({type: ADD_COUNTRY_REJECTED, payload: error});

export { ADD_COUNTRY_STARTED, ADD_COUNTRY_SUCCESS, ADD_COUNTRY_REJECTED };

