// App.jsx

import React, { useState } from 'react';
import Burger from '.././burger/Burger';
import BurgerControl from '.././controls/BurgerControl';

const Main = () => {
  // State for each gradient
  const [burger, setBurger] = useState([0, 0, 0, 0]);

  // Max gradeint count
  const maxGradients = 10;

  // Prices for each gradient
  const prices = [0.5, 0.7, 0.4, 1.3];

  // name of each gradient
  const gradients = ['lettuce', 'bacon', 'cheese', 'meat'];

  const handleAdd = (index) => {
    setBurger((current) => {
      if (current.reduce((acc, count) => acc + count, 0) >= maxGradients) {
        return current;
      }
      return current.map((count, position) => position === index ? count + 1 : count);
    });
  };

  const handleRemove = (index) => {
    setBurger((current) => current.map((count, position) =>
      position === index ? Math.max(0, count - 1) : count
    ));
  };

  const handleOrder = (total) => {
    setBurger([0, 0, 0, 0]);
    alert(`
    Your order has been placed!
    Please pay $${total.toFixed(2)} at the counter!`);
  };

  const handleRemoveAll = () => {
    setBurger([0, 0, 0, 0]);
  }

  return (
    <div>
      <Burger gradients={burger} />
      <BurgerControl
        burger={burger}
        prices={prices}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        handleRemoveAll={handleRemoveAll}
        handleOrder={handleOrder}
        gradients={gradients}
        maxIngredients={maxGradients}
      />      
    </div>
  );
};

export default Main;
