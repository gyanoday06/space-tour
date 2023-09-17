import React from 'react';
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <center>
          <section className="socials">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/gyanoday06/" target="_blank" role="button" rel='noreferrer'>
              <button className='bg-accent'><i className="fa-brands fa-linkedin"></i></button></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/gyanoday06" target="_blank" role="button" rel='noreferrer'>
              <button className='bg-accent'><i className="fa-brands fa-github"></i></button></a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/gyanoday__06/" target="_blank" role="button" rel='noreferrer'>
              <button className='bg-accent'><i className="fa-brands fa-instagram"></i></button></a>
          </section>
        </center>
        <div className="footer-copyright">
          <center>
            &copy; 2023 Gyanoday Kothari. All rights reserved.
          </center>
        </div>
      </div> <br />
    </footer>

  );
}

