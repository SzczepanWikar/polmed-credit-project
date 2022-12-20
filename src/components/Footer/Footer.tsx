import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.scss';
import { ReactComponent as NfzLogo } from './../../assets/icons/NFZ-logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://www.nfz.gov.pl" target="_blank">
          <NfzLogo className="footer__costom-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <Icon icon="ic:baseline-facebook" className="footer__icon" />
        </a>
      </div>
      <span>Przychodnia lekarska Polmed</span>
    </footer>
  );
};
