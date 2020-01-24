import React from "react";
import "./App.css";

// components
import SmurfList from './SmurfList';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <Create />
    </div>
  );
}

export default App;
