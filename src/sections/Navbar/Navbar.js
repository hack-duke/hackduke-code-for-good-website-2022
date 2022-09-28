import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ isVisible }) => {
  const checkboxChange = () => {
    if (window.innerWidth <= 1000) {
      const contright = document.querySelector("#content-right");
      if (contright.style.opacity === "1") {
        contright.style.opacity = "0";
        contright.style.width = "0%";
      } else {
        contright.style.opacity = "1";
        contright.style.width = "100%";
      }
    }
  };

  const closeCheckbox = () => {
    document.querySelector("#navbar-btn").click();
  };

  return (
    <div
      id="navbar"
      className={`${isVisible ? "navbar" : "navbar-fixed navbar"}`}
    >
      <div id="contents">
        <div id="content-left">
          <div id="navbar-title" className={"navbar-title"}>
            <a href="https://hackduke.org" target="_blank" rel="noreferrer">
              HackDuke
            </a>
          </div>
          <input
            className="navbar-btn"
            type="checkbox"
            id="navbar-btn"
            onChange={checkboxChange}
          />
          <label className="navbar-icon" for="navbar-btn">
            <span className="navicon">&nbsp;</span>
          </label>
          <div className="nav-background">&nbsp;</div>
        </div>
        <div id="content-right">
          <div id="about-texts" className="navbar-text">
            <AnchorLink
              className="navbar-link"
              rel="noopener noreferrer"
              href={"#landing"}
              onClick={closeCheckbox}
            >
              Home
            </AnchorLink>
            <span className="white-line">&nbsp;</span>
          </div>
          <div id="about-texts" className="navbar-text">
            <AnchorLink
              className="navbar-link"
              rel="noopener noreferrer"
              href={"#about"}
              onClick={closeCheckbox}
            >
              About
            </AnchorLink>
            <span className="white-line">&nbsp;</span>
          </div>
          <div id="schedule-texts" className="navbar-text">
            <AnchorLink
              className="navbar-link"
              rel="noopener noreferrer"
              href={"#schedule"}
              onClick={closeCheckbox}
            >
              Schedule
            </AnchorLink>
            <span className="white-line">&nbsp;</span>
          </div>
          <div id="faq-texts" className="navbar-text">
            <AnchorLink
              className="navbar-link"
              rel="noopener noreferrer"
              href={"#FAQ"}
              onClick={closeCheckbox}
            >
              FAQ
            </AnchorLink>
            <span className="white-line">&nbsp;</span>
          </div>
          <div id="sponsors-texts" className="navbar-text">
            <AnchorLink
              className="navbar-link"
              rel="noopener noreferrer"
              href={"#Sponsors"}
              onClick={closeCheckbox}
            >
              Sponsors
            </AnchorLink>
            <span className="white-line">&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
