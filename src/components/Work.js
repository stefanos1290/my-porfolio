import React from "react";
import "./work.css";
import Button from "@material-ui/core/Button";

const Work = () => {
  const onMouseOver = (e) => {
    e.target.play();
    e.muted = true;
  };

  const onMouseOut = (e) => {
    e.target.load();
  };

  return (
    <div className="work-container">
      <div className="tetris-container">
        <video
          className="tetris"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          controls={false}
          poster="images/tetris-poster.png"
          muted="muted"
        >
          <source src="videos/tetris-movie.mov" type="video/mp4"></source> Your
          browser does not support the video tag.
        </video>
        <Button
          className="playTetrisButtom"
          variant="contained"
          color="primary"
        >
          <a className="links" href="https://stefanos1290.github.io/stetris/">
            Play Game
          </a>
        </Button>
        <Button
          className="viewTetrisButton"
          variant="contained"
          color="primary"
        >
          <a className="links" href="https://github.com/stefanos1290/stetris">
            View Code
          </a>
        </Button>
        <div className="tetris-line">
          <div className="number1">01</div>
        </div>
        <div className="mainContainer2">
          <div className="theCard2">
            <div className="theFront2">Tetris</div>
            <div className="theBack2">write description for tetris</div>
          </div>
        </div>
        <div className="resposiveTetrisLine"></div>
      </div>
      <div className="social-network-container">
        <video
          className="social-network"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          controls={false}
          poster="images/social-network.png"
          muted="muted"
        >
          <source
            src="videos/social-network-movie.mp4"
            type="video/mp4"
          ></source>{" "}
          Your browser does not support the video tag.
        </video>
        <Button
          className="View-Social-Network-Button"
          variant="contained"
          color="primary"
        >
          <a
            className="links"
            href="https://github.com/stefanos1290/social-network"
          >
            View Code
          </a>
          <div className="number2">02</div>
        </Button>
        <div className="social-network-line"></div>
        <div className="mainContainer">
          <div className="theCard">
            <div className="theFront">Social Network</div>
            <div className="theBack">write description for social network</div>
          </div>
        </div>
        <div className="resposiveSNetworkLine"></div>
      </div>
      <div className="descriptionResContainer">
        <div className="theCardResSN">
          <div className="theFrontResSN">Social Network</div>
          <div className="theBackResSN">fuuuuuck</div>
        </div>
      </div>
      <div className="image-board-container">
        <video
          className="image-board"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          controls={false}
          poster="images/image-board-poster.png"
          muted="muted"
        >
          <source src="videos/image-board-movie.mov" type="video/mp4"></source>{" "}
          Your browser does not support the video tag.
        </video>
        <Button
          className="View-image-board-Button"
          variant="contained"
          color="primary"
        >
          <a
            className="links"
            href="https://github.com/stefanos1290/image-board-vue"
          >
            View Code
          </a>
          <div className="number3">03</div>
        </Button>
        <div className="resposiveImageBoardLine"></div>
        <div className="image-board-line"></div>
        <div className="mainContainer1">
          <div className="theCard1">
            <div className="theFront1">Image Board</div>
            <div className="theBack1">write description for image board</div>
          </div>
        </div>
      </div>
      <div className="resMainContainerIB">
        <div className="resCardIB">
          <div className="resFrontIB">Image Board</div>
          <div className="resBackIB">write description for image board</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
