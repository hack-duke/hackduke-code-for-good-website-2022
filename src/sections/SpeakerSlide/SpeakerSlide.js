import React from "react";
import SwiperCore, { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SpeakerSlide.css";

import neetu from "../../assets/Speakers/neetu.png";
import saleem from "../../assets/Speakers/saleem.png";
import jash from "../../assets/Speakers/jash.png";
// import anni from "../../assets/Speakers/anni.png";
// import "../../assets/Speakers";
// import "../../assets/Speakers";

// import Swiper from 'swiper';

SwiperCore.use([A11y, Autoplay]);

const speakers = [
  {
    src: neetu,
    name: "Neetu Rajpal",
    title: "CTO @ Oscar Health",
  },
  {
    src: saleem,
    name: "Saleem Hussain",
    title: "Director of Growth Investments @ IBM Worldwide Systems",
  },
  {
    src: jash,
    name: "Jash Vora",
    title: "Technical PM @ Lineage Logistics",
  },
  // {
  //   src: anni,
  //   name: "Anni Yan",
  //   title: "IT Analyst @ Duke University",
  // },
  // {
  //   src: "temp.png",
  //   name: "Zhichao Han",
  //   title: "CTO @ Patient Partner",
  // },
  // {
  //   src: "andrew.png",
  //   name: "Andrew First",
  //   title: "Co-Founder/CTO @ Plannery",
  // },
  // {
  //   src: "temp.png",
  //   name: "Dominick Lim",
  //   title: "Founding Engineer @ Maven",
  // },
];

function SpeakerSlider() {
  return (
    <Swiper
      updateOnWindowResize
      autoplay={{ delay: 3000 }}
      speed={1000}
      slidesPerView={2}
      spaceBetween={30}
      breakpoints={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1260: { slidesPerView: 4 },
        1600: { slidesPerView: 4 },
      }}
      loop
    >
      {speakers.map((block) => (
        <SwiperSlide key={block.name}>
          <div className={"speaker-container"}>
            <div className={"speaker-imagebox"}>
              <img
                className={"speaker-image"}
                src={`speakers/${block.src}`}
                alt=""
              />
            </div>
            <div className={"speaker-textbox"}>
              <h1 className={"speaker-name"}>{block.name}</h1>
              <p className={"speaker-title"}>{block.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SpeakerSlider;
