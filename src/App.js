import React, { useState } from "react";
import ProductCarousel from "./components/ProductCarousel";
import ProductDetails from "./components/ProductDetails";
import OrderSection from "./components/OrderSection";
import BundleSection from "./components/BundleSection";
import ProductSelection from "./components/ProductSelection";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-wrapper">
      <header className="navbar">
        <div className="navbar-row">
          {/* Hamburger for mobile */}
          <button
            className={`navbar-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Desktop Left: Search + Nav */}
          <div className="navbar-left">
            <input
              type="search"
              placeholder="WHICH MANUKA IS FOR ME?"
              className="navbar-searchbox"
            />
            <nav className="navbar-nav desktop">
              <button className="navbar-btn">Shop</button>
              <button className="navbar-btn">Explore</button>
            </nav>
          </div>

          {/* Logo Center */}
          <div className="navbar-logo-center">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Right: Nav + Mobile/Tablet + Desktop Icons */}
          <div className="navbar-right">
            <nav className="navbar-nav desktop">
              <button className="navbar-btn">About</button>
              <button className="navbar-btn">Rewards</button>
              <button className="navbar-btn">Contact</button>
            </nav>
            {/* Mobile and Desktop Icons (responsive) */}
            <div className="navbar-mobile-icons">
              {/* User Icon */}
              <span title="Account" className="navbar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="4" />
                  <path d="M4 20c0-3.5 16 0 16 0" />
                </svg>
              </span>
              {/* Search Icon */}
              <span title="Search" className="navbar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="18" y1="18" x2="15" y2="15" />
                </svg>
              </span>
              {/* Cart Icon */}
              <span title="Cart" className="navbar-icon navbar-icon-cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="8" width="12" height="9" rx="2" />
                  <circle cx="9" cy="19" r="1.5" />
                  <circle cx="15" cy="19" r="1.5" />
                </svg>
                <span className="navbar-cart-dot">0</span>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <input
            type="search"
            placeholder="WHICH MANUKA IS FOR ME?"
            className="navbar-searchbox"
          />
          <nav className="navbar-nav mobile">
            <button className="navbar-btn">Shop</button>
            <button className="navbar-btn">Explore</button>
            <button className="navbar-btn">About</button>
            <button className="navbar-btn">Rewards</button>
            <button className="navbar-btn">Contact</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="content">
        <div className="left">
          <ProductCarousel />
        </div>
        <div className="right">
          <ProductDetails />
          <ProductSelection />
          <BundleSection />
          <OrderSection />
        </div>
      </div>
    </div>
  );
}

export default App;
