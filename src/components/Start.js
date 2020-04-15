import React from "react";
import Typical from "react-typical";

import Zoom from "react-reveal/Zoom";
import "./start.css";

const Start = () => {
  return (
    <div>
      <div className="startContainer">
        {" "}
        <h1 className="myName">Hi, my name is </h1> <br />{" "}
        <h1 className="stefanos"> Stefanos Oxinos, i develop</h1>
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
          <h3 className="show-you" style={{ color: "gray", marginTop: "10px" }}>
            let me show you...
          </h3>
        </Zoom>
      </div>
    </div>
  );
};

export default Start;
