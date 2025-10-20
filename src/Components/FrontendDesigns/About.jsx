import React from "react";
import aboutImg from "../FrontendDesigns/images/Welcome-bg.jpg"; // ✅ Replace with your actual image path or URL
import Footer from "../Common/Footer";
import { Header } from "../Common/Header";

export const About = () => {
  return (

    <> 
    
    <Header/>
    
    <section className="about-section">
      <div className="container about-container">
        {/* 📸 LEFT — IMAGE */}
        <div className="about-image">
          <img
            src={aboutImg}
            alt="About Our Farm"
          />
        </div>

        {/* 📝 RIGHT — TEXT */}
        <div className="about-text">
          <h2>About Us</h2>
          <h4>Bringing Nature Closer to Your Table 🌿</h4>
          <p>
            We believe in providing fresh, organic, and locally grown produce
            that nourishes your family and supports local farmers. Our journey
            started with a simple mission — to make healthy living accessible
            and sustainable for everyone.
          </p>

          <p>
            Every product we offer is carefully handpicked from trusted farms,
            ensuring only the best quality reaches your kitchen. Together, we’re
            building a healthier, greener future — one harvest at a time.
          </p>

          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
    
    <Footer/>
    
    </>
   
  );
};
