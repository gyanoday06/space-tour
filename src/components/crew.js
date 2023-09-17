import React, { useState } from 'react';
import './Crew.css';
import data from './data.json';
import Footer from './Footer'

export default function Crew() {
  const [activeTab, setActiveTab] = useState(data.crew[0]);

  const handleMemberClick = (member) => {
    setActiveTab(member);
  };

  return (
    <div className="body">
      <div className="crew">
        <main id="main" className="grid-container grid-container--crew flow">
          <h1 className="numbered-titled-crew text-slide-up">
            <span aria-hidden="true">02</span> Meet your crew
          </h1>
          <article
            className="crew-details flow"
            id={`${activeTab.name}-tab`}
            role="tabpanel"
            tabIndex="0"
          >
            <header className="flow flow--space-small">
              <h2 className="fs-600 ff-serif uppercase">{activeTab.role}</h2>
              <p className="fs-700 uppercase ff-serif">{activeTab.name}</p>
            </header>
            <div className='mem--con'>
              <p id='mem--bio'>{activeTab.bio}</p>
            </div>
          </article>
          <div
            className="dot-indicators flex"
            role="tablist"
            aria-label="crew member list"
          >
            {data.crew.map((member) => (
              <button
                key={member.name}
                aria-selected={activeTab === member}
                aria-controls={`${member.name}-tab`}
                role="tab"
                data-image={`${member.name}-image`}
                tabIndex={activeTab === member ? '0' : '-1'}
                onClick={() => handleMemberClick(member)}
              >
                <span className="sr-only">{`The ${member.role}`}</span>
              </button>
            ))}
          </div>
          <picture className="crew--img">
            <img
              src={activeTab.images.png}
              alt={activeTab.name}
            />
          </picture>
        </main>
      </div>
      <Footer />
    </div>
  );
}
