import React, { useState } from "react";
import "./Signup.css";
import colors from "../../services/colors.js";
import InputField from "../../components/InputField/InputField.js";
import { userSignup } from "../../services/requests.js";
import { useHistory } from "react-router";

function Signup({ darkModeOn, addUserToken }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requesting, setRequesting] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  function signup() {
    setRequesting(true);
    userSignup(fullname, email, password).then((res) => {
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setError(null);
        addUserToken(res.data.token);
      }
      setRequesting(false);
    });
  }
  function handleNameChange(e) {
    setFullname(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="signupContainer">
      <div
        className="signupBox"
        style={{ backgroundColor: colors.getSecondaryBackground(darkModeOn) }}
      >
        <span
          style={{ color: colors.getTextColor(darkModeOn), fontWeight: "bold" }}
        >
          Sign up
        </span>
        {requesting ? (
          <span style={{ color: colors.getAccentColor, fontSize: "16px" }}>
            Trying to sign up...
          </span>
        ) : error ? (
          <span style={{ color: colors.getWarningColor, fontSize: "16px" }}>
            {error}
          </span>
        ) : null}
        <InputField
          placeholder="Full name"
          type="name"
          darkModeOn={darkModeOn}
          onChange={handleNameChange}
          value={fullname}
        />
        <InputField
          placeholder="Email ID"
          type="email"
          darkModeOn={darkModeOn}
          onChange={handleEmailChange}
          value={email}
        />
        <InputField
          placeholder="Password"
          type="password"
          darkModeOn={darkModeOn}
          onChange={handlePasswordChange}
          value={password}
        />
        <button
          className="signupButton"
          style={{ backgroundColor: colors.getAccentColor }}
          onClick={signup}
          disabled={requesting}
        >
          SIGN UP
        </button>
        <span
          style={{ color: colors.getTextColor(darkModeOn), fontSize: "16px" }}
        >
          Already have an account?{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "#6889FF",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => history.push("/login")}
          >
            Login
          </span>
        </span>
        {/* <span style={{ fontSize: "16px", color: colors.getPlaceholderColor }}>
          -----------or-----------
        </span> */}
      </div>
    </div>
  );
}

export default Signup;
