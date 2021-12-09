import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Button from "./button";
import "./navbar.css";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    document.body.classList.toggle("hide-over-flow");
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <nav className="nav">
      <div className="navbar-wrapper container">
        <Link to="/" className="navbar-logo">
          <img src="images/logo.svg" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <LinkScroll
              activeClass="active"
              delay={1000}
              to="features"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Features
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              activeClass="active"
              delay={1000}
              to="pricing"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Pricing
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              activeClass="active"
              delay={1000}
              to="resources"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Resources
            </LinkScroll>
          </li>
          <li className="nav-item mobile">
            <div className="line"></div>
          </li>
          <li className="nav-item mobile">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item mobile">
            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
              SIGN UP
            </Button>
          </li>
        </ul>
        {button && (
          <div className="nav-buttons">
            <Link to="/login" className="btn--cta btn--login">
              Login
            </Link>
            <Button buttonStyle="btn--outline">SIGN UP</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
