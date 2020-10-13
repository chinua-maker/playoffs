import React, { useState } from "react";
import "./Events.css";
import Slide from "react-reveal/Slide";

function Events({ date, location, detail, creator, duration }) {
  const [dateState, setDateState] = useState(true);
  const [details, setDetails] = useState(false);

  const handleMouseOver = () => {
    console.log("handle");
    setDateState(false);
  };

  const handleMouseOut = () => {
    setDateState(true);
  };

  const handleClick = () => {
    setDetails(!details);
  };
  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="events"
      >
        {dateState && <p className="event_date">{date}</p>}
        <Slide left>
          <div className="event_location">
            {location}
            <i onClick={handleClick} className="fas fa-chevron-down"></i>
          </div>
        </Slide>

        {details && (
          <div className="event_details">
            Created By:&nbsp;{creator}
            <br />
            Detail:&nbsp; &nbsp;{detail}
            <br />
            Duration:&nbsp;{duration}
          </div>
        )}
      </div>
    </>
  );
}

export default Events;
