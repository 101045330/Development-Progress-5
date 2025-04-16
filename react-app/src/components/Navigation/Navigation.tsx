import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <header>
      <nav id="nav">
        <ul id="main_nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li className="mTopHalf">
            <Link to="/">
              <img src="/jpg/logo.jpg" alt="Logo" className="logo" />
            </Link>
          </li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/helpdesk">Help Desk</Link></li>
        </ul>
      </nav>
      <div className="background-image"></div>
    </header>
  );
};

export default Navigation;
