// App.jsx

import React, { useState } from 'react';
import Burger from './burger/Burger';
import BurgerControl from './controls/BurgerControl';
import Navbar from './navbar/Navbar';
import './App.css';

const App = () => {
  const [burger, setBurger] = useState([0, 0, 0, 0]);

  // Prices for each gradient
  const prices = [0.5, 0.7, 0.4, 1.3];

  // name of each gradient
  const gradients = ['lettuce', 'bacon', 'cheese', 'meat'];

  const handleAdd = (index) => {
    const newBurger = [...burger];
    newBurger[index]++;
    setBurger(newBurger);
  };

  const handleRemove = (index) => {
    if (burger[index] > 0) {
      const newBurger = [...burger];
      newBurger[index]--;
      setBurger(newBurger);
    }
  };

  const handleOrder = () => {
    setBurger([0, 0, 0, 0]);
    alert('Your order has been placed!');
  };

  return (
    <div>
      <Navbar />
      <Burger gradients={burger} />
      <BurgerControl
        burger={burger}
        prices={prices}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        handleOrder={handleOrder}
        gradients={gradients}
      />
    </div>
  );
};

export default App;
