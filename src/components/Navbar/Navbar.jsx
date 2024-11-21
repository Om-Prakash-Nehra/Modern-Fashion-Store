import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/');
  };

  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={() => gotoHome()}>LUXURY RENTALS</div>
        <ul>
          <li>
            <Link to="/" style={{ color: "blue", fontWeight: "bold" }}>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" style={{ color: "blue", fontWeight: "bold" }}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/villas" style={{ color: "blue", fontWeight: "bold" }}>VILLAS</Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "blue", fontWeight: "bold" }}>CONTACT</Link>
          </li>
          <li>
            <Link to="/user-signup" style={{ color: "Red", fontWeight: "bold" }}>Signup</Link>
          </li>
          <li>
            <Link to="/owner-login" style={{ color: "Red", fontWeight: "bold" }}>Owner Login</Link>
          </li>
        </ul>
        
      </nav>
    </>
  );
};

export default Navbar;
