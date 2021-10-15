import React from "react";
import "./InputField.css";
import colors from "../../colors.js"

function InputField(props) {
  return (
    <input
      className="inputFieldContainer"
      placeholder={props.placeholder}
      type={props.type}
      style={
        props.darkModeOn
        ? {
            backgroundColor: colors.dark.primaryBackground,
            color: colors.dark.text
          }
        : {
            backgroundColor: colors.light.primaryBackground,
            color: colors.light.text
          }
      }
    ></input>
  );
}

export default InputField;
