import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo-wrapper">
            <Link to="/">
              <img
                src="images/logo1.svg"
                className="footer-logo"
                alt="footer-logo"
              />
            </Link>
          </div>
          <div className="footer-links">
            <h4>Features</h4>
            <div className="footer-links-container">
              <Link className="footer-links-item" to="">
                Link Shortening
              </Link>
              <Link className="footer-links-item" to="">
                Branded Links
              </Link>
              <Link className="footer-links-item" to="">
                Analytics
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <div className="footer-links-container">
              <Link className="footer-links-item" to="">
                Blog
              </Link>
              <Link className="footer-links-item" to="">
                Developers
              </Link>
              <Link className="footer-links-item" to="">
                Support
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <div className="footer-links-container">
              <Link className="footer-links-item" to="">
                About
              </Link>
              <Link className="footer-links-item" to="">
                Our Teams
              </Link>
              <Link className="footer-links-item" to="">
                Careers
              </Link>
              <Link className="footer-links-item" to="">
                Contact
              </Link>
            </div>
          </div>

          <div className="footer-links-social">
            <Link className="footer-social-icon" to="">
              <i className="fab fa-facebook-square"></i>
            </Link>
            <Link className="footer-social-icon" to="">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="footer-social-icon" to="">
              <i className="fab fa-pinterest"></i>
            </Link>
            <Link className="footer-social-icon" to="">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
