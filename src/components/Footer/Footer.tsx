import React from 'react';
import './Footer.scss';
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src="./NFZ-logo.svg" alt="Logo NFZ"></img>
      <svg>
        <use xlinkHref="./NFZ-logo.svg"></use>
      </svg>
    </footer>
  );
};
