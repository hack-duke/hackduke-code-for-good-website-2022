import React from "react";
import "./Sponsors.css";

import lastyear from "../../assets/Sponsors/lastyear.svg";
import flowers from "../../assets/Sponsors/flowers.svg";

const Sponsors = () => {
  return (
    <div id="sponsors">
      <div className={"sponsors-container"}>
        <img src={lastyear} alt={"Last Year"}></img>
      </div>
      <img id={"footer_flowers"} src={flowers} alt={"Flowers"}></img>
    </div>
  );
};

export default Sponsors;
