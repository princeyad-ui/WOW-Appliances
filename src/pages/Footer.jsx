import React, { useState, useEffect } from "react";

import "./Footer.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";

const slides = [
  {
    img: p1,
    text: "Beyond Appliances Paving The Way For A Rs 100 Cr Smart Kitchen Future",
    link: "https://www.indianretailer.com/interview/retail-people/ecommerce/beyond-appliances-paving-way-rs-100-cr-smart-kitchen-future"
  },
  {
    img: p2,
    text: "Smart Kitchen Appiliance Brand Beyond Appliances Raises $2 Million In Seed Funding ",
    link: "https://www.thehindubusinessline.com/companies/smart-kitchen-appliance-brand-beyond-appliances-raises-2-million-in-seed-funding/article68908664.ece"
  },
  {
    img: p3,
    text: "Firesides Ventures Leads Funding Round For Beyond Appliances",
    link: "https://www.entrepreneur.com/en-in/news-and-trends/fireside-ventures-leads-funding-round-in-beyond-appliances/483404"
  },
  {
    img: p4,
    text: "Smart kithchen Brand Beyond Appliances Nets Funding To Boost Its Tech Stack",
    link: "https://inc42.com/buzz/smart-kitchen-brand-beyond-appliances-nets-funding-to-boost-its-tech-stack/"
  },
  {
    img: p5,
    text: "Beyond Appliances Listed Among Top 30 Startups To Watch In 2025 By Inc42",
    link: "https://inc42.com/startups/30-startups-to-watch-startups-that-caught-our-eyes-in-march-2025/"
  },
  {
    img: p6,
    text: "Beyond Appliances Raises $2 Million In Round Led By Fireside Ventures",
    link: "https://economictimes.indiatimes.com/tech/funding/kitchen-appliance-startup-beyond-appliances-raises-2-million-in-round-led-by-fireside-ventures-others/articleshow/115628762.cms?from=mdr"
  },
  {
    img: p7,
    text: "Zomato Picks Up 8% Stake In Kitchen Appliances Startup Beyondnxt",
    link: "https://economictimes.indiatimes.com/tech/startups/zomato-takes-8-stake-in-kitchen-appliances-startup-byondnxt-for-rs-6000/articleshow/114469034.cms?from=mdr"
  },
  {
    img: p8,
    text: "Confiance Communication Secures PR Mandate For Beyond Appliances",
    link: "https://www.afaqs.com/news/newbizwins/confiance-communications-secures-pr-mandate-for-beyond-appliances-8599403"
  },
  {
    img: p10,
    text: "Beyond Appliances Revolutioning Indian Kitchens With Smart Technology",
    link: "https://www.thehansindia.com/featured/sunday-hans/revolutionising-indian-kitchens-with-smart-technology-956381"
  },
  {
    img: p11,
    text: "Exploring The Future Of Kitchen Technology With Beyond Appliances",
    link: "https://www.businessoffood.in/whats-next-for-smart-kitchens-exploring-the-future-of-kitchen-technology/"
  },
];

const Footer = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className="main-slider">
      <div className="custom-slider-container">
        <button className="custom-btn custom-prev" onClick={prevSlide}>❮</button>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`custom-slide ${index === current ? "custom-active" : ""}`}
          >
            {index === current && (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-card-link"
              >
                <div className="custom-card">
                  <img src={slide.img} alt="slide-img" className="custom-card-img" />
                  <p>{slide.text}</p>
                </div>
              </a>
            )}
          </div>
        ))}

        <button className="custom-btn custom-next" onClick={nextSlide}>❯</button>
      </div>

      
    </div>
  );
};

export default Footer;
