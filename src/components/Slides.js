import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image23 from "../images/23.jpg";
import chess from "../images/download.jpg";
import "./Slides.css";

const items = [
  {
    id: 1,
    src: image23,
    altText: "PS 4",
    caption: "Create, Invite, Play and Connect With People.",
  },
  {
     id: 2,
    src: chess,
    altText: "Soccer",
    caption: "Join The Mainlander's For A Playoff .",
  },
  {
     id: 3,
    src: image23,
    altText: "Chess",
    caption: "Hook Up With Team Incredibles Chess Maniacs And Earn A Title.",
  },
];
function Slider() {
  return (
    <Carousel className="slide-banner">
      {items.map((item, i) => {
        return (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={item.src} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.altText}</h3>
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
