import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import 'Navigate' from react-router-dom
import Header from './components/header';
import Home from './components/home';
import Destinations from './components/destinations';
import Crew from './components/crew';
import Technology from './components/technology';

import './App.css';

function App() {
  useEffect(() => {
    window.location.pathname === '/' || Navigate('/');
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
