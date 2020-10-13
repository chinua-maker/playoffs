import React from "react";
import grid1 from "../images/grid-1.jpg";
import grid2 from "../images/grid-2.jpg";
import grid3 from "../images/grid-3.jpg";
import grid4 from "../images/grid-4.jpg";
import grid5 from "../images/grid-5.jpg";
import "./EventGallery.css";

const ListItems = [
  {
    src: grid1,
    text: "PS 4",
    caption: "Create, Invite, Play and Connect With People.",
    likes: 30,
  },
  {
    src: grid2,
    text: "Soccer",
    caption: "Join The Mainlander's For A Playoff .",
    likes: 100,
  },
  {
    src: grid3,
    text: "Chess",
    caption: "Hook Up With Team Incredibles Chess Maniacs And Earn A Title.",
    likes: 10,
  },
  {
    src: grid3,
    text: "PS 4",
    caption: "Create, Invite, Play and Connect With People.",
    likes: 30,
  },
  {
    src: grid4,
    text: "Soccer",
    caption: "Join The Mainlander's For A Playoff .",
    likes: 50,
  },
  {
    src: grid5,
    text: "Chess",
    caption: "Hook Up With Team Incredibles Chess Maniacs And Earn A Title.",
    likes: 30,
  },
];

function EventGallery() {
  return (
    <>
      <div className="event-gallery">
        {ListItems.map((item) => {
          return (
            <div className="image">
              <img className="image_img" src={item.src} alt="Bricks" />
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">{item.text}</div>
                <p className="image__description">{item.caption}</p>
                <div id="event_icons">
                  <i className="fas fa-heart">{item.likes}</i>
                  <i className="fas fa-share"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EventGallery;
