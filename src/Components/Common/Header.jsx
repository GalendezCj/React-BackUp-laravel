import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaFacebookF, FaInstagram } from "react-icons/fa";
export const Header = () => {
  return (
   <>
     <header>

      <div className="container py-1">
        <Navbar expand="lg">
          <Navbar.Brand href="\" className="logo">
            <span>Farmers</span> Market
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="\" className="nav-link">HOME</Nav.Link>
              <Nav.Link href="\about" className="nav-link">ABOUT US</Nav.Link>
              <Nav.Link href="#services" className="nav-link">SERVICES</Nav.Link>
              <Nav.Link href="#contact" className="nav-link">CONTACT US</Nav.Link>

              {/* 🌱 Search Bar */}
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
             <div className="cart-icon ms-3">
             <a href="/cart" className="text-decoration-none text-dark position-relative">
            <FaShoppingCart />
            <span className="cart-count">0</span>
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
