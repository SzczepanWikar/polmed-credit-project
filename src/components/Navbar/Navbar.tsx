import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import mainIcon from '../../assets/icons/mainIcon.svg'
import title from '../../assets/icons/title.svg'

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img  src={mainIcon} className="icon"/> <img className="text" src={title}/> 
        </Link>
        
      </div>
    </nav>
  );
};
export default Navbar;
