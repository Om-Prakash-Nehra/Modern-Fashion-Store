import React from "react";
import AboutComponentMini from "../../SubComponents/About";

const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>
            We are committed to ensuring that your experience with us is seamless, stress-free, and enjoyable. Your comfort is at the heart of everything we do.
          </p>
          <p>
            Our team works tirelessly to deliver exceptional service, creating a trusted environment where you can relax and focus on what truly matters.
          </p>
          <p>
            From personalized solutions to unmatched attention to detail, we strive to exceed your expectations and make every interaction memorable.
          </p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
