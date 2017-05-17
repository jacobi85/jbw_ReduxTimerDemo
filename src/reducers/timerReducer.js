import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function timerReducer (state = initialState, action) {
    
    switch(action.type) {

        case types.INCREMENT_COUNTER:
            return {counter: state.counter + 1};
            
        case types.DECREMENT_COUNTER:
            return {counter: state.counter - 1};

        default:
            return state;
    }
}