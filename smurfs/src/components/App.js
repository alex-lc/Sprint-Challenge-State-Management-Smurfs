import React from "react";
import styled from 'styled-components';

// components
import SmurfList from './SmurfList';
import Create from './Create';
import Header from './Header';

function App() {
  return (
    <Container>
      <Header />
      <div className="content">
        <SmurfList />
        <Create />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    background: #ecf0f1;
    margin-top: 10%;
    width: 80%;
    border-radius: 0.5rem;
    box-shadow: 0 0.5px 2px 0 #444444;
    padding: 5rem;
  }
`;

export default App;
