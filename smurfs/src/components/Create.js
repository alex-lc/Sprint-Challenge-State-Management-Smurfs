import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createSmurf } from '../actions';

function Create(props) {

    const [smurf, setSmurf] = useState({
        name: '',
        age: null,
        height: null
    })

    const handleChanges = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
        // console.log(smurf);
    }

    const handleNumChanges = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: Number(e.target.value)
        });
        // console.log(smurf);
    }

    return (
        <>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleChanges} />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="text" name="age" onChange={handleNumChanges} />
            </div>
            <div>
                <label htmlFor="height">Height:</label>
                <input type="text" name="height" onChange={handleNumChanges} />
            </div>
            <button onClick={() => props.createSmurf(smurf)}>Create Smurf</button>
            {props.error && !props.isLoading && <h2>There was an error creating that particular smurf.</h2>}
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

export default connect(mapStateToProps, { createSmurf })(Create);