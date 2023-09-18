import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Destinations from './components/destinations';
import Crew from './components/crew';
import Technology from './components/technology';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/space-tour" element={<Home />} />
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
