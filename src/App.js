import './App.css';
import React from 'react';
import Shapes from './components/shapes/shapes';
import Header from './components/header/header';
import Additional from './components/additional/additional';
import About from './components/about/about';
function App() {
  return (
    <div className="App">
      <Shapes />
      <div className="wrapper">
        <Header />
      </div>
      <Additional/>
      <About/>
    </div>
  );
}

export default App;
