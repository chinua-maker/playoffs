import React, {useState} from "react";
import "./CreateEvent.css";
import Header from "./Header";
import Footer from "./Footer";
import Thanos from "../svgs/svgimg5.jpg";
import Flip from "react-reveal/Flip";


const CreateEvent = () => {

    const [valuesState, setValuesState] = useState({
    name: "",
    location: "",
    event_type: "",
    time: "",
    duration: "",
    description: ""
  });

  const handleChange = e => {
    const {name , value} = e.target;
    setValuesState({
      ...valuesState,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(valuesState);
    console.log(JSON.stringify(valuesState));
    fetch
      ('https://sua-gameapp.herokuapp.com/events',{
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…lciJ9.DXS9NISAT1lu8Q8OPTImscZL4TAvfCTGSu0TftNHqdA"
      },
      body: JSON.stringify(valuesState),
      redirect: "follow",
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => { console.log(err) 
      })
    }

  return (
    <>
      <Header />

      <section id="createvent">
            <div className="createEvent_dark">
              <h3 className="createvent_head">Create Event</h3>
              <form onSubmit={onSubmit} className="quote">
                <div>
                  <label
                  className='form_label'>
                  Name
                  </label>
                  <br />
                  <input 
                  type="text"
                  name="name"
                  value={valuesState.name}
                  onChange={handleChange}
                  className='form_input' 
                  placeholder="Name" />
                </div>
                <div>
                  <label
                  className='form_label'>
                  Location
                  </label>
                  <br />
                  <input 
                   type="location"
                  name="location"
                  value={valuesState.location}
                  onChange={handleChange}
                  className='form_input' placeholder="Location" />
                </div>
                <div>
                  <label
                  className='form_label'>
                  Event</label>
                  <br />
                  <input 
                  type="event"
                  name="event_type"
                  value={valuesState.event}
                  onChange={handleChange}
                  className='form_input'
                  placeholder="Event" />
                </div>
                <div>
                  <label className='form_label'>
                  Time
                  </label>
                  <br />
                  <input 
                  type="time" 
                  name="time"
                  value={valuesState.time}
                  onChange={handleChange}
                  className='form_input'
                  placeholder="Time" />
                </div>
                <div>
                  <label className='form_label'>
                  Duration
                  </label>
                  <br />
                  <input 
                  type="duration"
                  name="duration"
                  value={valuesState.duration}
                  onChange={handleChange}
                  className='form_input' placeholder="Duration" />
                </div>

                <div>
                  <label
                  className='form_label'>
                  Message
                  </label>
                  <br />
                  <textarea placeholder="Message" name = "description"/>
                </div>
                <button className="button_1" type="submit">
                  Create
                </button>
              </form>
            </div>
          <Flip left>
            <div id="create-col">
              <img src={Thanos} alt="" id="thanos_image" />
                <p className="createEvent_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  et molestias aliquid vitae molestiae vel praesentium, fuga
                  asperiores dolor atque.
                </p>
            </div>
          </Flip>
      </section>
      <section id="newsletter">
          <h2 className="create_subscribe">Subscribe To Our Newsletter</h2>
          <form className="create_Event_form">
            <input type="email" placeholder="Enter Email..." />
            <button type="submit" className="button_1">
              Subscribe
            </button>
          </form>
      </section>
      <div className="col-12 mt-100">
        <div className="map-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15854.902635574226!2d3.3892903999999997!3d6.556276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1601321139983!5m2!1sen!2sng"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="maps"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateEvent;
