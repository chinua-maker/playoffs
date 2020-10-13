import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Header />
      <img src={Image} alt="" className="contact_image" />
      <section className="contact-area section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="contact-content mb-100">
                    <Link to="/contact" className="mb-50 d-block">
                      <img src="img/core-img/logo.png" alt="" />
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris velit arcu, scelerisque dignissim massa quis,
                      mattis facilisis erat.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="contact-content mb-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris velit arcu, scelerisque dignissim massa quis,
                      mattis facilisis erat. Aliquam erat volutpat. Sed
                      efficitur diam. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Mauris velit arcu, scelerisque.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="contact-content mb-100">
                    <div className="single-contact-info d-flex align-items-center">
                      <div className="title">
                        <p>Address</p>
                      </div>
                      <p>1481 Abraham Adesanya</p>
                    </div>

                    <div className="single-contact-info d-flex align-items-center">
                      <div className="title">
                        <p>Phone</p>
                      </div>
                      <p>+234 7953 32453</p>
                    </div>

                    <div className="single-contact-info d-flex align-items-center">
                      <div className="title">
                        <p>E-mail</p>
                      </div>
                      <p>yourmail@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <h4 className="mb-70">Get In Touch</h4>

              <div className="contact-form-area mb-100">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name*"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="contact_btn w-100" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
