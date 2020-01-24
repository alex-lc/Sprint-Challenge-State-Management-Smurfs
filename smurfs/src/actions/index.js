import axios from 'axios';
export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

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