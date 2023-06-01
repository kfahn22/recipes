import React from "react";
import { Link } from "gatsby";
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/"></Link>
          <button className="nav-btn">
            <FaAlignJustify />
          </button>
        </div>

        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/character"
            className="nav-link"
            activeClassName="active-link"
          >
            Characters
          </Link>
          <Link
            to="/aboutMJ"
            className="nav-link"
            activeClassName="active-link"
          >
            About MJ McGuiness
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
