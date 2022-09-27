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
					The nation's premier hackathon for tech and social good.
				</h3>
				<div className="red-stripe"></div>
				<p>
					Our mission is to unite passionate students to create meaningful solutions 
					that transform the intention and narrative behind technology. In this 24 hour sprint, 
					you will collaborate with other students, university initiatives, and community organizations.
				</p>
			</div>
			<div className="about-butterfly-right">
				<div className="line-block">
					<svg className="line1" width="1675" height="572" viewBox="0 0 1675 572" fill="none">
						<path className="path1" d="M2 336.301C96.9085 85.804 746.701 -223.144 988.266 244.588C1215.45 684.465 1593.05 580.351 1673.5 490" stroke="#AADBB7" stroke-width="3" stroke-dasharray="25 25"/>
					</svg>
					<svg className="line2" width="1694"  height="788" viewBox="0 0 1694 788" fill="none">
						<path className="path2" d="M1 581.71C148.167 480.71 514.9 291.499 640.5 603.499C740.94 852.999 514.073 828.771 567.5 638.5C645 362.501 878.167 -291.95 1208.5 153.21C1407 420.71 1372.5 873.21 1693 670.21" stroke="#D9E084" stroke-width="3" stroke-dasharray="25 25"/>
					</svg>
				</div>
				<img alt='a green butterfly' className="butterfly4" src={butterfly4} />	
				<img alt='a green butterfly' className="butterfly5" src={butterfly5} />	
			</div>
			<div className="about-butterfly-left">
				<img alt='a green butterfly' className="butterfly6" src={butterfly6} />	
			</div>
			<div className="about-text">
				<h3>
					But, it's not just about building meaningful projects.
				</h3>
				<div className="red-stripe"></div>
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
