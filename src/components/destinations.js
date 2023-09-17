import React, { useState, useEffect } from 'react';
import './Destinations.css';
import data from './data.json';
import Footer from "./Footer"

export default function Destinations() {
  const ytdata = {
    destinations: [
      {
        name: "Moon",
        url: "https://www.youtube.com/embed/2iSZMv64wuU?autoplay=1"
      },
      {
        name: "Mars",
        url: "https://www.youtube.com/embed/D8pnmwOXhoY?autoplay=1"
      },
      {
        name: "Europa",
        url: "https://www.youtube.com/embed/dGJbIfjzMQk?autoplay=1"
      },
      {
        name: "Titan",
        url: "https://www.youtube.com/embed/msiLWxDayuA?autoplay=1"
      }
    ]
  };

  const [selectedDestination, setSelectedDestination] = useState(data.destinations[0]);
  const [showArrow, setShowArrow] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const query = selectedDestination.name;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
        if (response.ok) {
          const newsData = await response.json();
          setNews(newsData.articles.slice(0, 4));
        } else {
          console.error('Failed to fetch news data.');
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, [selectedDestination]);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;

    if (scrollY + windowHeight >= bodyHeight) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='body'>
      <div className="destination">
        <main id="main" className="grid-container grid-container--destination flow">
          <h1 className="numbered-titled-dest text-slide-up">
            <div className='num--t'>
              <span aria-hidden="true">01</span> Pick your destination
            </div>
          </h1>

          <picture className="planet--img">
            <img src={selectedDestination.images.png} alt={selectedDestination.name} />
          </picture>

          <div className="tab-list underline-indicators-planet flex" role="tablist" aria-label="destination list">
            {data.destinations.map((destination, index) => (
              <button
                key={index}
                aria-selected={destination === selectedDestination}
                role="tab"
                aria-controls={`${destination.name}-tab`}
                className={`uppercase ff-sans-cond text-accent letter-spacing-2 ${destination === selectedDestination ? 'selected' : ''}`}
                tabIndex="0"
                onClick={() => handleDestinationClick(destination)}
              >
                {destination.name}
              </button>
            ))}
          </div>

          {/* Destination information */}
          <article className="destination-info flow" tabIndex="0" role="tabpanel">
            <h2 className="fs-800 uppercase ff-serif">{selectedDestination.name}</h2>
            <center>
              <p className='desc'>{selectedDestination.description}</p>
            </center>
            <div className="destination-meta flex flex-row text-slide-up">
              <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className="ff-serif uppercase">{selectedDestination.distance}</p>
              </div>
              <div>
                <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                <p className="ff-serif uppercase">{selectedDestination.travel}</p>
              </div>
            </div>
          </article>
        </main>
        <hr /> <br />

        <div className='content'>
          <div>
            <h2 className='uppercase ff-sans-cond text-white fs-700'>Latest News</h2>
          </div>
          <center>

          <div className='cards--container'>
            {news.map((article, index) => (
              <div className="news-card" key={index}>
                <h3 className='ff-serif card--title'>{article.title}</h3>
                <p className='news--desc'>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className='read-more'>Read more</a>
              </div>
            ))}
          </div>
          </center>
        </div>
        <br /> <br />
        <hr />

        {/* Youtube Card */}
        <section id="youtube">
          <center>
            <div>
              <h2 className='uppercase ff-sans-cond text-white fs-700 cus-vd'>Video</h2>
            </div>
          </center>
          <div className="container">
            <div className="row" id="presaleform">
              <div className="col-md-7" id="presale1">
                <div className="token-form">
                  <div className="youtube">
                    <iframe
                      style={{
                        border: '0px solid rgb(255, 255, 255)',
                        padding: '10px',
                        background: '#000',
                        WebkitBorderRadius: '20px',
                        MozBorderRadius: '20px',
                        borderRadius: '20px',
                        margin: '0 auto',
                        overflow: 'hidden'
                      }}
                      width="100%"
                      height="500"
                      src={ytdata.destinations.find(destination => destination.name === selectedDestination.name)?.url || ''}
                      allowFullScreen
                      title="YouTube Video"
                    ></iframe>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='down--arrow-c'>
          {showArrow && (
            <span className="material-symbols-outlined text-slide-up">
              keyboard_arrow_down
            </span>
          )}
        </section>

        <br /> <br />
        <Footer />
      </div>
    </div>
  );
}
