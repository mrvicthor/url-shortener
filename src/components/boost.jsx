import React from "react";
import { Link } from "react-scroll";
import "./boost.css";

function Boost() {
  return (
    <div className="boost" id="pricing">
      <div className="container">
        <div className="boost-body">
          <h3>Boost your links today</h3>
          <Link to="get-started" className="boost-get-started">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Boost;
