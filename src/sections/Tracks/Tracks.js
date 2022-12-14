import { React, useState } from "react";
import "./Tracks.css";

import scales from "../../assets/Tracks/Scales.svg";
import flowers from "../../assets/Tracks/Flowers.svg";
import heart from "../../assets/Tracks/Heart.svg";
import lightbulb from "../../assets/Tracks/Lightbulb.svg";

import edFlag from "../../assets/Tracks/education.svg";
import envFlag from "../../assets/Tracks/environment.svg";
import healthFlag from "../../assets/Tracks/health.svg";
import inequalityFlag from "../../assets/Tracks/inequality.svg";

import river from "../../assets/Tracks/river.svg";

const scrollTop = (backHit) => {
  document.getElementById("tracks").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  if (backHit) {
    document.getElementById("speakers").className = "speakers";
  } else {
    document.getElementById("speakers").className =
      "speakers speakers-mobile-tracks";
  }
};

function MainTracks(props) {
  return (
    // two different river implementations, one for larger screens and one for mobile/tablet
    <div class="track-river" style={props.display}>
      <img
        class="track-riverBackground is-hidden-touch"
        src={river}
        alt="river"
      />

      <img
        class="track-inequalityFlag is-hidden-touch"
        src={inequalityFlag}
        alt="inequality flag and boat"
        onClick={(e) => {
          props.handlePageIndex(0);
          props.handleRiverDisplay({ visibility: "hidden" });
          scrollTop(false);
        }}
      />
      <img
        class="track-healthFlag is-hidden-touch"
        src={healthFlag}
        alt="health flag and boat"
        onClick={(e) => {
          props.handlePageIndex(2);
          props.handleRiverDisplay({ visibility: "hidden" });
          scrollTop(false);
        }}
      />
      <img
        class="track-envFlag is-hidden-touch"
        src={envFlag}
        alt="environment flag and boat"
        onClick={(e) => {
          props.handlePageIndex(1);
          props.handleRiverDisplay({ visibility: "hidden" });
          scrollTop(false);
        }}
      />
      <img
        class="track-edFlag is-hidden-touch"
        src={edFlag}
        alt="education flag and boat"
        onClick={(e) => {
          props.handlePageIndex(3);
          props.handleRiverDisplay({ visibility: "hidden" });
          scrollTop(false);
        }}
      />

      <div
        class="track-flagContainer is-hidden-desktop"
        style={{ backgroundImage: `url(${river})` }}
      >
        <img
          class="track-inequalityFlag"
          src={inequalityFlag}
          alt="inequality flag and boat"
          onClick={(e) => {
            props.handlePageIndex(0);
            props.handleRiverDisplay({ display: "none" });
            scrollTop(false);
          }}
        />
        <img
          class="track-healthFlag"
          src={healthFlag}
          alt="health flag and boat"
          onClick={(e) => {
            props.handlePageIndex(2);
            props.handleRiverDisplay({ display: "none" });
            scrollTop(false);
          }}
        />
        <img
          class="track-envFlag"
          src={envFlag}
          alt="environment flag and boat"
          onClick={(e) => {
            props.handlePageIndex(1);
            props.handleRiverDisplay({ display: "none" });
            scrollTop(false);
          }}
        />
        <img
          class="track-edFlag"
          src={edFlag}
          alt="education flag and boat"
          onClick={(e) => {
            props.handlePageIndex(3);
            props.handleRiverDisplay({ display: "none" });
            scrollTop(false);
          }}
        />
      </div>
    </div>
  );
}

function Page(props) {
  return (
    <div class="track-container" style={props.display}>
      <div class="track-contentContainer columns">
        <div class="column is-6 is-hidden-mobile">
          <div class="track-mainImage">
            <img src={props.image} alt={props.header} />
          </div>
        </div>
        <div class="column is-6">
          <div class="track-infoRows">
            <div class="track-textHeader">{props.header}</div>
            <div class="track-rectangle" style={props.rectangleStyling}></div>
            <img
              class="track-mobileImage is-hidden-tablet"
              src={props.image}
              alt={props.header}
            />
            <div class="track-textExplanation">{props.text}</div>
            <div
              class="track-button"
              style={props.buttonStyling}
              onClick={(e) => {
                props.handlePageIndex(-1);
                props.handleRiverDisplay({ visibility: "visible" });
                scrollTop(true);
              }}
            >
              Back
            </div>
          </div>
        </div>
      </div>
      <div class="track-diamondContainer">
        <span class="track-firstDiamond" style={props.diamondIndex ===0 ?  {background:"#A491DD"} : {background: 'white'}}></span>
        <span class="track-secondDiamond" style={props.diamondIndex ===1 ?  {background:"#48A7A1"} : {background: 'white'}}></span>
        <span class="track-thirdDiamond" style={props.diamondIndex ===2 ?  {background:"#EF798A"} : {background: 'white'}}></span>
        <span class="track-fourthDiamond" style={props.diamondIndex ===3 ?  {background:"#EBC644"} : {background: 'white'}}></span>
      </div>
    </div>
  );
}

const Tracks = () => {
  const info = [
    {
      image: scales,
      header: "Inequality",
      text: "The Inequality track targets problems regarding both social and economic inequality. Whether it is creating solutions to bridge the income gap, or finding ways to reduce disparities in gender or race, this track is built on the principle that everyone should have the capacity to reach their full potential.",
      rectangleStyling: { background: "rgba(210, 212, 248, 0.25)" },
      buttonStyling: { background: "rgba(210, 212, 248, 0.8)" },
    },
    {
      image: flowers,
      header: "Environment",
      text: "The Energy and Environment track encompasses a technical perspective to deal with large issues impacting energy use, allocation and environmental regulations. This track has many applications, including machine learning for resource extraction, the use of green energy and enforcing environmental policy.",
      rectangleStyling: {
        background: "rgba(170, 219, 183, 0.25)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      buttonStyling: { background: "rgba(170, 219, 183, 0.6)" },
    },
    {
      image: heart,
      header: "Health",
      text: "The Health track allows hackers to work with various kinds of health related data, as well as connect with mentors from the intersection of health and technology. More than ever, technology today is in a prime position to improve the quality, efficiency, and accessibility of health care.",
      rectangleStyling: { background: "rgba(251, 230, 220, 0.6)" },
      buttonStyling: { background: "#FBE6DC" },
    },
    {
      image: lightbulb,
      header: "Education",
      text: "The Education track pairs hackers with educators, reaching out to all levels of subjects and skills. In addition to HackDuke sponsored Education events, projects aim to increase visibility of technology and to introduce basic skills to the public.",
      rectangleStyling: { background: "rgba(246, 228, 161, 0.25)" },
      buttonStyling: { background: "rgba(246, 228, 161, 0.8)" },
    },
  ];

  // riverDisplay is whether the river background should currently be visible or not
  const [riverDisplay, setRiverDisplay] = useState({ visibility: "visible" });

  // pageIndex corresponds to which tracks page in the "info" above should currently be displayed, -1 if none
  const [pageIndex, setPageIndex] = useState(-1);

  return (
    <div id="tracks" class="track">
      <div class="track-title">Tracks</div>
      <MainTracks
        display={riverDisplay}
        handleRiverDisplay={setRiverDisplay}
        handlePageIndex={setPageIndex}
      />
      {info.map((e, index) => {
        const displayPage =
          pageIndex === index ? { display: "flex" } : { display: "none" };
        return (
          <div class="track-page">
            <Page
              key={e}
              image={e.image}
              header={e.header}
              text={e.text}
              rectangleStyling={e.rectangleStyling}
              buttonStyling={e.buttonStyling}
              display={displayPage}
              handleRiverDisplay={setRiverDisplay}
              handlePageIndex={setPageIndex}
              diamondIndex={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tracks;
