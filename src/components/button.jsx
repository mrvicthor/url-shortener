import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const STYLES = ["btn--primary", "btn--outline", "btn--cta"];

  const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--login"];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/signup" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
