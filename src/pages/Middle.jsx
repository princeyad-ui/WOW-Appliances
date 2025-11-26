import React, { useState, useEffect } from "react";
import "./Middle.css";

import imgEshwar from "../assets/eshwar.png";
import imgRakesh from "../assets/rakesh.png";
import fireside from "../assets/fireside.png";
import dharana from "../assets/dharana.png";
import zomato from "../assets/zomato.png";
import dosaImg from "../assets/dosa.png";
import chimneyImg from "../assets/arista1.png";
import mixerImg from "../assets/arista2.png";

const Middle = () => {
 const slides = [
  {
    img: dosaImg,
    caption1: "Fully Automatic Dosa Maker",
  },
  {
    img: chimneyImg,
    caption1: "Arista Chimney 90 cm",
  },
  {
    img: mixerImg,
    caption1: "Arista Chimney 60 cm",
  },
];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // 4 sec delay
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };


  return (
    <div className="middle-section">
      {/* Section Title */}
      <div className="section-title">
        <h2>
          Oh, And Have You Said
          <br />
          'Hi' To The Ones Who Built It?
        </h2>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <div className="testimonial-card">
          <div className="testimonial-text">
            <p className="quote">
              The cornerstone of this establishment that manages to float our boat, and keeps giving more and more insights.
            </p>
            <p className="name">Eshwar K Vikas</p>
            <p className="role">Co-Founder & CEO</p>
          </div>
          <div className="testimonial-img">
            <img src={imgEshwar} alt="Eshwar K Vikas" />
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-text">
            <p className="quote">
              The Brainiac, mastermind behind the tech developments with a heart of most human-human.
            </p>
            <p className="name">Rakesh Patil</p>
            <p className="role">Co-Founder & CTO</p>
          </div>
          <div className="testimonial-img">
            <img src={imgRakesh} alt="Rakesh Patil" />
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="trusted-section">
        <h2 className="trusted-heading">
          <p>And A Shoutout To Those Who</p>
          <p>Trusted Us</p>
        </h2>

        <div className="trusted-cards">
          <div className="card1">
            <img src={fireside} alt="Fireside Ventures" className="card1-img" />
            <h3 className="card-title">Fireside Ventures</h3>
            <p className="card-text">
              Investors For Mamaearth, Yoga Bar, Smytten, Happi Planet And Design Café.
            </p>
          </div>

          <div className="card1">
            <img src={dharana} alt="Dharana" className="card1-img" />
            <h3 className="card-title">Dharana</h3>
            <p className="card-text">
              Investors For Urban Company, Zopper, Lentra, And NoBroker.
            </p>
          </div>

          <div className="card1">
            <img src={zomato} alt="Zomato" className="card1-img" />
            <h3 className="card-title">Zomato Limited</h3>
            <p className="card-text">
              Investors For Cultfit, Magicpin, And Mukunda Foods.
            </p>
          </div>
        </div>
      </div>
         <div className="slider-container1">
      <div className="slider-heading">
        <p>What’s Next?</p>
        <p>Come Take A Peek!</p>
      </div>

      <div className="slider">
        <button className="prev-btn" onClick={prevSlide}>❮</button>

     <div className="slider-item">
  <div className="img-wrapper">
    <img src={slides[current].img} alt="product" />
  </div>
  <p className="caption">{slides[current].caption1}</p>
</div>


        <button className="next-btn" onClick={nextSlide}>❯</button>
      </div>
    </div>

     
    </div>
  );
};

export default Middle;

