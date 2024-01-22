const depositeMoney = (amount) => { // this is an action creator function that takes in amount as a parameter and returns an action object
    return (dispatch) => { // this is a function that takes in dispatch as a parameter and returns the action object
        dispatch({ // dispatch the action object
        type: 'deposit', // this is the action type that is used in the reducer to check the action type
        payload: amount, // this is the payload that is used in the reducer to update the state
        });
    };
}

const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
        type: 'withdraw',
        payload: amount,
        });
    };
}

export { depositeMoney, withdrawMoney };