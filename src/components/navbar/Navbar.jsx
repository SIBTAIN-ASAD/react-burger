// navbar 
import React, {useState, useEffect} from 'react';
import './Navbar.css';
import image from '../../assets/images/logo.png';


const Clock = ({ color, time }) => {
    return (
        // set color and display inline-block and float right
      <h3 style={{ color: color , display: 'inline-block' , float: 'right' }} className='pt-2'>
        {time}
      </h3>
    );
  }
  

const Navbar = () => {

    // time state
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);




    return (
        
        <div class="topnav">
            <a class="active" href="#home">React Burger</a>
            <a href="#news">A place to learn and eat</a>
            <Clock color="yellow" time={time} />
            <img src={image} alt="logo" className='logo' />
        </div>
    );
}

export default Navbar;
