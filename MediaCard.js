import React,{useState} from 'react';



import Avatar from '../Components/Images2/Tee.jpeg';
import Avatar1 from '../Components/Images2/king.jpeg';
import Avatar2 from '../Components/Images2/Sod.jpeg';
import Avatar3 from '../Components/Images2/Solo.jpeg';
import Avatar4 from '../Components/Images2/Tai.jpeg';
import Avatar5 from '../Components/Images2/usher.jpeg';
import Avatar6 from '../Components/Images2/smile.jpeg';
import Avatar7 from '../Components/Images2/ola.jpeg';
import Avatar8 from '../Components/Images2/Mr.jpeg';
import Avatar9 from '../Components/Images2/imo.jpeg';
import Avatar10 from '../Components/Images2/profile.jpg';
import Avatar11 from '../Components/Images2/Eni.jpeg';


export default function MediaCard() {


  const[myData] = useState([
    {
      id:1,
      name:"Adesokan Taiwo Adeola",
      remark:"It's gladen my heart like honey to be part of this wonderful program with NGC WEB DEVELOPMENTS, Collarboration with GIZ and LOFTYICN, the training was a wonderful experience for me. I was able to develop myself more with React.jS and my Facilitator play an awesome role. Thank You ",
      fb:"https://www.facebook.com/andrew.kings1" ,
      ln:"",
      tw:"",
      Git:"",
      img:Avatar
    },
    {
      id:2,
      name:"Andrew Boytie",
      remark:"It is with  great joy and privilege that I am opportuned to be among other aspiring Devs. who  partook  in the  Web Development training Program,  organised by GIZ & Loftyinc . it has been an intensive 4weeks of drilling,  exercising & educating  of the mind into the world of tech, thanks to our Amiable facilitator,  Big Sam Kelechi who had been so demanding right from  day 1 of the program. with his popular line of quotes DEVELOPERS, WELL YOU WILL GET THERE.. Indeed this has opened  a door of new beginning into the tech world..I want to thank the partners for supporting this program and I pray that their capacity will expand to do more, in providing laptops for interested participants so as to  assist those who are Interested but lack the tools to begun in the nearest future.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar1
    },
    {
      id:3,
      name:"Babalola Taiwo",
      remark:"To me this programme came at the right time, that I had desired to acquire skill in a tech inclined profession. With GIZ Providing me with the opportunity to benefit from the Web Development and coding class.  I do really appreciate and like to commend the protogonist of this great idea, which aimed at youth development and also say a big thank you to Lofty Inc whose immersed contribution has made the programme a success.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar4
    },
    {
      id:4,
      name:"Ayomide Daniel",
      remark:"Thanks to GIZ, Loftynic and LSETF  for the great training course on WEB DEVELOPMENT. Your enthusiasm and humour were very motivational and you've given me a lot to think about. Within this time we learnt a lot from our amiable Facilitor, who is very hardworking and focused on his target. Although web development is complicated but i realiazed the fact that constant practice produces perfection. I would be grateful if we could have this same course training some other time. THANK YOU.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar10
    },
    {
      id:5,
      name:"Alabi-Nafiu Sodiq",
      remark:"I'm thankful for the opportunity  given to me by GIZ,  Loftynic, and LSETF for been a student of WEB DEVELOPMENT. It like a new dawn and I'm happy for the journey  so far.  Make me believe  I could be good at something  if I put my mind and heart to it.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar2
    },
    {
      id:6,
      name:" Olayemi Favour",
      remark:"I'm so blessed to be partake  in this four weeks training on coding and Web development.The training was really educative and an eye-opener to the world of development.Thanks for the free lectures and other benefits attached to it.,am so grateful to giz and lofty inc for the knowledge imparted. Giz...pls, don't stop transforming lives.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar6
    },
    {
      id:7,
      name:"Ajibade Adesola",
      remark:"It was a great privileged to be among the beneficiaries of the GIZ and Loftynic coding and web development empowerment program, An experience I will forever cherish, and will continue to grow. I will not allow this knowledge impart in me to be a waste. Thank you GIZ, Thank you Loftynic for the opportunity, also I don't take your hospitality for granted thank you.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar7
    },
    {
      id:8,
      name:"Shotayo Mutiu",
      remark:"I am glad that I joined GIZ & Loftyinc Web Development training program. Prior to the training program I know nothing about the Web Development, the training session was educative, the four weeks  spent has expose me to the world of developer as  always said by our indefatigable facilitator (Developer)    Although web development is complicated but I realize it's a gradual process for me as a beginner's. Am grateful to the sponsore & the partners for the this wonderful initiative keep on the good Job.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar8
    },
    {
      id:9,
      name:"Erinfolami Solomon",
      remark:"I express whole gratitude to GIZ and lofty Inc for creating a program like this,giving me an opportunity to be a partaker in the Web development program. During these period, I was able to understand a lot of things about the web development. A big thank you to GIZ and partners for this great opportunity.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar3
    },
    {
      id:10,
      name:"Muritala Imoleayo",
      remark:"It a great experience.learning coding is so interesting,tasking ,and so complicated I tried getting over one then boom  I got choked with another.it a great experience  indeed am so glad to be part of the program it a life changing one and a great opportunity to build up a career. Thanks to GIZ  for this great opportunity  and knowledge  imparted on so many lives.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar9
    },
    {
      id:11,
      name:"Tijani Seun Emmanuel",
      remark:"I wish I have the right words to express how delighted I am to be one of the few lucky ones to be selected for this tremendous training program.I'm very grateful to GIZ, Loftynic, and LSETF for bringing one of my anticipated dreams into reality; and also to God Almighty for the gist of life.",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar5
    },
    {
      id:12,
      name:"Makanjuola Enilari",
      remark:"I want say a very big thank you to GIZ and Loftyinc fOr this kind of initiative, it has been an eye-opener and challenging which has been very good because it has made me better in my skills ",
      fb:"",
      ln:"",
      tw:"",
      Git:"",
      img:Avatar11
    }
  ]);

 

    return (
     
      <>
<div className='cardhold'>

  {myData.map((props)=>(
  
  
<>
<div class="card-container">
  <span class="pro">PRO</span>
	<img class="round" src={props.img} alt="user" />
	<h3 style={{color:"black"}}>{props.name}</h3>
  <p style={{color:"black"}}>Remark:{props.remark}</p>
	<p>front-end developer</p>
  <div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
  <div class="skills">
		<h6>Links</h6>
		<ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item m-0"><a href={props.fb}className="social-link" target="_blank"><i className="fa fa-facebook-f" /></a></li>
              <li className="list-inline-item m-0"><a href="#" className="social-link" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li className="list-inline-item m-0"><a href="#" className="social-link" target="_blank"><i className="fa fa-instagram" /></a></li>
              <li className="list-inline-item m-0"><a href="#" className="social-link" target="_blank"><i className="fa fa-linkedin" /></a></li>
     </ul>
	</div>
  </div>
  
  </>
  
  
  ))}

	
	

</div>


<div className="copyright-agile">
	<p>&copy; Group 1 2022 Web Development Training Project</p>
</div>
</>
    );
  }
  
 

  

