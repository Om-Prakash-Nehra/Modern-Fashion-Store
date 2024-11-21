import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <footer className={isHomePage ? "homePage_footer" : "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
            We are glad to see your interest in our website. We would love to help.
          </p>
          <ul>
            <li>
              <Link to="/termsandconditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 999999999</p>
          <p>Omprakashnerha078@gmail.com</p>
          <p>© All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
