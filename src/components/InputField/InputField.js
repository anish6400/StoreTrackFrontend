import React from "react";
import "./InputField.css";
import colors from "../../services/colors.js";

function InputField({ placeholder, type, darkModeOn, onChange, value }) {
  return (
    <input
      className="inputFieldContainer"
      placeholder={placeholder}
      type={type}
      style={{
        backgroundColor: colors.getPrimaryBackground(darkModeOn),
        color: colors.getTextColor(darkModeOn),
      }}
      onChange={onChange}
      value={value}
    ></input>
  );
}

export default InputField;
