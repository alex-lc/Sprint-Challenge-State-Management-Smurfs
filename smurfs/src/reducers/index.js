import { START_FETCH, FETCH_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    smurfs: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        default:
            return state;
    }
}