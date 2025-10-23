import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser , FaShoppingCart, FaFacebookF, FaInstagram, FaBell, FaQuestionCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <header>

        {/* 🔝 TOP NAVBAR */}
        <div className="top-nav bg-light border-bottom py-1">
          <div className="container d-flex justify-content-between align-items-center">
            
            {/* LEFT SIDE */}
            <div className="d-flex align-items-center gap-3">
              <a href="/seller-center" className="text-dark text-decoration-none small">Seller Center</a>
              <a href="/start-selling" className="text-dark text-decoration-none small">Start Selling</a>
              <span className="text-muted small">|</span>
              <span className="text-dark small">Follow Us:</span>
              <a href="https://facebook.com" className="text-dark ms-2"><FaFacebookF /></a>
              <a href="https://instagram.com" className="text-dark ms-2"><FaInstagram /></a>
            </div>

            {/* RIGHT SIDE */}
            <div className="d-flex align-items-center gap-3">
              <a href="/notifications" className="text-dark text-decoration-none small d-flex align-items-center gap-1">
                <FaBell /> <span>Notifications</span>
              </a>
              <a href="/help" className="text-dark text-decoration-none small d-flex align-items-center gap-1">
                <FaQuestionCircle /> <span>Help</span>
              </a>
             
<a href="/user/Profile" className="text-dark text-decoration-none small d-flex align-items-center gap-2">
  <FaUser /> <span>Profile</span>
</a>
            </div>
          </div>
        </div>

        {/* 🌾 MAIN NAVBAR */}
        <div className="container py-1">
          <Navbar expand="lg">
            <Navbar.Brand href="/" className="logo">
              <span>Farmers</span> Market
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link href="/user/dashboard" className="nav-link">HOME</Nav.Link>
                <Nav.Link href="/about" className="nav-link">ABOUT US</Nav.Link>
                <Nav.Link href="#services" className="nav-link">SERVICES</Nav.Link>
              

                {/* 🔍 Search Bar */}
                <form className="search-bar d-flex ms-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                  />
                  <button type="submit" className="btn-search">
                    🔍
                  </button>
                </form>

                {/* 🛒 Cart Icon */}
                <div className="cart-icon ms-3 position-relative">
                  <a href="/cart" className="text-decoration-none text-dark position-relative">
                    <FaShoppingCart />
                    <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </a>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  )
}
