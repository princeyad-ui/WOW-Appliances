import React, { useState } from "react";
import "./Home.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";




import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import img7 from "../assets/image7.png";
import img8 from "../assets/image8.png";

const images = [
  {
    src: img1,
    line1: "Orion Android Powered Chimney",
    line2: "WITH A SUCTION CAPACITY OF 1600 CMH"
  },
  {
    src: img2,
    line1: "Asteria Android Powered Chimneys",
    line2: "WITH A SUCTION CAPACITY OF 1408 CMH"
  },
  {
    src: img3,
    line1: "Asteria Android Powered Chimneys",
    line2: "WITH A SUCTION CAPACITY OF 1408 CMH"
  },
  {
    src: img4,
    line1: "3 Burner Dorado Hobtop",
    line2: "WITH A SMART TIMER,FFD & AUTO-IGNITION"
  },
  {
    src: img5,
    line1: "4 Burner Dorado Hobtop",
    line2: "WITH A SMART TIMER,FFD & AUTO-IGNITION"
  },
  {
    src: img6,
    line1: "4 Burner Altair Hobtop",
    line2: "WITH A SMART TIMER,FFD & AUTO-IGNITION"
  },
  {
    src: img7,
    line1: "4 Burner Auriga Cooktop",
    line2: ""
  },
  {
    src: img8,
    line1: " Burner Auriga Cooktop",
    line2: ""
  }
];
const videos = [video1, video2, video3];
const captions = ["Vibe", "Dance", "Relax"];



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home">
      {/* Top text */}
      <p style={{ marginLeft: "65px", fontSize: "65px" }}>
        "Everything You Deserve--
      </p>
      <p style={{ marginLeft: "65px", fontSize: "65px" }}>
        And A Little Extra"
      </p>

      {/* Slider */}
      <div className="slider-container">
        <div className="slide">
  <img
    src={images[currentIndex].src}
    alt=""
    className="slider-image"
  />
 <p className={`caption line1 img${currentIndex + 1}`}>{images[currentIndex].line1}</p>
<p className={`caption line2 img${currentIndex + 1}`}>{images[currentIndex].line2}</p>

</div>

        {/* Wrapper with relative positioning */}
        <div className="slider-wrapper">
          <button className="btn prev" onClick={prevSlide}>
            &lt;
          </button>

          <img
            src={images[currentIndex]}
            alt=""
            className="slider-image"
          />

          <button className="btn next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        
      </div>
       <div className="shop-btn-container">
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="video-section">
        <p> Disconnect From the World;</p>
        <p>Reconnect with Yourself</p>
      </div>
        <div className="video-row">
      {videos.map((vid, index) => (
        <div className="video-container" key={index}>
          <video
            src={vid}
            controls
            className="phone-video"
            autoPlay
            muted
            loop
            playsInline
          />
            <p className="video-caption">{captions[index]}</p>
        </div>
      ))}
    </div>

   




    </div>
  );
};

export default Home;

