import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CreateEvent from "./components/CreateEvent";
import EventsPage from "./pages/EventsPage";
import Footer from "./components/Footer";
import "./components/Slides.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import SingleEvent from './components/SingleEvent'
import AdminDashBoardHead from "./components/AdminDashBoardHead";


// Static Data
import eventsAlly from "./assets/data/eventsAlly.json";

function App() {
  return (
    <div className='app_file'>
    <Router>
    
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <NavBar />
            <Landing />
            <Footer />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/createvent" exact component={CreateEvent} />
          <Route path="/events" exact>
            <EventsPage eventsAlly={eventsAlly} />
          </Route>
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/singlevent" exact component={SingleEvent} />
          <Route path = "/dashboard" exact component={AdminDashBoardHead} />     
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
