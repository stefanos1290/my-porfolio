import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="findMe">Find me on:</div>
      <div className="github-container">
        <span className="github-icon">
          <GitHubIcon />
        </span>
        <span className="github-url">github.com/stefanos1290</span>
      </div>
      <div className="linkedin-container">
        <span className="linkedin-icon">
          <LinkedInIcon />
        </span>
        <span className="linkedin-url">in/stefanos-oxinos</span>
      </div>
      <div className="mail-container">
        <span className="mail-icon">
          <MailIcon />
        </span>
        <span className="mail-url">stefanostrr@hotmail.com</span>
      </div>

      <Button className="mailtoButton">
        <a className="mailto" href="mailto:stefanostrr@hotmail.com">
          GET IN TOUCH
        </a>
      </Button>
    </div>
  );
};

export default Contact;
