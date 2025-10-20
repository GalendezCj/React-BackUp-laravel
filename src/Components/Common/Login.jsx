import React from 'react'
import Footer from './Footer'
import { Header } from './Header'
import { FaUser, FaLock, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    // Later: connect to Laravel API via axios
  };


  return (
   <>

<Header/>


   <main>
   <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <FaLeaf className="leaf-icon" />
          <h1>Farmers Market Login</h1>
          <p>Welcome back! Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="footer-text">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="link">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <footer className="login-footer">
        © 2025 Farmers Market. All rights reserved.
      </footer>
    </div>

   </main>

    <Footer/>
   </>
  )
}
