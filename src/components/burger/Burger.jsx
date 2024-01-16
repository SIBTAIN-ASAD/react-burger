import React from 'react';
import './Burger.css';
import Bacon from './Bacon';
import Cheese from './Cheese';
import Lettuce from './Lettuce';
import Meat from './Meat';

const Burger = ({ gradients }) => {
  // Function to create gradients according to the passed array
  const createGradients = (gradients) => {
    const result = [];
    for (let i = 0; i < gradients.length; i++) {
      for (let j = 0; j < gradients[i]; j++) {
        switch (i) {
          case 0:
            result.push(<Lettuce key={result.length} />);
            break;
          case 1:
            result.push(<Bacon key={result.length} />);
            break;
          case 2:
            result.push(<Cheese key={result.length} />);
            break;
          case 3:
            result.push(<Meat key={result.length} />);
            break;
          default:
            break;
        }
      }
    }
    return result;
  };

  return (
    <div className="burger-container">
      <center>
        <div className="bread-top">
          {/* Beans on the top bread */}
          <div className="bean bean1"></div>
          <div className="bean bean2"></div>
          <div className="bean bean3"></div>
          <div className="bean bean7"></div>
          <div className="bean bean8"></div>
          <div className="bean bean9"></div>
        </div>

        {/* Render ingredients based on gradients */}
        {createGradients(gradients)}

        <div className="bread-bottom">
          {/* Beans on the bottom bread */}
          <div className="bean bean4"></div>
          <div className="bean bean5"></div>
          <div className="bean bean6"></div>
          <div className="bean bean10"></div>
          <div className="bean bean11"></div>
          <div className="bean bean12"></div>
        </div>
      </center>
    </div>
  );
};

export default Burger;
