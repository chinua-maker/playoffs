import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Header.css";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <section>
      <nav className="headers">
        <div className="logo-container containing">
          <Link to="/" className='headerbar-logo' onClick={closeMobileMenu}>
                <span className="highlight">Gamers</span> Hub
          </Link>
             <div className='menu-icon' onClick={handleClick}>
              {click ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </div>
        <div className="input_header">
          <input type="text" placeholder="search..." />
        </div>
          <ul className={click ? 'head-menu active' : 'head-menu'}>
            <li className="head-item">
              <Link className="nav-link" id="linka" to="/createvent">
                Create Event
              </Link>
            </li>
            <li className="head-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="head-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="head-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        <div className="event_toggle">
          <Dropdown>
            <Dropdown.Toggle>
            </Dropdown.Toggle>
            <Dropdown.Menu id="drop_downIcons">
              <Dropdown.Item to="/">profile</Dropdown.Item>
              <Dropdown.Item to="/">Update profile</Dropdown.Item>
              <Dropdown.Item to="/"> Log Out </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
        </nav>
    </section>
  );
}

export default Header;
