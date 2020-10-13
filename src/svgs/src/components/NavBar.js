import React, { useState } from "react";
import "./NavBar.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "./Login";
import RegisterForm from "./Register";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  // LOGIC TO SHOW THE LOGIN MODAL
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginShow = () => setShowLogin(true);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    setShowLogin(false);
  };

  // LOGIC TO TOGGLE THE LOGIN AND REGISTER MODAL
  const handleSwitch = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);
  const onRegisterFormSubmit = (e) => {
    e.preventDefault();
    handleRegisterClose();
  };
  return (
    <section>
      <nav className="navHeader">
        <div className="navbar-container contains">
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <span className="highlight">Gamers</span> Hub
          </Link>
           <div className='menu-icon' onClick={handleClick}>
              {click ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-links" 
              onClick={handleLoginShow}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to ='/' className="nav-links" onClick={handleRegisterShow}>
                Register
              </Link>
            </li>
          </ul>
          </div>
        </nav>

      {/* LOGIN MODAL  */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSwitch}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      {/* REGISTER MODAL */}
      <Modal show={showRegister} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm onSubmit={onRegisterFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSwitch}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default NavBar;
