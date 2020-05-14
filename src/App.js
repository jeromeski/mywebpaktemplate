import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';

function App(){
  return (
    <>
      <Navbar/>
      <div>
        <Home/>
        <Works/>
      </div>
    </>
  );
};

export default App;