import {useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./works.scss";
function Works() {

    const [slide, setSlide] = useState(0)
    const handleClick = (direction) => {
        direction === "left" ?  setSlide(slide > 0 ? slide - 1 : 2 ) 
        : setSlide(slide < data.length - 1 ? slide + 1 : 0)
    }
   

 
    const data = [
        {
          id: 1,
          icon: "./assets/globe.png",
          title: "Porfolio Website",
          desc:
            "Technology Used :Reactjs,sass",
          img:
            "./assets/portfolio.png",
            link : 'https://portfolio-seven-ebon-38.vercel.app/'
        },
        {
          id: 2,
          icon: "./assets/globe.png",
          title: "Netlix Clone",
          desc:
          "Technology Used : Reactjs,Redux,npm,sass,Firebase-auth,IMDB API",
          img:
            "./assets/netflix.png",
            link : 'https://netflix-build-clone-6a7cb.web.app/'

        },
        {
          id: 3,
          icon: "./assets/globe.png",
          title: "Airbnb Clone",
          desc:
            "Technology Used : Reactjs,Nextjs,npm,Tailwindcss,Mapbox",
          img:
            "./assets/airbnb.png",
            link : 'https://airbnb-react-ten.vercel.app/'
        },
      ];
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform : `translateX(-${slide *100}vw)`}}>
        {data.map(d => (
               <div className="container" key={d.id}>
               <div className="item">
                 <div className="left">
                   <div className="leftContainer">
                     <div className="imgContainer">
                       <img src={d.icon} alt="" />
                     </div>
                     <h1>{d.title}</h1>
                     <p>
                       {d.desc}
                     </p>
                     <span><a href={d.link} rel="noreferrer" target="_blank">Link ➡️</a></span>
                   </div>
                 </div>
                 <div className="right" >
                 <img
                       src={d.img}
                       alt=""
                     />
                 </div>
               </div>
             </div>
         ))} 


      </div>
      <ArrowForwardIosIcon  className="arrow left" onClick={()=>handleClick('left')}/>
      <ArrowForwardIosIcon  className="arrow right" onClick={()=>handleClick('right')}/>

      {/* <img src="assets/arrow.png" alt="" className="arrow left" />
      <img src="assets/arrow.png" alt="" className="arrow right" /> */}
    </div>
  );
}

export default Works;
