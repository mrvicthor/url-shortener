import React from "react";
import Input from "./common/input";
import "./form.css";

const Form = ({ handleChange, handleSubmit, newUrl, errors }) => {
  return (
    <form className="form container" id="get-started" onSubmit={handleSubmit}>
      <div className=" form-group">
        <Input
          name="link"
          label="Shorten a link here..."
          type="text"
          value={newUrl}
          onChange={handleChange}
          error={errors.link}
        />
        <button type="submit" className="btn--search">
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default Form;
