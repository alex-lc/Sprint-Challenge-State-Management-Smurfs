import React from 'react';
import styled from 'styled-components';

import SmurfVector from '../assets/smurf.svg';

function Header(props) {

    return (
        <HeaderContainer>
            <img src={SmurfVector} alt="Smurf Logo" />
            <h1>SMURFS! 2.0 W/ Redux</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 7rem;
    background: #1a1a1a;
    border-bottom: 1px solid #000;
    box-shadow: 0 0.5px 2px 0 #000;
    display: flex;
    align-items: center;

    h1 {
        margin-left: 1rem;
        color: #fafafa;
        font-size: 2rem;
        font-weight: 300;
    }

    img {
        height: 4rem;
        margin-left: 10%;
    }
`;

export default Header;