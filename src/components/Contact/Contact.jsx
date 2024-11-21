import React from "react";
import { RiFacebookBoxLine,RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>We are here to assist you with any questions or concerns you may have. Feel free to reach out!</p>
        <p>
          Whether you have an inquiry, need support, or want to learn more about our services, we are just a message away.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="contact us" />
          <div className="content">
            <h3>Let's Connect</h3>
            <div>
              <p>Phone</p>
              <span>+91 9999999999</span>
            </div>
            <div>
              <p>Email</p>
              <span>omprakashnehra078@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>House No. xxxx, Sector xxx</span>
            </div>
            <ul>
              <li>
                <Link to={"/facebook"} target="_blank" aria-label="Facebook">
                  <RiFacebookBoxLine />
                </Link>
              </li>
              <li>
                <Link to={"/twitter"} target="_blank" aria-label="Twitter">
                  <RiTwitterXFill />
                </Link>
              </li>
              <li>
                <Link to={"/linkedin"} target="_blank" aria-label="LinkedIn">
                  <RiLinkedinBoxFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
