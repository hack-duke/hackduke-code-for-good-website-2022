import React from "react";
import SwiperCore, { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SpeakerSlide.css";

// import Swiper from 'swiper';

SwiperCore.use([A11y, Autoplay]);

const speakers = [
  {
    src: "neetu.png",
    name: "Neetu Rajpal",
    title: "CTO @ Oscar Health"
  },
  {
    src: "andrew.png",
    name: "Andrew First",
    title: "Co-Founder/CTO @ Plannery"
  },
  {
    src: "temp.png",
    name: "Zhichao Han",
    title: "CTO @ Patient Partner",
  },
  {
    src: "temp.png",
    name: "Dominick Lim",
    title: "Founding Engineer @ Maven"
  },
  {
    src: "jash.png",
    name: "Jash Vora",
    title: "Technical PM @ Lineage Logistics",
  },
  {
    src: "marcelino.png",
    name: "Marcelino Alvarez",
    title: "CEO @ Photon Marine",
  },
  {
    src: "saleem.png",
    name: "Saleem Hussain",
    title: "Director of Growth Investments @ IBM Worldwide Systems",
  },
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
              <img className={"speaker-image"} src={`speakers/${block.src}`} alt="" />
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
