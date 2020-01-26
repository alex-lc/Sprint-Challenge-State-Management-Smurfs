import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSmurfs, deleteSmurf } from '../actions';

function SmurfList(props) {
    return (
        <ListContainer>
            {!props.smurfs && !props.isLoading && <h2>Click the button to fetch the list.</h2>}
            <button onClick={props.fetchSmurfs}>Meet Our Smurfs</button>
            {props.smurfs && !props.isLoading && props.smurfs.map((smurf) => {
                return (
                    <div className="card" key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                        <button onClick={() => props.deleteSmurf(smurf)}>Delete Smurf</button>
                    </div>
                )
            })}
            {props.error && !props.loading && <h2 className="error">There was an error fetching the list of smurfs.</h2>}
        </ListContainer>
    )
}

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 30rem;
        background: #FF0000;
        border: none;
        border-radius: 0.3rem;
        padding: 1rem;
        margin-bottom: 5rem;
        color: #fafafa;
        font-weight: 300;
        font-size: 1.6rem;
        box-shadow: 0 0.5px 2px 0 #444444;
        transition: all 300ms;

        &:hover {
            transition: background 300ms;
            background: #1a1a1a;
            cursor: pointer;
        }
    }

    h2 {
        font-size: 1.6rem;
        font-weight: 300;
        margin: 2rem 0;
    }

    h2.error {
        color: #FF0000;
    }

    .card {
        color: #fafafa;
        background: #1a1a1a;
        padding: 2rem;
        width: 100%;
        margin: 1rem 0;
        border-radius: 0.3rem;
        box-shadow: 0 1px 2px 0 #444444;

        p {
            font-weight: 300;
            font-size: 1.4rem;
            line-height: 2.4rem;

            &:first-child {
                font-weight: 500;
            }
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

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(SmurfList);