import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Portfolio from './pages/Works';
import Preloader from './components/Preloader';
// import Works from './pages/Works';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/works'} component={Portfolio}/>
        </div>
        <Preloader/>
      </BrowserRouter>
    </>
  );
}

export default App;
