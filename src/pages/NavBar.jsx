import React from "react";
import "./NavBar.css";
import { Search, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {   // keep consistent with App.jsx
  return (
    <header className="navbar">
      <div className="top-bar">
        Call us on <a href="tel:08043628277">08043628277</a> for Service & Installation & Call us on{" "}
        <a href="tel:08043628278">08043628278</a> for Product Enquiry.
      </div>

      <nav className="nav-main">
        <div className="logo">
          <span className="logo-text">WOW</span>
      
          <div className="logo-sub">APPLIANCES</div>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chimneys">Chimneys</Link></li>
          <li><Link to="/hobtops">Hobtops</Link></li>
          <li><Link to="/cube-chimney">Cube Chimney</Link></li>
          <li><Link to="/stores">Find a Store</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>

        <div className="nav-icons">
          <Search size={18} className="icon" />
          <User size={18} className="icon" />
          <div className="cart">
            <ShoppingBag size={18} className="icon" />
            <span className="cart-count">1</span>
          </div>
        </div>
      </nav>
    </header>
  );
}


