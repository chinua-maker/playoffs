import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-area">
      <div className="main-footer-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-footer-widget mb-70 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="widget-title">
                  <Link to="/" id="home_logo">
                             
               <i className="fas fa-fingerprint"  />
               GAMEHUB
                  </Link>
                </div>
                <div className="widget-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris velit arcu, scelerisque dignissim massa quis, mattis
                    facilisis erat. Aliquam erat volutpat. Sed efficitur diam ut
                    interdum ultricies.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-footer-widget mb-70 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="widget-title">
                  <h4>Game Reviews</h4>
                </div>
                <div className="widget-content">
                  <nav>
                    <ul>
                      <li>
                        <Link to="#">PS5</Link>
                      </li>
                      <li>
                        <Link to="#">Chess</Link>
                      </li>
                      <li>
                        <Link to="#">Monopoly</Link>
                      </li>
                      <li>
                        <Link to="#">AYOO</Link>
                      </li>
                      <li>
                        <Link to="#">PS4</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-footer-widget mb-70 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="widget-title">
                  <h4>Useful Links</h4>
                </div>
                <div className="widget-content">
                  <nav>
                    <ul>
                      <li>
                        <Link to="#">What Ya' Say</Link>
                      </li>
                      <li>
                        <Link to="#">Reviews</Link>
                      </li>
                      <li>
                        <Link to="#">New Games</Link>
                      </li>
                      <li>
                        <Link to="#">Forum</Link>
                      </li>
                      <li>
                        <Link to="#">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-footer-widget mb-70 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="widget-title">
                  <h4>What’s new</h4>
                </div>
                <div className="widget-content">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">PS4</Link>
                      </li>
                      <li>
                        <Link to="/">Chess</Link>
                      </li>
                      <li>
                        <Link to="/">AYOO</Link>
                      </li>
                      <li>
                        <Link to="/">Monopoly</Link>
                      </li>
                      <li>
                        <Link to="/">PS5</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copywrite-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-sm-5">
              <p className="copywrite-text">
                <Link to="#">
                  Copyright © All rights reserved | This App Is Designed BY The
                  Incredibles
                  <i className="fa fa-heart-o" aria-hidden="true" />
                  by
                </Link>
                <Link to="/" target="_blank">
                  Gamer
                </Link>
              </p>
            </div>
            <div className="col-12 col-sm-7">
              <div className="footer-nav">
                <ul>
                  <li>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
             <i className="fab fa-facebook-f" />
            </Link>
                  </li>

                  <li>
              <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
          <i className="fab fa-youtube" />
            </Link>
                  </li>
                  <li>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className="fab fa-twitter" />
            </Link>
                  </li>
                  <li>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className="fab fa-linkedin-in" />
            </Link>
                  </li>
                  <li>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className="fab fa-instagram" />
            </Link>
                  </li>

                  <li>
            <Link to="/contact">Contact</Link>
                  </li>
                </ul>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='footer-container'>
//       <div className='footer-links'>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>About Us</h2>
//             <Link to='/sign-up'>How it works</Link>
//             <Link to='/'>Testimonials</Link>
//             <Link to='/'>Careers</Link>
//             <Link to='/'>Investors</Link>
//             <Link to='/'>Terms of Service</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Destinations</Link>
//             <Link to='/'>Sponsorships</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Ambassadors</Link>
//             <Link to='/'>Agency</Link>
//             <Link to='/'>Influencer</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>Youtube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//         </div>
//       </div>
//       <section className='social-media'>
//         <div className='social-media-wrap'>
//           <div className='footer-logo'>
//             <Link to='/' className='social-logo'>
//               <i className="fas fa-fingerprint"></i>
//               GAMEHUB
//             </Link>
//           </div>
//           <small className='website-rights'>LAVISH © 2020</small>
//           <div className='social-icons'>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//              <i className="fab fa-facebook-f"></i>
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <i className="fab fa-instagram"></i>
//             </Link>
//             <Link
//               className='social-icon-link'
//               to={
//                 '/'
//               }
//               target='_blank'
//               aria-label='Youtube'
//             >
//           <i className="fab fa-youtube"></i>
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <i className="fab fa-twitter"></i>
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <i className="fab fa-linkedin-in"></i>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
