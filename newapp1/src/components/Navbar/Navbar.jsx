'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './nav.css';

import { Menu, Close } from '@mui/icons-material';

function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Travel More</h1>
        <div className="menu-icons" onClick={handleClick}>
          {state ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </div>
        <ul className={state ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link href="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-links">
              Service
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="nav-links">
              Contact Us
            </Link>
          </li>
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
