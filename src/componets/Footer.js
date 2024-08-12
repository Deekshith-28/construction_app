import React from 'react';
import './Footer.css';

function FooterBar() {
  return (
    <footer className="footer-bar bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='text-warning'>Contact Us</h5>
            <p>
              <p className="fa-solid fa-phone text-warning"></p> +123 456 7890
            </p>
            <p>
              <p className="fa-solid fa-envelope text-warning"></p> info@buildhood.com
            </p>
           
          </div>
          <div className="col-md-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
          <img src='https://placehold.co/400' alt="BuildHood" className="logo" />
          <span className="ms-2">BUILDHOOD</span>
        </a>
          </div>
          <div className="col-md-4 pt-3">
          <div className="social-icons text-center d-flex justify-content-between">
              <a href="https://www.facebook.com" className="text-white me-2"><p className="fa-brands fa-facebook text-warning fa-2x"></p></a>
              <a href="https://www.twitter.com" className="text-white me-2"><p className="fa-brands fa-twitter text-warning fa-2x"></p></a>
              <a href="https://www.instagram.com" className="text-white me-2"><p className="fa-brands fa-instagram text-warning fa-2x"></p></a>
              <a href="https://www.linkedin.com" className="text-white me-2"><p className="fa-brands fa-linkedin text-warning fa-2x"></p></a>
              <a href="https://api.whatsapp.com/send?phone=6360777249&text=Hi!%20Can%20I%20get%20more%20information%20on%20this?" className="text-white"><p className="fa-brands fa-whatsapp text-warning fa-2x"></p></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
