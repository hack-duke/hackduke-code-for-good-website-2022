import React from "react";
import "./Landing.css";

import logo from "../../assets/Landing/HackDuke.svg";
import island from "../../assets/Landing/bg.svg";
import sun from "../../assets/Landing/sun.svg";
import purple from "../../assets/Landing/purple_crane.svg";
import pink from "../../assets/Landing/pink_crane.svg";

const Landing = () => {
    return (
        <div id="landing" className="landing columns is-multiline">
            <div className="left column is-half-desktop is-full-tablet">
                <div className="welcome">
                    <img className="hackduke-logo" src={logo} />
                    <div className="descriptor">Code for Good</div>
                    <div className="line"></div>
                    <div className="date">October 22-23, 2022</div>
                    <div className="button-conduct">
                        <div
                            onClick={() =>
                                window.open(
                                    "https://hackduke.typeform.com/to/XYySGCPT",
                                    "_blank"
                                )
                            }
                            className="join">
                            Apply Now!
                        </div>
                        <div className="conduct">
                            © HackDuke 2022 —{" "}
                            <a
                                className="conduct-link"
                                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                                target="_blank"
                                rel="noreferrer">
                                Code of Conduct
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right column is-half-desktop is-full-tablet">
                <div className="island">
                    <img className="bg" src={island} />
                    <img className="sun" src={sun} />
                    <img className="purple" src={purple} />
                    <img className="pink" src={pink} />
                </div>
            </div>
        </div>
    );
};

export default Landing;
