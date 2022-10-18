import React from 'react';
import './Speakers.css';
// import SpeakerSlide from "../SpeakerSlide/SpeakerSlide.js";
import neetu from "../../assets/Speakers/neetu.png";
import saleem from "../../assets/Speakers/saleem.png";
import jash from "../../assets/Speakers/jash.png";
import anni from "../../assets/Speakers/anni.png";
import zhichao from "../../assets/Speakers/zhichao.png";
import andrew from "../../assets/Speakers/andrew.png";
import liz from "../../assets/Speakers/liz.png";
import larae from "../../assets/Speakers/larae.png";
import pete from "../../assets/Speakers/pete.png";
import julie from "../../assets/Speakers/julie.png";
import tobi from "../../assets/Speakers/tobi.png";
import briana from "../../assets/Speakers/briana.png";

// {
//     src: neetu,
//     name: "Neetu Rajpal",
//     title: "CTO @ Oscar Health",
//   },
//   {
//     src: saleem,
//     name: "Saleem Hussain",
//     title: "Director of Growth Investments @ IBM Worldwide Systems",
//   },
//   {
//     src: jash,
//     name: "Jash Vora",
//     title: "Technical PM @ Lineage Logistics",
//   },

const Speakers = () => {
	return(
        <div id="speakers" className="speakers">
            <h2>Speakers</h2>
            <p id='speakers-blurb'>HackDuke brings in industry leaders, startup founders, and other impressive humans for talks and workshops. Learn, grow, and get inspired.</p>
            <div className="speaker-info-container">
                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={neetu} alt="neetu-pic" className="" />    
                    </div>
                    <h4>Neetu Rajpal</h4>
                    <p className="speaker-description">CTO @ Oscar Health</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={saleem} alt="saleem-pic" className="" />    
                    </div>
                    <h4>Saleem Hussain</h4>
                    <p className="speaker-description">Director of Growth Investments @ IBM Worldwide Systems</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={jash} alt="jash-pic" className="" />    
                    </div>
                    <h4>Jash Vora</h4>
                    <p className="speaker-description">Technical PM @ Lineage Logistics</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={anni} alt="" className="" />    
                    </div>
                    <h4>Anni Yan</h4>
                    <p className="speaker-description">IT Analyst @ Duke University</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={zhichao} alt="zhichao-pic" className="" />    
                    </div>
                    <h4>Zhichao Han</h4>
                    <p className="speaker-description">CTO @ PatientPartner</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={andrew} alt="andrew-pic" className="" />    
                    </div>
                    <h4>Andrew First</h4>
                    <p className="speaker-description">Co-founder @ Plannery</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={liz} alt="liz-pic" className="" />    
                    </div>
                    <h4>Liz Klinger</h4>
                    <p className="speaker-description">CEO & Co-founder @ Lioness</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={larae} alt="larae-pic" className="" />    
                    </div>
                    <h4>LaRae Snoddy</h4>
                    <p className="speaker-description">Director, Student Operations @ Paragon One</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={pete} alt="pete-pic" className="" />    
                    </div>
                    <h4>Pete Andrews</h4>
                    <p className="speaker-description">CEO @ Reconnect</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={julie} alt="julie-pic" className="" />    
                    </div>
                    <h4>Julie Wright</h4>
                    <p className="speaker-description">Research and Communications Manager @ Reconnect</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={tobi} alt="tobi-pic" className="" />    
                    </div>
                    <h4>Tobi Walter</h4>
                    <p className="speaker-description">Principal @ Cofounders Capital</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src={briana} alt="briana-pic" className="" />    
                    </div>
                    <h4>Briana Frank</h4>
                    <p className="speaker-description">VP @ IBM Cloud</p>
                </div>
            </div>
            {/* <SpeakerSlide /> */}
        </div>
        );
};

export default Speakers;