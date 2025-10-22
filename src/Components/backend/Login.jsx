import React, { useState } from 'react'
import Footer from '../Common/Footer'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../../assets/images/farmerslogo (2).png'

export const Login = () => {

  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/api/authenticates", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status === false) { 
        toast.error(result.error);
      } else { 
        const userInfo = {
          id: result.id, 
          token: result.token,
          role: result.role,
          name: result.name
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        toast.success(`Welcome ${result.name || 'back'}!`);

        if (result.role === 'admin') {
          navigate('/admin/dashboard');
        } else if (result.role === 'seller') {
          navigate('/seller/dashboard');
        } else {
          navigate('/user/dashboard');
        }
      }

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* 🌿 Navbar Section (Design Only) */}
     <nav className="navbar">
  <div className="navbar-container">
    <div className="navbar-left">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <h3 className="navbar-title">Farmers Market</h3>
    </div>

    <div className="navbar-right">
      <Link to="/login" className="nav-btn">Login</Link>
      <Link to="/register" className="nav-btn">Sign Up</Link>
    </div>
  </div>
</nav>


      <main>
        <div className="login-page">
          {/* Left Section: Logo */}
          <div className="login-left">
            <img
              src={logo}
              alt="Logo"
              className="login-logo"
            />
          </div>

          {/* Right Section: Login Form */}
          <div className="login-right">
            <div className="login-card">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="login-title">Login</h4>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                    type="text"
                    placeholder="Email"
                    className={`form-control ${errors.email && 'is-invalid'}`}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    className={`form-control ${errors.password && 'is-invalid'}`}
                  />
                  {errors.password && (
                    <p className="error-message">{errors.password.message}</p>
                  )}
                </div>

                <button type="submit" className="login-btn">Login</button>

                <p className="signup-link">
                  Don’t have an account? <Link to="/register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
