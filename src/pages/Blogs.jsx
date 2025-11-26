
import React, { useEffect, useState } from "react";
import "./Blogs.css";

import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";
import slider7 from "../assets/slider7.png";
import slider8 from "../assets/slider8.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";


const Blogs = () => {

    const slides = [
    {
      img: slider1,
      title: "How to Choose the Best Chimney Brand for Your Home",
      text: "Choosing the right kitchen chimney transforms your cooking experience and protects your home from smoke, grease, and odors. With countless options flooding the market, finding the best chimney brand for your specific needs can feel overwhelming.",
    },
    {
      img: slider2,
      title: "How to Find the Best Kitchen Chimney Shop Near Me",
      text: "Finding the right kitchen chimney shop near me can transform your cooking experience and keep your kitchen fresh and clean.",
    },
    {
      img: slider3,
      title: "How to Choose the Perfect Hob and Chimney for Your Kitchen",
      text: "A well-designed kitchen requires the perfect balance of functionality and style. Your choice of hob and chimney plays a crucial role in creating an efficient cooking space that complements your modern kitchen design.",
    },
    {
      img: slider4,
      title: "Why a Slant Kitchen Chimney is a Must-Have for Your Modern and Sophisticated Cooking Space",
      text: "The kitchen is the heart of any home, and in today's world, it's not just about functionality—it's about style too. Enter the slant kitchen chimney, a perfect blend of form and function that's revolutionizing modern cooking spaces.",
    },
    {
      img: slider5,
      title: "What is a Ductless Kitchen Chimney and Why Do You Need One?",
      text: "Kitchen design has come a long way in recent years. Smart homeowners now seek appliances that blend style with function. Among these innovations, the ductless kitchen chimney stands out as a game-changer.",
    },
    {
      img: slider6,
      title: "Master Space-Saving Kitchen Appliances in 5 Steps",
      text: "Modern kitchens face a universal challenge: maximizing functionality while maintaining a clean, uncluttered aesthetic. Space-saving kitchen appliances have become essential for homeowners who want both convenience and style.",
    },
    {
      img: slider7,
      title: "Master Gas Hob Cooking: A Step-by-Step Guide",
      text: "Gas hobs have become the heart of modern kitchens, offering precise control and efficient cooking for busy households. Whether you're a seasoned home cook or just starting your culinary journey, mastering your gas hob opens doors to countless delicious possibilities.",
    },
    {
      img: slider8,
      title: "Space-Saving Cooktop Tutorial: Maximize Your Kitchen",
      text: "Small kitchens present unique challenges. Limited counter space makes cooking difficult. But the right cooking surface can transform your tiny kitchen into a functional culinary workspace.",
    },
  ];

   const items = [
    {
      img: slider1,
      title: "How to Choose the Best Chimney Brand for Your...",
      desc: "Choosing the right kitchen chimney transforms your...",
    },
    {
      img: slider2,
      title: "How to Find the Best Kitchen Chimney Shop...",
      desc: "Finding the right kitchen chimney shop near me can...",
    },
    {
      img: slider3,
      title: "How to choose the perfect hob and chimney...",
      desc: "A well-designed kitchen require a perfect balance of...",
    },
    {
      img: slider4,
      title: "Why a slant kitchen chimney is a must-have...",
      desc: "The kitchen is a heart of any home , and in today's world it's...",
    },
    {
      img: slider5,
      title: "What is a Ductless kitchen chimney and ...",
      desc: "Kitchen design has come a long way in recent years years. smart...",
    },
    {
      img: slider6,
      title: "Master-Space saving kitchen Appliances in 5...",
      desc: "Modern kitchens face a universal challenges: Maximizing...",
    },
    {
      img: slider7,
      title: "Master gas hob cooking : A step-by-step guide...",
      desc: "Gas hobs has become the heart of modern kitchens,...",
    },
    {
      img: slider8,
      title: "Space-saving cooktoptutorial: Maximize your...",
      desc: "Samll kitchen present unique challenges. Limited counter...",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // auto slide every 4s
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="blog-section">
     <div className="blog-container">
      {/* Left Side - Categories */}
      <div className="categories">
        <h2>CATEGORIES</h2>
        <ul>
          <li>Compact & Modern Design</li>
          <li>Healthy Kitchen Living</li>
          <li>Smart & Efficient Cooking</li>
        </ul>
      </div>

      {/* Middle - Slider */}
      <div className="slider-section">
        <h2>LATEST BLOGS</h2>
        <div className="slider1">
          <img src={slides[current].img} alt="Slide" />
          <div className="slide-text">
            <h3>{slides[current].title}</h3>
            <p>{slides[current].text}</p>
          </div>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={index === current ? "dot active" : "dot"}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Related Products */}
      <div className="related-products">
        <h2>RELATED PRODUCTS</h2>
        <div className="product-list">
          <div className="product">
           <img src={product1} alt="Arista Chimney" />

            <p>Arista Chimney</p>
            <span>₹13999</span>
            <a href="#">Shop Now ›</a>
          </div>
          <div className="product">
            <img src={product2} alt="Orion Chimney" />
            <p>Orion Chimney</p>
            <span>₹26998</span>
            <a href="#">Shop Now ›</a>
          </div>
          <div className="product">
            <img src={product3} alt="Asteria Chimney" />
            <p>Asteria Chimney</p>
            <span>₹17999</span>
            <a href="#">Shop Now ›</a>
          </div>
          <div className="product">
            <img src={product4} alt="Dorado Hobtop" />
            <p>Dorado Hobtop</p>
            <span>₹13999</span>
            <a href="#">Shop Now ›</a>
          </div>
          
        </div>
      </div>
    </div>
      <div className="modern-section">
      <h2 className="modern-title">Compact & Modern Design</h2>
      <div className="modern-grid">
        {items.map((item, index) => (
          <div className="modern-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="modern-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#" className="read-more">
                READ MORE <span>›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
 
  )
}

export default Blogs