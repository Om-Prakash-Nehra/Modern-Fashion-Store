import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              Welcome to our platform! We are dedicated to providing exceptional services that meet your needs.
            </p>
            <p>
              Our team works tirelessly to ensure a seamless experience, combining innovation with customer satisfaction.
            </p>
            <p>
              We believe in building long-lasting relationships by offering reliable, high-quality solutions tailored for you.
            </p>
            <p>
              Thank you for choosing us as your trusted partner. Together, we can achieve great things.
            </p>
          </div>
          <button>We strive to offer you the best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
