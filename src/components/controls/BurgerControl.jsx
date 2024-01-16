// BurgerControl.jsx

import React from 'react';
import './BurgerControl.css';

const BurgerControl = ({ burger, prices, handleAdd, handleRemove, handleOrder, gradients }) => {
  // Calculate the total price of the burger
  const totalPrice = burger.reduce((acc, count, index) => acc + count * prices[index], 0);

  return (
    <div className="burger-control">
      <div className="control-container">
        {/* Buttons for adding, removing ingredients */}
        <div className="ingredient-buttons">
          {burger.map((count, index) => (
            <div key={index} className="ingredient-button">
              <div className="ingredient-name">{gradients[index]}</div>
              <button className="button" onClick={() => handleRemove(index)}>
                Remove {count > 0 && `(${count})`}
              </button>
              <button className="button" onClick={() => handleAdd(index)}>
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Display total amount */}
        <div className="total-display">Total Price: ${totalPrice.toFixed(2)}</div>

        {/* Button to place an order */}
        <button className="order-button" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BurgerControl;
