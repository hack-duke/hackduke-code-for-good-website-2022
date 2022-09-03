import React from "react";
import "./Landing.css";

import logo from "../../assets/Landing/HackDuke.svg";
import island from "../../assets/Landing/home graphic.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="welcome">
          <img className="hackduke-logo" src={logo} />
          <div className="descriptor">Code for Good</div>
          <div className="line"></div>
          <div className="date">October 22-23, 2022</div>
          <a
            className="join"
            target="_blank"
            rel="noopener noreferrer"
            href="https://hackduke.typeform.com/to/XYySGCPT"
          >
            Apply Now!
          </a>
        </div>
      </div>
      <div className="right">
        <img className="island" src={island} />
        <a
          className="join-mobile join"
          target="_blank"
          rel="noopener noreferrer"
          href="https://hackduke.typeform.com/to/XYySGCPT"
        >
          Apply Now!
        </a>
      </div>
    </div>
  );
};

export default Landing;
