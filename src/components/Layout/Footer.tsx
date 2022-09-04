import React, { FC } from 'react';
import info from '../../data/info';
import { Link } from 'react-router-dom';

function FooterNav() {
  return (
    <nav className="footer__nav">
      <Link to="/">О нас</Link>
      <span>{info.email}</span>
      <span>{info.telephone}</span>
    </nav>
  );
}

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
