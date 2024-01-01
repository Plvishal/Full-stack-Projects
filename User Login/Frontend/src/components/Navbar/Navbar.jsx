// import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={state ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/" className="nav-links">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              <i className="fa-solid fa-circle-info"></i> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-links">
              <i className="fa-solid fa-briefcase"></i> Projects
            </Link>
          </li>
          <li>
            <Link to="/signup" className="nav-links">
              <i className="fa-solid fa-briefcase"></i> SignUp
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links">
              <i className="fa-solid fa-briefcase"></i>Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
