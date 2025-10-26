import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="logo">MyLogo</div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="program" smooth={true} duration={500} onClick={closeMenu}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} duration={500} onClick={closeMenu}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} onClick={closeMenu}>
            Testimonial
          </Link>
        </li>
        <li>
          <button className="ctn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
