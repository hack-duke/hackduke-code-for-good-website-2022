import React from "react";
import "./Landing.css";

import logo from "../../assets/Landing/HackDuke.svg";
import island from "../../assets/Landing/home graphic.svg";

const Landing = () => {
  return (
    <div id="landing" className="landing">
      <div className="left">
        <div className="welcome">
          <img className="hackduke-logo" src={logo} />
          <div className="descriptor">Code for Good</div>
          <div className="line"></div>
          <div className="date">October 22-23, 2022</div>
          <div className="button-conduct">
            <a
              className="join"
              target="_blank"
              rel="noopener noreferrer"
              href="https://hackduke.typeform.com/to/XYySGCPT"
            >
              Apply Now!
            </a>
            <div className="conduct">
              © HackDuke 2022 —{" "}
              <a
                className="conduct-link"
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="island" src={island} />
        <div className="button-conduct-mobile button-conduct">
          <a
            className="join-mobile join"
            target="_blank"
            rel="noopener noreferrer"
            href="https://hackduke.typeform.com/to/XYySGCPT"
          >
            Apply Now!
          </a>
          <div className="conduct">
            © HackDuke 2022 —{" "}
            <a
              className="conduct-link"
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
