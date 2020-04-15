import React from "react";
import "./work.css";

const Work = () => {
  const onMouseOver = (e) => {
    e.target.play();
    e.muted = true;
  };

  const onMouseOut = (e) => {
    e.target.load();
  };

  return (
    <div>
      <h1>work /></h1>
      <video
        className="video"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        width="200px"
        controls={false}
        poster="images/stetris.png"
        muted="muted"
      >
        <source src="videos/stetris.mp4" type="video/mp4"></source> Your browser
        does not support the video tag.
      </video>
      <video
        className="video"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        controls={false}
        poster="images/social-network.png"
        width="300px"
        muted="muted"
      >
        <source src="videos/social-network-movie.mp4" type="video/mp4"></source>{" "}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Work;
