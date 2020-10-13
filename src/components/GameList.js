import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ps5 from "../images/ps5.jpeg";
import board from "../images/chess.jpg";
import soccer from "../images/soccer.jpg";
import { Link } from "react-router-dom";
import "./GameList.css";

function GameList() {
  return (
    <div className="gameslist">
            <div className="gamelist_area">
              <img src={ps5} alt="" />
              <div className="gamelist_div">
                  <Link to="/" className="gamelist_btn">
                View Games
              </Link>
              </div>
            
            </div>

            <div className="gamelist_area">
              <img src={board} alt="" />
              <div className="gamelist_div">
                  <Link to="/" className="gamelist_btn">
                View Games
              </Link>
              </div>
            
            </div>

            <div className="gamelist_area">
              <img src={soccer} alt="" />
                <div className="gamelist_div">
                  <Link to="/" className="gamelist_btn">
                View Games
              </Link>
              </div>
            </div>
          </div>
  );
}

export default GameList;
