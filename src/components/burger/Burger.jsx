// Burger.jsx

import React from 'react';
import './Burger.css';

const Burger = ({ type }) => {
  return (
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

      <div className="ingredient lettuce"></div>
      <div className="ingredient bacon"></div>
      <div className="ingredient cheese"></div>
      <div className="ingredient meat"></div>

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
  );
};

export default Burger;
