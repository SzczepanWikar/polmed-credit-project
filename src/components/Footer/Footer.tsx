import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.scss';
import { ReactComponent as NfzLogo } from './../../assets/icons/NFZ-logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <NfzLogo className="footer__costom-icon" />
        <Icon icon="ic:baseline-facebook" className="footer__icon" />
      </div>
      <span>Przychodnia lekarska Polmed</span>
    </footer>
  );
};
