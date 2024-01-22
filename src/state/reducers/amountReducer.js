const reducer = (state = 0, action) => { // this is a reducer function that takes in state and action as parameters and returns the new state
    switch (action.type) { // this is a switch statement that checks the action type and returns the new state based on the action type
        case 'deposit': // if the action type is deposit, then return the current state plus the payload
        return state + action.payload; // the payload is the amount that is passed in from the action creator
        case 'withdraw': 
        return state - action.payload;
        default:
        return state; // if the action type is not deposit or withdraw, then return the current state
    }
}

export default reducer; // export the reducer function