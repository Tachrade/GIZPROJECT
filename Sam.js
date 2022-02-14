import React from 'react';
import sami from '../Components/Images2/sam.jpg';




const Sam =() =>{

    return(
        <>
        <div className="cardhold2">
        <div class="card-container2">
	<span class="pro">PRO</span>
	<img class="round" src={sami} alt="user" />
	<h1>FACILITATOR</h1>
	<br/>
	<p>SAMUEL KELECHI <br/> SOFTWARE DEVELOPER</p>
    <div class="skills">
		<h6>Links</h6>
		<ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f" /></a></li>
              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter" /></a></li>
              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram" /></a></li>
              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin" /></a></li>
     </ul>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
</div>
        </>
    );

}
export default Sam;