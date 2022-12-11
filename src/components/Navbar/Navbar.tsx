import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
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
          PolMed <i className="fab fa-typo3"></i>
        </Link>
        
      </div>
    </nav>
  );
};
export default Navbar;
