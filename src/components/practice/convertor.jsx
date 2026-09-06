import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index";

const Convertor = () => {

    const amount = useSelector(state => state.amount); // useSelector is a hook that takes a function as an argument and returns the state of the store
    const dispatch = useDispatch(); // useDispatch is a hook that returns the dispatch function of the store
    const actions = bindActionCreators(actionCreators, dispatch); // bindActionCreators is a function that takes two arguments, the first is an object of action creators and the second is the dispatch function of the store. It returns an object of action creators with the dispatch function bound to it. This is done so that we don't have to write dispatch(actionCreator()) everytime we want to dispatch an action.

    return (
        <div>
            <button className="btn btn-primary mx-2" onClick={() => actions.depositMoney(1000)}>
            + 
            </button>
            
            <h1 className="mx-2">{amount}</h1>
            
            <button className="btn btn-primary mx-2" onClick={() => actions.withdrawMoney(1000)}>
                - 
            </button>
        </div>
    )
}

export default Convertor;