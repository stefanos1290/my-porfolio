import React from "react";
import Typical from "react-typical";

import Zoom from "react-reveal/Zoom";
import "./start.css";

const Start = () => {
  return (
    <div className="start-component-container">
      <div className="startContainer">
        <div className="verticalLine"></div>{" "}
        <h1 style={{ fontSize: "40px", color: "white" }}>Hi, my name is </h1>{" "}
        <br />{" "}
        <h1 className="stefanos">
          {" "}
          <span style={{ color: "#581adf" }}>Stefanos Oxinos </span>, I{" "}
          <span className="shadowText">develop</span>
        </h1>
        <Typical
          className="tyipical"
          steps={[
            "websites",
            1000,
            "Apps",
            1000,
            "things",
            500,
            "websites",
            1000,
            "Apps",
            1000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <Zoom>
          <h3
            className="show-you"
            style={{ color: "#988e9f", marginTop: "10px" }}
          >
            let me show you...
          </h3>
        </Zoom>
      </div>
    </div>
  );
};

export default Start;
