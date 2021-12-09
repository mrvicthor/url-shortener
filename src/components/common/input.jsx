import React from "react";

function Input({ type, label, name, onChange, error }) {
  return (
    <>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={label}
        id="search"
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default Input;
