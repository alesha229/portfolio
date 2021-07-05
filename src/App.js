import './App.css';
import Header from './components/header/header';
import React from 'react';
import Shapes from './components/shapes/shapes';
function App() {
  return (
    <div className="App">
      <Shapes />
      <div className="wrapper">
        <Header />
      </div>
    </div>
  );
}

export default App;
