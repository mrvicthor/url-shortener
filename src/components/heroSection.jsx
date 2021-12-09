import React from "react";
import { Link } from "react-scroll";
// import Button from "./button";

import "./heroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero--section container">
        <div className="hero--text">
          <h1>
            More than just
            <br /> shorter links
          </h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Link to="get-started" className="get-started">
            Get Started
          </Link>
        </div>
        <div className="hero--image-desktop">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/illustration-working.svg"
              alt=" alt-illustration"
            />

            <img
              className="desktop"
              src="/images/illustration-working.svg"
              alt="illustration"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
