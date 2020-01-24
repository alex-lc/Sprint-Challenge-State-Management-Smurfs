import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

function SmurfList(props) {
    return (
        <>
            <button onClick={props.fetchSmurfs}>fetch smurfs</button>
            {!props.smurfs && !props.isLoading && <h2>Click the button to fetch the list.</h2>}
            {props.smurfs && !props.isLoading && props.smurfs.map((smurf) => {
                return (
                    <div key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);