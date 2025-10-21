import React, { useState } from 'react'
import Footer from '../Common/Footer'
import { Header } from '../Common/Header'
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {

  const navigate =useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onSubmit = async(data) => {

    const res = await fetch("http://localhost:8000/api/authenticates" , 
        {method: 'POST' ,
          headers:{ 
            'Content-type' : 'application/json'
          },
          body : JSON.stringify(data)
        }
      );

      const result = await res.json();

         if(result.status == false){ 
          toast.error(result.error)
         }else{ 

          const userInfo={
            id: result.id, 
            token: result.token
          }

          localStorage.setItem('userInfo' ,JSON.stringify(userInfo))

          navigate('/admin/dashboard')

         }
      console.log(result);
    }
  

  return (
    <>
      <Header />

      <main>
        <div className="login-container">
          <div className="login-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="login-title">Login</h4>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                 
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
                </div>
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                 
                  <input

                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",          
                        message: "Password must be at least 6 characters",   
                    })}            
                    type="password" className={`form-control ${errors.password && 'is-invalid'}`} />
                </div>

                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>

              {/* Login Error */}
              {loginError && <p className="error-message">{loginError}</p>}

              <button type="submit" className="login-btn">Login</button>

              <p className="signup-link">
                Don’t have an account? <Link to="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
