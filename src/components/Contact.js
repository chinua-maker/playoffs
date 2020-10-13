import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";

function Contact() {
  return (
      <section className="contact-area">
            <div className=" contact_bottom col-6">
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

                <div className="contact_address col-6"> 
                <h4 className="contact_text mb-70">ADDRESS</h4>
                <div className="column">
                  <div>
                      <p className="Address"><b>Locate us: &nbsp;</b>147, Abraham Adesanya, Ajah, Lagos</p>
                      <i className=" contact_icons fas fa-map-marker-alt" />&nbsp;
                      <button id="contact_btn"> Location </button>
                  </div>
                  <div className="phone_call">
                      <p className="call_in"><b>Call Us: &nbsp;</b>+234 673 245 6128</p>
                      <p className="call_in"><b>Call Us: &nbsp;</b>+234 673 245 6128</p>
                      <i className=" contact_icons fas fa-phone-volume" />&nbsp;
                      <button id="contact_btn"> Call </button>
                  </div>
                
                </div>
              </div>
      </section>
  );
}

export default Contact;
