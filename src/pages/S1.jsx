
import React, { useState, useEffect } from "react";

import "./S1.css";
import slider1 from "../assets/slider1.png";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import product2 from "../assets/product2.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";
import slider7 from "../assets/slider7.png";
import slider8 from "../assets/slider8.png";

const S1 = () => {
  const data = [
    {
      img: slider2,
      title: "How to Find the Best Kitchen Chimney Shop Near You",
    },
    {
      img: slider3,
      title: "How to Choose the Perfect Hob and Chimney for Your Kitchen",
    },
    {
      img: slider4,
      title: "Why a Slant Kitchen Chimney is a Must-Have for Modern Homes",
    },
    {
      img: slider5,
      title: "What is a Ductless Kitchen Chimney and Why Do You Need One?",
    },
    {
      img: slider6,
      title: "Master-space saving kitchen appliances in 5 steps ",
    },
    {
      img: slider7,
      title: "Master gas hob cooking: step-by-step guide",
    },
    {
      img: slider8,
      title: "Space saving cooktop tutorial:Maximize your..",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
    useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);


  return (
    <div className="s1-section">
      <div className="motu">
        <h1>How to Choose the Best Chimney Brand for Your Home</h1>
        <img src={slider1} alt="Hyderabad Banner" />
      </div>

      <div className="chimney-container1">
        <div className="chimney-content1">
          <p>
            Choosing the right kitchen <span>chimney</span> transforms your
            cooking experience and protects your home from smoke, grease, and
            odors. With countless options flooding the market, finding the{" "}
            <strong>best chimney brand</strong> for your specific needs can feel
            overwhelming. Modern kitchens demand appliances that blend
            functionality with style, making it crucial to understand what
            separates average chimneys from exceptional ones. The right choice
            ensures years of reliable performance, energy efficiency, and
            seamless integration with your kitchen's design. Whether you're
            renovating or building new, your <span>chimney</span> selection
            impacts daily comfort and long-term satisfaction.
          </p>

          <h2>Understanding Modern Chimney Design</h2>
          <p>
            Today’s chimney technology has evolved far beyond basic smoke
            extraction. <strong>Modern chimney design</strong> emphasizes both
            performance and aesthetics, creating appliances that serve as
            functional kitchen centerpieces. Contemporary homes benefit from
            sleek profiles, advanced filtration systems, and smart technology
            integration that previous generations couldn't imagine.
          </p>

          <h3>Compact Chimney Options for Space-Saving</h3>
          <p>
            <strong>Compact chimney options</strong> revolutionize small kitchen
            layouts without compromising performance. These space-efficient
            models deliver powerful suction in minimal footprints, perfect for
            urban apartments and cozy homes. T-shaped and curved designs
            maximize efficiency while maintaining elegant proportions that
            complement modern kitchen aesthetics.
          </p>

          <h3>Sleek Chimney Styles for Contemporary Homes</h3>
          <p>
            Sleek chimney styles feature clean lines, premium materials, and
            sophisticated finishes that enhance kitchen appeal. Stainless steel
            surfaces, tempered glass panels, and LED accent lighting create
            striking visual elements. These designs seamlessly blend with
            contemporary cabinetry while providing exceptional functionality
            that matches their stunning appearance.
          </p>
        </div>

        <div className="chimney-card1">
          <img src={w1} alt="Cube Chimney" />
          <h3>Cube Chimney</h3>
          <p className="price">
            ₹9,999 <span>₹25,500</span>
          </p>

          <select>
            <option>Black</option>
          </select>

          <button className="out-btn">
            <i className="fa-solid fa-box"></i> Out of Stock
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="chimney-feature-container">
        <div className="chimney-feature-content">
          <p>
            Suction capacity, measured in cubic meters per hour, determines how
            effectively your chimney removes smoke and odors. Higher suction
            ratings handle heavy cooking loads better, especially for Indian
            cuisine requiring extensive oil use. Consider your cooking frequency
            and preferred methods when evaluating suction requirements.
          </p>

          <h3>Noise Levels and Operation</h3>
          <p>
            Quiet operation enhances kitchen comfort, particularly in open-plan
            homes where noise travels easily. Quality motors and sound-dampening
            materials reduce operational noise significantly. Look for chimneys
            specifying decibel levels, with quieter models operating below 55 dB
            at maximum speed.
          </p>

          <h3>Energy Efficiency Standards</h3>
          <p>
            Energy-efficient models reduce electricity consumption while
            maintaining excellent performance. LED lighting, efficient motors,
            and smart controls contribute to lower operating costs. Higher
            initial investments in efficient models typically pay dividends
            through reduced utility bills over time.
          </p>

          <h3>Maintenance and Cleaning Requirements</h3>
          <p>
            Easy maintenance extends chimney lifespan and ensures consistent
            performance. Dishwasher-safe filters, removable components, and
            auto-clean functions simplify upkeep. Consider maintenance
            complexity when comparing models, as simpler cleaning processes
            encourage regular maintenance.
          </p>

          <h2>High-Performance Chimney Systems Features</h2>
          <p>
            <strong>High-performance chimney systems</strong> incorporate
            advanced technologies that distinguish premium models from basic
            alternatives. These features enhance user experience, improve
            efficiency, and provide long-term reliability that justifies higher
            purchase prices. Understanding available technologies helps identify
            models offering genuine value propositions.
          </p>
        </div>

        <div className="chimney-feature-card">
          <img src={w2} alt="Asteria Chimney" />
          <h3>Asteria Chimney</h3>
          <p className="price">
            ₹16,499 <span>₹29,999</span>
          </p>

          <select>
            <option>60cm</option>
          </select>

          <button className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i> Add To Cart
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="chimney-feature-container">
        <div className="chimney-feature-content">
          <p>
            Suction capacity, measured in cubic meters per hour, determines how
            effectively your chimney removes smoke and odors. Higher suction
            ratings handle heavy cooking loads better, especially for Indian
            cuisine requiring extensive oil use. Consider your cooking frequency
            and preferred methods when evaluating suction requirements.
          </p>

          <h3>Noise Levels and Operation</h3>
          <p>
            Quiet operation enhances kitchen comfort, particularly in open-plan
            homes where noise travels easily. Quality motors and sound-dampening
            materials reduce operational noise significantly. Look for chimneys
            specifying decibel levels, with quieter models operating below 55 dB
            at maximum speed.
          </p>

          <h3>Energy Efficiency Standards</h3>
          <p>
            Energy-efficient models reduce electricity consumption while
            maintaining excellent performance. LED lighting, efficient motors,
            and smart controls contribute to lower operating costs. Higher
            initial investments in efficient models typically pay dividends
            through reduced utility bills over time.
          </p>

          <h3>Maintenance and Cleaning Requirements</h3>
          <p>
            Easy maintenance extends chimney lifespan and ensures consistent
            performance. Dishwasher-safe filters, removable components, and
            auto-clean functions simplify upkeep. Consider maintenance
            complexity when comparing models, as simpler cleaning processes
            encourage regular maintenance.
          </p>

          <h2>High-Performance Chimney Systems Features</h2>
          <p>
            <strong>High-performance chimney systems</strong> incorporate
            advanced technologies that distinguish premium models from basic
            alternatives. These features enhance user experience, improve
            efficiency, and provide long-term reliability that justifies higher
            purchase prices. Understanding available technologies helps identify
            models offering genuine value propositions.
          </p>
        </div>

        <div className="chimney-feature-card">
          <img src={w3} alt="Asteria Chimney" />
          <h3>Elara Chimney</h3>
          <p className="price">
            ₹14,499 <span>₹37,990</span>
          </p>

          <select>
            <option>90cm</option>
          </select>

          <button className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i> Add To Cart
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="chimney-feature-container">
        <div className="chimney-feature-content">
          <p>
            Suction capacity, measured in cubic meters per hour, determines how
            effectively your chimney removes smoke and odors. Higher suction
            ratings handle heavy cooking loads better, especially for Indian
            cuisine requiring extensive oil use. Consider your cooking frequency
            and preferred methods when evaluating suction requirements.
          </p>

          <h3>Noise Levels and Operation</h3>
          <p>
            Quiet operation enhances kitchen comfort, particularly in open-plan
            homes where noise travels easily. Quality motors and sound-dampening
            materials reduce operational noise significantly. Look for chimneys
            specifying decibel levels, with quieter models operating below 55 dB
            at maximum speed.
          </p>

          <h3>Energy Efficiency Standards</h3>
          <p>
            Energy-efficient models reduce electricity consumption while
            maintaining excellent performance. LED lighting, efficient motors,
            and smart controls contribute to lower operating costs. Higher
            initial investments in efficient models typically pay dividends
            through reduced utility bills over time.
          </p>

          <h3>Maintenance and Cleaning Requirements</h3>
          <p>
            Easy maintenance extends chimney lifespan and ensures consistent
            performance. Dishwasher-safe filters, removable components, and
            auto-clean functions simplify upkeep. Consider maintenance
            complexity when comparing models, as simpler cleaning processes
            encourage regular maintenance.
          </p>

          <h2>High-Performance Chimney Systems Features</h2>
          <p>
            <strong>High-performance chimney systems</strong> incorporate
            advanced technologies that distinguish premium models from basic
            alternatives. These features enhance user experience, improve
            efficiency, and provide long-term reliability that justifies higher
            purchase prices. Understanding available technologies helps identify
            models offering genuine value propositions.
          </p>
        </div>

        <div className="chimney-feature-card">
          <img src={product2} alt="Asteria Chimney" />
          <h3>Orion Chimney</h3>
          <p className="price">
            ₹26,999 <span>₹39,999</span>
          </p>

          <button className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i> Add To Cart
          </button>
        </div>
      </div>

      {/* Suggested Slider */}
      <div className="suggested-section">
        <h2>Suggested for you</h2>

        <div className="slider-container2">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>

      <div
        className="slider2"
        style={{
          transform: `translateX(-${index * 270}px)`, // 270px = card width + gap
        }}
      >
        {data.map((item, i) => (
          <div key={i} className="card">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
      </div>
    </div>
  );
};

export default S1;
