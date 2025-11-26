import React from 'react'
import "./Footer1.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer1 = () => {
  return (
      <footer className="footer">
      <div className="footer-top">
        {/* Left - Logo */}
        <div className="logo">
          <span className="logo-text">WOW</span>
          
          <div className="logo-sub">APPLIANCES</div>
        </div>

        {/* Center - Social Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/beyondappliances" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/be_beyondappliances/#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@BeyondAppliances" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/beyond-appliances/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Right - Links */}
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Condition</a>
          <a href="/shipping">Shipping & Delivery Policy</a>
          <a href="/returns">Returns & Refunds</a>
          <a href="/blogs">Blogs</a>
          <a href="/sitemap">Site Map</a>
        </div>
      </div>

      {/* Bottom - Company Info */}
      <div className="footer-bottom">
        <p>© 2025 BYONDNXT SMART HOME PRIVATE LIMITED</p>
        <p>*T&C apply. Images shown here may differ from actual product.</p>
        <p>
          Primarc Pecan Retail Private Limited is the authorized distributor for
          products sold on www.beyondappliances.in
        </p>
        <p>For Product Enquiry - 08043628278</p>
        <p>For Service Enquiry - 08043628277</p>
      </div>
    </footer>
  )
}

export default Footer1