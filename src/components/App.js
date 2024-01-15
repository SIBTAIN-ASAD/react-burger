import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Burger from './burger/Burger'
// import Navbar from './Header';


const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <Burger />
      </div>
    </Router>
  );
};

export default App;
