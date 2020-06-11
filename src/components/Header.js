import React from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import "./header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logo = "Stefanos";
  const open = "<";
  const close = "/>";
  return (
    <div>
      <div className="headerContainer">
        <div className="menu">
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon className="menuicon" />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={openMenu}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              {" "}
              <Link className="menuitem" to="/">
                START
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="menuitem" to="/work">
                WORK
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link className="menuitem" to="/about">
                ABOUT
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link className="menuitem" to="/contact">
                CONTACT
              </Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="logo">
          <span style={{ color: "#581adf" }}>{open}</span>
          <span style={{ color: "white" }}>{logo}</span>
          <span style={{ color: "#581adf" }}>{close}</span>
        </div>
        <div className="linksContainer">
          <Link to="/" className="start">
            Start<span style={{ color: "#581adf" }}> {close}</span>
          </Link>
          <Link to="/work" className="projects">
            Projects<span style={{ color: "#581adf" }}> {close}</span>
          </Link>
          <Link to="/about" className="about">
            About<span style={{ color: "#581adf" }}> {close}</span>
          </Link>
          <Link to="/contact" className="contact">
            Contact<span style={{ color: "#581adf" }}> {close}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
