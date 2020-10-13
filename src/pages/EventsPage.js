import React from "react";
// import Events from "../components/Events";
import "./EventsPage.css";
import Header from "../components/Header";
import Jump from "react-reveal/Jump";
import Footer from "../components/Footer";
import EventGallery from "../components/EventGallery";
import Accordion from "../components/Accordion";

function EventsPage({ eventsAlly }) {
  return (
    <section className="event_pages">
      <Header />
      <Jump>
        <EventGallery />
      </Jump>
      <Accordion />

      {/* <div className="event_page">
        <h1 className="events_pageHeader">UPCOMING EVENTS</h1>

        {eventsAlly.map(({ date, detail, location, creator, duration }, i) => (
          <Events
            key={i}
            date={date}
            detail={detail}
            location={location}
            creator={creator}
            duration={duration}
          />
        ))}
      </div> */}

      <Footer />
    </section>
  );
}

export default EventsPage;
