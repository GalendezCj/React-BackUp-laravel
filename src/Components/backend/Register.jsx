import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Common/Footer";
import logo from "../../assets/images/farmerslogo (2).png";

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Account created successfully! Please log in.");
        navigate("/");
      } else {
        toast.error(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <h3 className="navbar-title">Farmers Market</h3>
          </div>

          <div className="navbar-right">
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/register" className="nav-btn active">Sign Up</Link>
          </div>
        </div>
      </nav>

     
      <main>
        <div className="register-page">
          <div className="register-left">
            <img src={logo} alt="Logo" className="register-logo" />
          </div>

          <div className="register-right">
            <div className="register-card">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="register-title">Create Account</h4>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Enter your full name"
                    className={`form-control ${errors.name && "is-invalid"}`}
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )}
                </div>

               
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
                    type="email"
                    placeholder="Enter your email"
                    className={`form-control ${errors.email && "is-invalid"}`}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>

             
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type="password"
                    placeholder="Enter your password"
                    className={`form-control ${errors.password && "is-invalid"}`}
                  />
                  {errors.password && (
                    <p className="error-message">{errors.password.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password_confirmation">
                    Confirm Password
                  </label>
                  <input
                    {...register("password_confirmation", {
                      required: "Please confirm your password",
                    })}
                    type="password"
                    placeholder="Confirm your password"
                    className={`form-control ${
                      errors.password_confirmation && "is-invalid"
                    }`}
                  />
                  {errors.password_confirmation && (
                    <p className="error-message">
                      {errors.password_confirmation.message}
                    </p>
                  )}
                </div>

               
                <div className="form-group">
                  <label htmlFor="role">Select Role</label>
                  <select
                    {...register("role", { required: "Role is required" })}
                    className={`form-control ${errors.role && "is-invalid"}`}
                  >
                    <option value="">Choose...</option>
                    <option value="user">User</option>
                    <option value="admin">seller</option>
                  </select>
                  {errors.role && (
                    <p className="error-message">{errors.role.message}</p>
                  )}
                </div>

               
                <input type="hidden" {...register("status")} value="1" />

                <button type="submit" className="register-btn">
                  Register
                </button>

                <p className="login-link">
                  Already have an account? <Link to="/">Login</Link>
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

export default Register;
