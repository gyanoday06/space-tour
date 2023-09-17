import React, { useState } from 'react';
import './Technology.css';
import data from './data.json';
import Footer from './Footer'

export default function Technology() {
  const [tech, setTech] = useState(data.technology[0]);

  const handleTechClick = (technology) => {
    setTech(technology);
  };

  return (
    <main id='main'>
      <section className='technology'>
        <div className='container'>
          <h2 className='numbered-titled-tech text-slide-up'>
            <span aria-hidden='true'>03</span> Space launch 101
          </h2>
          <div className='content'>
            <div className='enumirate'>
              {data.technology.map((technology, index) => (
                <button
                  key={index}
                  aria-selected={technology === tech}
                  role='tab'
                  aria-controls={`${technology.name}-tab`}
                  className={`num ${technology === tech ? 'active' : ''
                    }`}
                  tabIndex='0'
                  onClick={() => handleTechClick(technology)}
                >
                  {technology.number}
                </button>
              ))}
            </div>
            <div className='text'>
              <h2 className='text-accent'>The terminology...</h2>
              <div className='tech--name--con'>
                <p className='fs-700 uppercase ff-serif tech--name name'>{tech.name}</p>
              </div>
              <br />
              <div className='tech--desc--con'>
                <p className='description'>{tech.description}</p>
              </div>
            </div>
            <img
              src={tech.images.portrait}
              alt=''
              className='image'
            />
          </div>
        </div>
        <Footer className='footer'/>
      </section>
    </main>
  );
}
