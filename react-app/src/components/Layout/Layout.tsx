import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
