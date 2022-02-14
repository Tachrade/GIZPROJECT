import React from 'react';
import{ Carousel } from 'antd';
import Image from '../Components/images/ger-r.png';
import Image2 from '../Components/images/gizr.png';
import Image3 from '../Components/images/lag-r.png';
import Image4 from '../Components/images/bg-s.svg';
import './Slider2.css';
import './Slider.css';

function Slider() {
  const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
      <>
      
    <div  className='sliderContainer'>
    
    <Carousel autoplay effect='fade'>
    <div className='Slide1' >
         <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>

    <div className='Slide2'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    <div className='Slide3'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    <div className='Slide4'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    <div className='Slide5'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    <div className='Slide6'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    <div className='Slide7'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    <div className='Slide8'>
    <div className='slideA'>
             <p className='Para'>WEB DEVELOPMENT </p>
                 <p className='Para2'>TRAINING</p>
           
              </div>
          <div className='slideB'>
            <img src={Image3} className='Lag' />
            <img src={Image} className='Flag'/>
            <img src={Image2} className='Giz' />
            
          </div>
          <div className='Wave'>
          <img src={Image4} className='wave'/>
          </div>
    </div>
    </Carousel>,
    </div>
    
    </>
  );
}

export default Slider
