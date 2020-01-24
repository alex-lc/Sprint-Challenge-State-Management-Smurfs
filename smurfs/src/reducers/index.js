import { START_FETCH, FETCH_SUCCESS, START_CREATE, CREATE_SUCCESS, FETCH_FAIL, CREATE_FAIL } from '../actions';

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
        case FETCH_FAIL:
            console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case START_CREATE:
            console.log(`Hello from the create case.`);
            return {
                ...state,
                isLoading: true
            }
        case CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case CREATE_FAIL:
            console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}