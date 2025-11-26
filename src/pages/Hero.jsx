
import React from "react";
import "./Hero.css"; 
import HeroVideo from "../assets/hero-video.mp4";

export default function Hero() {
  return (
    <div className="hero">
         <video className="hero-video" autoPlay loop muted>
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
        
      </video>
      <div className="hero-content">
        <h1>Step into a Kitchen <br /> Where Life Unfolds</h1>
        <p>It's where Stories Simmer and every meal prep becomes a moment.</p>
      </div>
    </div>
  );
}
