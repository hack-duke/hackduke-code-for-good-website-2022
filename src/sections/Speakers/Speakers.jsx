import React from 'react';
import './Speakers.css';
import SpeakerSlide from "../SpeakerSlide/SpeakerSlide.js";

const Speakers = () => {
	return(
        <div id="speakers" className="speakers">
            <h2>Speakers</h2>
            <p id='speakers-blurb'>HackDuke brings in industry leaders, startup founders, and other impressive humans for talks and workshops. Learn, grow, and get inspired.</p>
            {/* <div className="speaker-info-container">
                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src="" alt="" className="" />    
                    </div>
                    <h4>Speaker name</h4>
                    <p>description</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src="" alt="" className="" />    
                    </div>
                    <h4>Speaker name</h4>
                    <p>description</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src="" alt="" className="" />    
                    </div>
                    <h4>Speaker name</h4>
                    <p>description</p>
                </div>

                <div className="speaker-info">
                    <div className="speaker-name">
                        <img src="" alt="" className="" />    
                    </div>
                    <h4>Speaker name</h4>
                    <p>description</p>
                </div>
            </div> */}
            <SpeakerSlide />
        </div>
        );
};

export default Speakers;