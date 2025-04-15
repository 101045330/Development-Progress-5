import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage'; // Import the new ServicesPage
import HelpDeskPage from './pages/HelpDeskPage';
import { AppProvider } from './contexts/AppContext';

const App: React.FC = () => {
  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} /> {/* Add the route for ServicesPage */}
        <Route path="/helpdesk" element={<HelpDeskPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </AppProvider>
  );
};

export default App;