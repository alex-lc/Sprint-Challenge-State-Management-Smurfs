import axios from 'axios';
export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const START_CREATE = 'START_CREATE';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: START_FETCH });
        axios.get(`http://localhost:3333/smurfs`)
            .then((res) => {
                // console.log(res);
                dispatch({ type: FETCH_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const createSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: START_CREATE });
        // console.log(smurf);
        axios.post(`http://localhost:3333/smurfs`, smurf)
            .then((res) => {
                // console.log(res);
                dispatch({ type: CREATE_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }
}