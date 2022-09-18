import React from 'react';
import './About.css';


//TODO: Add line1 and line2 SVG over entire page, see figma.

import line1 from "../../assets/About/vector-1.svg";
import line2 from "../../assets/About/vector-2.svg";
import butterfly4 from "../../assets/About/butterfly-4.svg";
import butterfly5 from "../../assets/About/butterfly-5.svg";
import butterfly6 from "../../assets/About/butterfly-6.svg";

const About = () => {
	return(
	<div id="about" className="about">
		<div className="about-grid-container">
			<div className="about-text">
				<h3>
					The nation's premier hackathon for <span>tech and social good.</span>
				</h3>
				<p>
					Our mission is to unite passionate students to create meaningful solutions 
					that transform the intention and narrative behind technology. In this 24 hour sprint, 
					you will collaborate with other students, university initiatives, and community organizations.
				</p>
			</div>
			<div className="about-butterfly-right">
				<img alt='a green butterfly' className="butterfly4" src={butterfly4} />	
				<img alt='a green butterfly' className="butterfly5" src={butterfly5} />	
			</div>
			<div className="about-butterfly-left">
				<img alt='a green butterfly' className="butterfly6" src={butterfly6} />	
			</div>
			<div className="about-text">
				<h3>
					But, it's not just about building  <span>meaningful projects.</span>
				</h3>
				<p>
					It's also an open forum to discuss, share and bring to life ideas that aim to make a 
					positive impact on social issues. Look forward to working with experts from non-profits 
					and coding alongside mentors from our tech sponsors!
				</p>
			</div>
		</div>
	</div>
	);
};    

export default About;
