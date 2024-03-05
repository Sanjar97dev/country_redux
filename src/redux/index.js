// index.js
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import countryReducer from "./slices/countrySlice";
import searchReducer from "./slices/searchReducer";

const root = combineReducers({
    country: countryReducer,
    search: searchReducer
});

const store = createStore(root, applyMiddleware(thunk));
export default store;
