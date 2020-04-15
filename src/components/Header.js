import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="logo">Stefanos /></div>
        <div className="linksContainer">
          <Link to="/" className="start">
            Start />
          </Link>
          <Link to="/work" className="projects">
            Projects />
          </Link>
          <p className="about">About /></p>
          <p className="contact">Contact /></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
