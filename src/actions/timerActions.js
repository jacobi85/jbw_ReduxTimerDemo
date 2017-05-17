import * as types from './actionTypes';

export function incrementCounter (counter) {
    return {type: types.INCREMENT_COUNTER, counter};
}

export function decrementCounter (counter) {
    return {type: types.DECREMENT_COUNTER, counter};
}