import React, { useState } from "react";
import { Link } from "gatsby";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="The Sybylines" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/characters"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Characters
          </Link>
          <Link
            to="/exerpt"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Excerpt
          </Link>
          <Link
            to="/aboutMJ"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/about-the-illustrator"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Illustration
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
