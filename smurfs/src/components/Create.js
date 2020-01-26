import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
        <Form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" autoComplete="off" onChange={handleChanges} />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="text" name="age" autoComplete="off" onChange={handleNumChanges} />
            </div>
            <div>
                <label htmlFor="height">Height:</label>
                <input type="text" name="height" autoComplete="off" onChange={handleNumChanges} />
            </div>
            <button onClick={() => props.createSmurf(smurf)}>Create Smurf</button>
            {props.error && !props.isLoading && <h2>There was an error creating that particular smurf.</h2>}
        </Form>
    )
}

const Form = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        width: 20%;
    }

    label {
        display: flex;
        font-size: 1.4rem;
        font-weight: 300;
        color: #1a1a1a;
    }

    input {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        border-radius: 0.3rem;
        border: 1px solid #999999;
        padding-left: 1rem;
    }

    button {
        width: 20%;
        color: #fafafa;
        padding: 1rem;
        border: none;
        background: #FF0000;
        border-radius: 0.3rem;
        height: 5rem;
        margin-left: 1rem;
        transition: all 300ms;

        &:hover {
            transition: background 300ms;
            background: #1a1a1a;
            cursor: pointer;
        }
    }
`;

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { createSmurf })(Create);