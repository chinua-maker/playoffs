import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./AdminDashboardHead.css";
import Delete from "../pages/DeleteGame";
import EventsPage from "../pages/EventsPage";
import ViewGame from "../pages/ViewGame";

function DashboardHead() {
  return (
    <>
    <Router>
        <section className="header">
            <div className="header_left">
                <span className="header_avatar" alt="Miriam Gem" src="" />

             
            </div>
            <div className="header_search">
                <i className="fas fa-plane" />

                <input type="text" placeholder="miriam guest" />
            </div>
            <div className="header_right">
                <i className="fas fa-help" />
            </div>
        </section>

<section className="collectives">
        <section className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Dev Diva</h2>
                    <h3>
                        miriam
                    </h3>
                </div>   
            </div>
              <div className="net">
                    <h2>Dev Diva</h2>
                  <Link to="/dashboard/event" id="nets">Event</Link>
                </div>
               <div className="net">
                    <h2>Dev Diva</h2>
                  <Link to="/dashboard/game" id="nets">Game</Link>
                </div>
              <div className="net">
                    <h2>Dev Diva</h2>
                  <Link to="/dashboard/delete" id="nets">Delete</Link>
                </div>
        
        </section>

              <div className="collected">
        <Switch>
          <Route path="/dashboard/delete" exact component={Delete} />
          <Route path="/dashboard/eventspage" exact component={EventsPage} />
          <Route path="/dashboard/viewgame" exact component={ViewGame} />
        </Switch>
      </div>
      </section>
</Router>
        </>
  )
}

export default DashboardHead