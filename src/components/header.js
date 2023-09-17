import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"

function Header() {
  const location = useLocation();

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const isRouteActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <header className="primary-header flex">
        <div>
          <img
            src="https://i.imgur.com/vHzPUCt.png"
            alt="space tourism logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          onClick={toggleMobileNav}
          aria-expanded={isMobileNavVisible ? 'true' : 'false'}
        >
          <span className="sr-only">
            {isMobileNavVisible ? 'Close Menu' : 'Open Menu'}
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible={isMobileNavVisible ? 'true' : 'false'}
            className="primary-navigation underline-indicators flex"
          >
            <Link to="/" className={`ff-sans-cond uppercase text-white letter-spacing-2 ${isRouteActive('/')}`}>
              <li>
                <span aria-hidden="true">00</span>Home
              </li>
            </Link>

            <Link to="/destinations" className={`ff-sans-cond uppercase text-white letter-spacing-2 ${isRouteActive('/destinations')}`}>
              <li>
                <span aria-hidden="true">01</span>Destination
              </li>
            </Link>

            <Link to="/crew" className={`ff-sans-cond uppercase text-white letter-spacing-2 ${isRouteActive('/crew')}`}>
              <li>
                <span aria-hidden="true">02</span>Crew
              </li>
            </Link>

            <Link to="/technology" className={`ff-sans-cond uppercase text-white letter-spacing-2 ${isRouteActive('/technology')}`}>
              <li>
                <span aria-hidden="true">03</span>Technology
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
