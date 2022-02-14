import React from 'react';
import Image from '../Components/Images2/ger-r.png';
import Image2 from '../Components/Images2/gizr.png';
import Image3 from '../Components/Images2/lag-r.png';
import Slide1 from '../Components/Images2/Tac.png';
import Slide2 from '../Components/Images2/dan.png';
import Slide3 from '../Components/Images2/ladiez.png';
import Slide4 from '../Components/Images2/Ay.png';
import Slide5 from '../Components/Images2/pix.png';
import Slide6 from '../Components/Images2/Snap.png';
import Slide7 from '../Components/Images2/DevsK.png';
import Slide8 from '../Components/Images2/grp.png';



const Home =()=> {


    return(
        <>
	{/* <!--Header--> */}
	<div className="header" id="home">
  
  {/* <div className="top-bar">
    <div className="container-fluid">
      <div className="header-nav">
        <nav className="navbar navbar-default">
       
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
         <h1><a className="navbar-brand" href="#"><img src={Image3} alt="NGC" className="img-responsive"/></a></h1> 
          </div>
         
          <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
            <nav className="cl-effect-15" id="cl-effect-15">
              <ul>
                <li><a href="#home" ><img src={Image} alt="NGC" className="img-responsive"/></a></li>
                <li><a href="#about" ><img src={Image2} alt="NGC" className="img-responsive"/></a></li>
                <li><a href="#services"><img src={Image3} alt="NGC" className="img-responsive"/></a></li>
    
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  </div>
  */}
 
  <div className="slider">
    <div className="callbacks_container">
      <ul className="rslides" id="slider">

        {/* First Slide */}
        <li>
          <div className="slider-img slider-img1 ">
          <img src={Slide1} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos " />
            <img src={Image2} alt="Giz"  />
            <img src={Image} alt="NGC"/>
            </div>
          </div>
        </li>
        {/* End First Slide */}

        <li>
          <div className="slider-img slider-img2">
          <img src={Slide2} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos " className="img-responsive"/>
            <img src={Image2} alt="Giz"  className="img-responsive"/>
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>

        <li>
          <div className="slider-img slider-img3">
          <img src={Slide3} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos" className="img-responsive" />
            <img src={Image2} alt="Giz" className="img-responsive" />
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>

        <li>
          <div className="slider-img slider-img4">
          <img src={Slide4} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos " className="img-responsive"/>
            <img src={Image2} alt="Giz"  className="img-responsive"/>
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>

        <li>
          <div className="slider-img slider-img5">
          <img src={Slide5} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos " className="img-responsive" />
            <img src={Image2} alt="Giz"  className="img-responsive"/>
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>

        <li>
          <div className="slider-img slider-img6">
          <img src={Slide6} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos" className="img-responsive" />
            <img src={Image2} alt="Giz" className="img-responsive" />
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>

        <li>
          <div className="slider-img slider-img7">
          <img src={Slide7} alt=" " className="img-responsive" />
          </div>
          <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos" className="img-responsive" />
            <img src={Image2} alt="Giz" className="img-responsive" />
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>

        <li>
          <div className="slider-img slider-img8">
          <img src={Slide8} alt=" " className="img-responsive" />
          </div>
         <div className="slider-info">
            <h3>WEB DEVELOPMENT TRAINING</h3>
            <div className="disrow">
            <img src={Image3} alt="Lagos "className="img-responsive" />
            <img src={Image2} alt="Giz" className="img-responsive" />
            <img src={Image} alt="NGC" className="img-responsive"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
   
  </div>
 
 

 
  


</div>
        
        </>
       
      );
    

}
export default Home;

