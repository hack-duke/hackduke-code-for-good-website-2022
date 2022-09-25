import React from "react";
import "./Sponsors.css";

import flowers from "../../assets/Sponsors/flowers.svg";

const lineage = {
  img: "lineage.svg",
  link: "https://www.lineagelogistics.com/",
};
const js = { img: "js.png", link: "https://www.janestreet.com/" };
const microsoft = {
  img: "microsoft.png",
  link: "https://www.microsoft.com/en-us/",
};
const citadel = { img: "citadel.svg", link: "https://www.citadel.com/" };
const hrt = { img: "hrt.svg", link: "https://www.hudsonrivertrading.com/" };
const imc = { img: "imc.svg", link: "https://www.imc.com/us/" };
const iid = { img: "iid.png", link: "https://bigdata.duke.edu/" };
const cs = { img: "cs.png", link: "https://cs.duke.edu/" };
const mems = { img: "mems.svg", link: "https://mems.duke.edu/" };

const Sponsors = () => {
  const getSponsorContent = (sponsor) => {
    return (
      <div className={"sponsors-col"}>
        <a href={sponsor.link} target={"_blank"}>
          <img
            className={"sponsors-img"}
            src={`/sponsors/${sponsor.img}`}
            alt={sponsor.img}
          />
        </a>
      </div>
    );
  };
  return (
      <div id = "Sponsors" className="sponsors-container">
        <h2>Sponsors</h2>
        <div className={"sponsors-row"}>
          {getSponsorContent(lineage)}
          {getSponsorContent(microsoft)}
          {getSponsorContent(js)}
        </div>
        <div className={"sponsors-row"}>
          {getSponsorContent(imc)}
          {getSponsorContent(hrt)}
          {getSponsorContent(citadel)}
        </div>
        <div className={"sponsors-row"}>
          {getSponsorContent(iid)}
          {getSponsorContent(mems)}
          {getSponsorContent(cs)}
        </div>
        <img id={"footer_flowers"} src={flowers} alt={"Flowers"}></img>
      </div>
  );
};

export default Sponsors;
