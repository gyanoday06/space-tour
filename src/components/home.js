import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

export default function Home() {
  return (
    <body className="home">
      <main id="main" className="grid-container grid-container--home">
        <div className="text-container">
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            <div className='text-slide-up'>
              So, you want to travel to <br /> <br />
            </div>
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>
          <br />
          <center>
            <p className="desc">
              Let’s face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </center>
        </div>
        <Link to="/destinations">
          <div className='slide-left'>
            <a href="/" className="large-button uppercase ff-serif bg-white">
              Explore
            </a>
          </div>
        </Link>
      </main>
    </body>
  );
}
