import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({ // combine all reducers into one
    amount: amountReducer, // amount is the key, amountReducer is the value
    // we can add more reducers here
});

export default reducers; // export the combined reducers