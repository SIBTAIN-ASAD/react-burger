import React from 'react';
import './Burger.css';
import Bacon from './Bacon';
import Cheese from './Cheese';
import Lettuce from './Lettuce';
import Meat from './Meat';
import Empty from './Empty';
import BreadTop from './BreadTop';
import BreadBottom from './BreadBottom';

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

  // Functoion to check if no ingredients are selected then display empty
  const checkEmpty = (gradients) => {
    let result = createGradients(gradients);
    if (result.length === 0) {
      return <Empty />;
    } else {
      return result;
    }
  };


  return (
    <div className="burger-container">
        <center>
            <BreadTop />
          {/* Render ingredients based on gradients */}
          {checkEmpty(gradients)}
            <BreadBottom />
         </center>
    </div>
  );
};

export default Burger;
